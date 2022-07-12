import React, {  createContext, useReducer, useEffect, useContext } from "react";
import { CurrentLangContext } from "~/Context/CurrentLangContext";
import ClientRepository from '../../repositories/ClientRepository';
const {
  PARTENAIRE_LIST_SUCCESS,
  PARTENAIRE_LIST_REQUEST,
  PARTENAIRE_LIST_FAIL,
  
  
} = require("../constants/PartenaireConstants");


export const PartenaireContext = createContext();

export const initialState = {
  partenaires: [],
  error: false,
  loading: false,
};

function reducer(state , action) {
  switch (action.type) {
    case PARTENAIRE_LIST_REQUEST:
      return { loading: true, partenaires: [] };
    case PARTENAIRE_LIST_SUCCESS:
      return { loading: false, partenaires: action.payload };
    case PARTENAIRE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export const PartenaireContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  /* const { state:stateLocale } = useContext(CurrentLangContext);
    const {locale} =  stateLocale */

  const listPartenaires = async () => {
    try {
      dispatch({ type: PARTENAIRE_LIST_REQUEST });
      const { data } = await ClientRepository.get(
        "/partenaire"
      );
      dispatch({ type: PARTENAIRE_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PARTENAIRE_LIST_FAIL, payload: error.message });
    }
  };
  
  

  useEffect(() => {
   
    listPartenaires()

  }, []);



  return (
    <PartenaireContext.Provider
      value={{
       state,
       dispatch,
      }}
    >
      {children}
    </PartenaireContext.Provider>
  );
};
