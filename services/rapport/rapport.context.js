import React, {  createContext, useReducer, useEffect, useContext } from "react";
import { CurrentLangContext } from "~/Context/CurrentLangContext";
import ClientRepository from '../../repositories/ClientRepository';
import { useRouter } from "next/router";


export const RapportContext = createContext();

export const initialState = {
  rapports: [],
  error: false,
  loading: false,
};

function reducer(state , action) {
  switch (action.type) {
    case "RAPPORT_LIST_REQUEST":
      return { loading: true, rapports: [] };
    case "RAPPORT_LIST_SUCCESS":
      return { loading: false, rapports: action.payload };
    case "RAPPORT_LIST_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export const RapportContextProvider = ({ children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const Listrapports = async (locale) => {
    try {
      dispatch({ type: "RAPPORT_LIST_REQUEST" });
      const { data } = await ClientRepository.get(
        `/rapport`
      );
      dispatch({ type: "RAPPORT_LIST_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "RAPPORT_LIST_FAIL", payload: error.message });
    }
  };
  


  useEffect(() => {
   
    Listrapports()

  }, []);



  return (
    <RapportContext.Provider
      value={{
       state,
       dispatch,
      }}
    >
      {children}
    </RapportContext.Provider>
  );
};

export const useRapport=()=>useContext(RapportContext)