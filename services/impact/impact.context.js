import React, {  createContext, useReducer, useEffect, useContext } from "react";
import { CurrentLangContext } from "~/Context/CurrentLangContext";
import ClientRepository from '../../repositories/ClientRepository';
import { useRouter } from "next/router";


export const ImpactContext = createContext();

export const initialState = {
  impacts: [],
  error: false,
  loading: false,
};

function reducer(state , action) {
  switch (action.type) {
    case "IMPACT_LIST_REQUEST":
      return { loading: true, impacts: [] };
    case "IMPACT_LIST_SUCCESS":
      return { loading: false, impacts: action.payload };
    case "IMPACT_LIST_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export const ImpactContextProvider = ({ children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  

const params = useParams<{ locale: string; }>()
  const { locale} = params;

  const listImpacts = async (locale) => {
    try {
      dispatch({ type: "IMPACT_LIST_REQUEST" });
      const { data } = await ClientRepository.get(
        `/impacts/?lang=${locale}`
      );
      dispatch({ type: "IMPACT_LIST_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "IMPACT_LIST_FAIL", payload: error.message });
    }
  };
  


  useEffect(() => {
   
    listImpacts(locale)

  }, [locale]);



  return (
    <ImpactContext.Provider
      value={{
       state,
       dispatch,
      }}
    >
      {children}
    </ImpactContext.Provider>
  );
};
