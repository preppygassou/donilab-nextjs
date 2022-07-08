import React, { createContext, useState, useEffect } from "react";

function setLocalStorage(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // catch possible errors:
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
  }
}


function getLocalStorage(key, initialValue) {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  } catch (e) {
    // if error, return initial value
    return initialValue;
  }
}

export const CurrentLangContext = createContext({});

const CurrentLangContextProvider = props => {

  const [currentLang, SetCurrentLang] = useState(() => getLocalStorage("currentLang",localStorage.currentLang));

  useEffect(() => {
    setLocalStorage("currentLang", currentLang);
  }, [currentLang]);


  return (
    <CurrentLangContext.Provider value={{currentLang,SetCurrentLang}}>
      {props.children}
    </CurrentLangContext.Provider>
  );
};

export default CurrentLangContextProvider;
