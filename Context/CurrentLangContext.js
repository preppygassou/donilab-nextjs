import Cookies from 'js-cookie';
import React, { createContext, useState, useEffect,useReducer } from "react";


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

const initialState = {
  locale: Cookies.get('locale') === "en" ? "en" : "fr",
};

function reducer(state, action) {
  switch (action.type) {
    case 'EN_MODE_ON':
      return { ...state, locale: "en" };
    case 'EN_MODE_OFF':
      return { ...state, locale: "fr" };
    default:
      return state;
  }
}

const CurrentLangContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
 // const [currentLang, SetCurrentLang] = useState(() => getLocalStorage("currentLang",localStorage.currentLang));
  const value = { state, dispatch };

 /*  useEffect(() => {
    setLocalStorage("currentLang", currentLang);
  }, [currentLang]); */


  return (
    <CurrentLangContext.Provider value={value}>
      {props.children}
    </CurrentLangContext.Provider>
  );
};

export default CurrentLangContextProvider;
