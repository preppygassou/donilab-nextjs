import React, {  createContext, useReducer, useEffect, useContext } from "react";
import { CurrentLangContext } from "~/Context/CurrentLangContext";
import ClientRepository from '../../repositories/ClientRepository';

const {
  PROGRAM_LIST_TYPE_FAIL,
  PROGRAM_LIST_TYPE_REQUEST,
  PROGRAM_LIST_TYPE_SUCCESS,

  
} = require("../constants/ProgramConstants");


export const ProgramPartnersContext = createContext();

export const initialState = {
 
  programsWithPartners: [],
  error: false,
  loading: false,
  
};

function reducer(state , action) {
  switch (action.type) {

      case PROGRAM_LIST_TYPE_REQUEST:
      return { loading: true, programsWithPartners: [] };
    case PROGRAM_LIST_TYPE_SUCCESS:
      return { loading: false, programsWithPartners: action.payload };
    case PROGRAM_LIST_TYPE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export const ProgramPartnersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { state:stateLocale } = useContext(CurrentLangContext);
    const {locale} =  stateLocale
  const ProgrammestypesWithPartnersId = 49;


  const listProgramsPartner = async (locale) => {
    try {
      dispatch({ type: PROGRAM_LIST_TYPE_REQUEST });
      const { data } = await ClientRepository.get(
        `/programs?programmestypes=${ProgrammestypesWithPartnersId}&lang=${locale}`
      );
      dispatch({ type: PROGRAM_LIST_TYPE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PROGRAM_LIST_TYPE_FAIL, payload: error.message });
    }
  };
  
  useEffect(() => {

    listProgramsPartner(locale)

  }, [locale]);



  return (
    <ProgramPartnersContext.Provider
      value={{
       state,
       dispatch,
      }}
    >
      {children}
    </ProgramPartnersContext.Provider>
  );
};
