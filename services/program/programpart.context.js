import React, {  createContext, useReducer, useEffect, useContext } from "react";
import { CurrentLangContext } from "~/Context/CurrentLangContext";
import ClientRepository from '../../repositories/ClientRepository';
import { useRouter } from "next/router";

const {
  PROGRAM_LIST_SUCCESS,
  PROGRAM_LIST_REQUEST,
  PROGRAM_LIST_FAIL,
  PROGRAM_LIST_TYPE_FAIL,
  PROGRAM_LIST_TYPE_REQUEST,
  PROGRAM_LIST_TYPE_SUCCESS,
  PROGRAM_LIST_TYPE_BYDONILAB_FAIL,
  PROGRAM_LIST_TYPE_BYDONILAB_REQUEST,
  PROGRAM_LIST_TYPE_BYDONILAB_SUCCESS,
  
} = require("../constants/ProgramConstants");


export const ProgramContext = createContext();

export const initialState = {
  programs: [],
  programsByDonilab: [],
  errorloadingprogrambydonilab: false,
  loadingprogramsbydonilab: false,
  program: null,
  error: false,
  loading: false,
};

function reducer(state , action) {
  switch (action.type) {
      case PROGRAM_LIST_TYPE_BYDONILAB_REQUEST:
      return { loadingprogramsbydonilab: true, programsByDonilab: [] };
    case PROGRAM_LIST_TYPE_BYDONILAB_SUCCESS:
      return { loadingprogramsbydonilab: false, programsByDonilab: action.payload };
    case PROGRAM_LIST_TYPE_BYDONILAB_FAIL:
      return { loadingprogramsbydonilab: false, errorloadingprogrambydonilab: action.payload };
      case "PROGRAM_DETAILS_REQUEST":
      return { loading: true };
    case "PROGRAM_DETAILS_SUCCESS":
      return { loading: false, program: action.payload };
    case "PROGRAM_DETAILS_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export const ProgramContextProvider = ({ children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
 
const params = useParams<{ locale: string; }>()
  const { locale} = params;
  const ProgrammestypesOfDonilab = 48;
  const ProgrammestypesWithPartnersId = 49;
  
  const listPrograms = async (lestypesdehub) => {
    try {
      dispatch({ type: PROGRAM_LIST_REQUEST });
      const { data } = await ClientRepository.get(
        `/programs?lestypesdehub=${lestypesdehub}` 
      );
      dispatch({ type: PROGRAM_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PROGRAM_LIST_FAIL, payload: error.message });
    }
  };
  
  const listProgramsTypeOfDonilab = async (ProgrammestypesOfDonilab) => {
    try {
      dispatch({ type: PROGRAM_LIST_TYPE_BYDONILAB_REQUEST });
      const { data } = await ClientRepository.get(
        `/programs?programmestypes=${ProgrammestypesOfDonilab}&lang=${locale}`
        
      );
      dispatch({ type: PROGRAM_LIST_TYPE_BYDONILAB_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PROGRAM_LIST_TYPE_BYDONILAB_FAIL, payload: error.message });
    }
  };
  

  const detailsProgram =  async (slug) => {
    try {
      dispatch({ type: "PROGRAM_DETAILS_REQUEST", payload: slug });
      const { data } = await ClientRepository.get(
        `/programs?slug=${slug}`
      );
      dispatch({ type: "PROGRAM_DETAILS_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "PROGRAM_DETAILS_FAIL", payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message, });
    }
  };
  
 /*  useEffect(() => {
   
    listProgramsTypeOfDonilab(locale)

  }, [locale]);
  useEffect(() => {
   
    
    listProgramsTypeWithPartner(locale)

  }, [locale]); */



  return (
    <ProgramContext.Provider
      value={{
       state,
       dispatch,
       listProgramsTypeOfDonilab,
      }}
    >
      {children}
    </ProgramContext.Provider>
  );
};
