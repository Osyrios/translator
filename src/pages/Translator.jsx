import {useState} from "react";
import {Home} from "./Home.jsx";
import {Header} from "../components/Header.jsx";

export function Translator() {

  const authKey = "8f04a00f-c154-ae44-3d9a-3f34fd6fcbb2:fx";

  const [translatedText, setTranslatedText] = useState('');
  const [inputText, setInputText] = useState('');
  const [targetLang, setTargetLang] = useState('');

  // Function for calling Deepl API
  const translateText = async (text, targetLang) => {
    const response = await fetch(`https://api-free.deepl.com/v2/translate?auth_key=${authKey}&text=${encodeURIComponent(text)}&target_lang=${targetLang}`);
    const data = await response.json();
    return data.translations[0].text;
  };

  //Function to handle the translation action
  const handleTranslation = async (e) => {
    try{
      e.preventDefault()
      const translated = await translateText(inputText, targetLang);
      setTranslatedText(translated)
    }catch (error){
      console.error("Translation error:", error);
    }
  };

  // Function to handle Target Langage change
  const handleChangeTargetLang = (e)=>{
    setTargetLang(e.target.value)
  }

  // Function to handle Input Text change
  const handleChangeInputText = (e)=>{
    setInputText(e.target.value)
  }

  return (
    <div>
      <Header/>
      <div>
        <input type="text" onChange={handleChangeInputText}/>
        <select>
          <option onClick={handleChangeTargetLang}>FR</option>
          <option onClick={handleChangeTargetLang}>EN</option>
          <option onClick={handleChangeTargetLang}>DE</option>
          <option onClick={handleChangeTargetLang}>JA</option>
        </select>
        <button type="button" onClick={handleTranslation}> Traduire</button>
        <p>{translatedText}</p>
      </div>
    </div>
  );
}