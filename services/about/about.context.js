import React, {  createContext, useReducer, useEffect, useContext } from "react";
import { CurrentLangContext } from "~/Context/CurrentLangContext";
import ClientRepository from '../../repositories/ClientRepository';



export const AboutContext = createContext();

export const initialState = {

  abouts: [],
  error: false,
  loading: false,
};

function reducer(state , action) {
  switch (action.type) {
    case "GET_ABOUTS_REQUEST":
      return { loading: true, abouts: [] };
    case "GET_ABOUTS_SUCCESS":
      return { loading: false, abouts: action.payload };
    case "GET_ABOUTS_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export const AboutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
   const { state:stateLocale } = useContext(CurrentLangContext);
    const {locale} =  stateLocale

  const getAbouts = async (locale) => {
    try {
      dispatch({ type: "GET_ABOUTS_REQUEST" });
      const { data } = await ClientRepository.get(
        `/about/?lang=${locale}`
      );
      dispatch({ type: "GET_ABOUTS_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "GET_ABOUTS_FAIL", payload: error.message });
    }
  };



  useEffect(() => {
   
    getAbouts(locale)

  }, [locale]);



  return (
    <AboutContext.Provider
      value={{
       state,
       dispatch,
      }}
    >
      {children}
    </AboutContext.Provider>
  );
};
