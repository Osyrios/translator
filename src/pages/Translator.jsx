import {useState} from "react";
import {Header} from "../layout/Header.jsx";

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
      <div className="font-roboto mt-24 flex flex-col items-center">

        <div className="flex flex-col items-center justify-center">
          <h3 className="text-center">Saisissez votre texte</h3>
          <input onChange={handleChangeInputText} className=" text-center border-2 border-violet-500 p-2 rounded-2xl"/>

          <div className="flex flex-col pt-5">
            <label htmlFor="select">Traduire en:</label>
            <select name="select" className="ms-3 text-center rounded-2xl bg-violet-500 ">
              <option onClick={handleChangeTargetLang}>FR</option>
              <option onClick={handleChangeTargetLang}>EN</option>
              <option onClick={handleChangeTargetLang}>DE</option>
              <option onClick={handleChangeTargetLang}>JA</option>
            </select>
          </div>
        </div>

        <div className="flex flex-row justify-center">
          <button type="button" onClick={handleTranslation} className="mt-10 p-2 text-center rounded-3xl bg-violet-500 italic font-bold"> Traduire</button>
        </div>

        <div className="flex flex-col items-center mt-10 ">
          <h3>Votre traduction</h3>
          <p className="border p-3 m-2 rounded-2xl border-violet-500">{translatedText}</p>
        </div>

      </div>
    </div>
  );
}