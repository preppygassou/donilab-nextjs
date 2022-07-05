import React, { useContext ,useState} from "react";
import i18next from 'i18next'
import { CurrentLangContext } from "../Context/CurrentLangContext";
import { useRouter } from "../node_modules/next/router";

const LanguageSelector = ({current}) => {
  //const { t, i18n } = useTranslation('common')
  const router = useRouter()
/*   const value = useContext(CurrentLangContext);
  const {SetCurrentLang} = value */
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
  const onChangeLanguage = (lang) => {
    router.push(router.asPath, undefined, { locale: lang })
}

  return ( 
    <div className="selectorlanguage">
    {/* <div onChange={changeLanguage}>
      <input type="radio" value="en" name="language" defaultChecked /> English
      <input type="radio" value="zh-hk" name="language"/> Traditional Chinese
    </div> */}
    {/* <button onClick={()=>i18next.changeLanguage('fr')}> */}
    {
      current==="en" ?
      <button onClick={()=>{onChangeLanguage("fr")}}>
      
      <img src={"/static/assets/svg/fr.svg"} alt=""/>
    </button>
      : <button onClick={()=>{onChangeLanguage("en")}}>
    
      <img src={"/static/assets/svg/en.svg"} alt=""/>
  
      </button>

    }
    
    </div>
  )
}

export default LanguageSelector