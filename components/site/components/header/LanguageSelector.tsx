import React from "react";
import { useParams, useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';
import {i18n,type Locale } from "@/i18n-config";
import { setCookie } from "@/lib/utils";

const LanguageSelector = ({}) => {
  const params = useParams<{ locale: string; }>()
  const { locale} = params;
  const router = useRouter();
  const pathName = usePathname();


 
  const onChangeLanguage = (lang: Locale) => {
    /* if (!pathName) return router.push("/") ;
    const segments = pathName.split("/");
    segments[1] = lang;
    return router.push(segments.join("/")) ; */
    if (!pathName) {
      return window.location.href = "/";
      
    }

    const currentPath = window.location.pathname;

    // Check if the current path already starts with a supported locale
    const pathSegments = currentPath.split('/');
    if (i18n.locales.includes(pathSegments[1])) {
      // Replace the existing locale with the new one
      pathSegments[1] = lang;
      const newPath = pathSegments.join('/');
      setCookie('NEXT_LOCALE', lang, 365);
      window.location.href = newPath;
    } else {
      // Prepend the new locale to the path
      const newPath = `/${lang}${currentPath}`;
      setCookie('NEXT_LOCALE', lang, 365);
      window.location.href = newPath;
    }
  }


  return ( 
    <div className="selectorlanguage">
    {
      locale==="en" ?
      <button onClick={()=>onChangeLanguage("fr")}>
      
      <img src={"/assets/svg/fr.svg"} alt=""/>
    </button>
      : <button onClick={()=>onChangeLanguage("en")}>
    
      <img src={"/assets/svg/en.svg"} alt=""/>
  
      </button>

    }
    
    </div>
  )
}

export default LanguageSelector