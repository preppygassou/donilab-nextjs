import React, { useContext ,useState} from "react";
import Cookies from 'js-cookie';
import { CurrentLangContext } from "../Context/CurrentLangContext";
import { useRouter } from "next/router";

const LanguageSelector = ({}) => {
  //const { t, i18n } = useTranslation('common')
  const { state,dispatch } = useContext(CurrentLangContext);
    //const {locale} =  state
    const router = useRouter()
    const { locale } = useRouter();
/*   const { state:stateLocale } = useContext(CurrentLangContext);
  const {locale} =  stateLocale
  const {SetCurrentLang} = value */
  //const [CurrentLang, SetCurrentLang] = useState(window.localStorage.i18nextLng)
  //console.log("current lan" + CurrentLang)

  /* const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value)
  } */
 /*  const changeLanguageToFR = () => {
    i18next.changeLanguage('fr')
    SetCurrentLang('fr') 

  }
  const changeLanguageToEN = () => {
    i18next.changeLanguage('en')
   SetCurrentLang('en')   
  } */

  const onChangeLanguage = (lang) => {
    router.push(router.asPath, undefined, { locale: lang })
    /* if(lang === 'en') {
        router.push('en')
    } else {
        
        router.push('/fr')
    } */
}

/*   const onChangeLanguage = (lang) => {
   
    dispatch({ type: lang==="fr" ? 'EN_MODE_OFF' : 'EN_MODE_ON' });
    Cookies.set('locale', lang==="en" ? 'en' : 'fr');
} */

  return ( 
    <div className="selectorlanguage">
    {/* <div onChange={changeLanguage}>
      <input type="radio" value="en" name="language" defaultChecked /> English
      <input type="radio" value="zh-hk" name="language"/> Traditional Chinese
    </div> */}
    {/* <button onClick={()=>i18next.changeLanguage('fr')}> */}
    {
      locale==="en" ?
      <button onClick={()=>onChangeLanguage("fr")}>
      
      <img src={"/static/assets/svg/fr.svg"} alt=""/>
    </button>
      : <button onClick={()=>onChangeLanguage("en")}>
    
      <img src={"/static/assets/svg/en.svg"} alt=""/>
  
      </button>

    }
    
    </div>
  )
}

export default LanguageSelector