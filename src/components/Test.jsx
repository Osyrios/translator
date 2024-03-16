import {useState} from "react";


export function Test() {


  const authKey = "8f04a00f-c154-ae44-3d9a-3f34fd6fcbb2:fx";

  const [translatedText, setTranslatedText] = useState('');
  const [inputText, setInputText] = useState('');
  const [targetLang, setTargetLang] = useState('');

  const translateText = async (text, targetLang) => {
    const response = await fetch(`https://api-free.deepl.com/v2/translate?auth_key=${authKey}&text=${encodeURIComponent(text)}&target_lang=${targetLang}`);
    const data = await response.json();
    return data.translations[0].text;
  };

  const handleTranslation = async (e) => {
    try{
      e.preventDefault()
      const translated = await translateText(inputText, targetLang);
      setTranslatedText(translated)
    }catch (error){
      console.error("Translation error:", error);
    }
  };

  const handleChangeTargetLang = (e)=>{
    setTargetLang(e.target.value)
  }

  const handleChangeInputText = (e)=>{
    setInputText(e.target.value)
  }

  return (
    <div>
      <input type="text" onChange={handleChangeInputText}/>
      <input type="text" onChange={handleChangeTargetLang}/>
      <button type="button" onClick={handleTranslation}> Traduire</button>
      <p>{translatedText}</p>
    </div>
  );
}