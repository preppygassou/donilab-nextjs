import React, { useContext ,useState} from "react";
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import FRSVG from './../assets/svg/fr.svg'
import ENSVG from './../assets/svg/en.svg'
import { CurrentLangContext } from "../Context/CurrentLangContext";

const LanguageSelector = () => {
  //const { t, i18n } = useTranslation()
  const value = useContext(CurrentLangContext);
  const {SetCurrentLang} = value
  //const [CurrentLang, SetCurrentLang] = useState(window.localStorage.i18nextLng)
  //console.log("current lan" + CurrentLang)

  /* const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value)
  } */
  const changeLanguageToFR = () => {
    i18next.changeLanguage('fr')
    SetCurrentLang('fr') 

  }
  const changeLanguageToEN = () => {
    i18next.changeLanguage('en')
   SetCurrentLang('en')   
  }

  return ( 
    <div className="selectorlanguage">
    {/* <div onChange={changeLanguage}>
      <input type="radio" value="en" name="language" defaultChecked /> English
      <input type="radio" value="zh-hk" name="language"/> Traditional Chinese
    </div> */}
    {/* <button onClick={()=>i18next.changeLanguage('fr')}> */}
    <button onClick={changeLanguageToFR}>
      
      <img src={FRSVG } alt=""/>
    </button>
    <button onClick={changeLanguageToEN}>
    
    <img src={ENSVG } alt=""/>

    </button>
    </div>
  )
}

export default LanguageSelector