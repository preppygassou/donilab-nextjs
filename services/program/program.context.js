import React, {  createContext, useReducer, useEffect } from "react";
import ClientRepository from '../../repositories/ClientRepository';

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
  PROGRAM_DETAILS_FAIL,
  PROGRAM_DETAILS_REQUEST,
  PROGRAM_DETAILS_SUCCESS,
  
} = require("../constants/ProgramConstants");


export const ProgramContext = createContext();

export const initialState = {
  programs: [],
  program: null,
  programsByDonilab: [],
  programsWithPartners: [],
  error: false,
  errorloadingprogrambydonilab: false,
  loading: false,
  loadingprogramsbydonilab: false,
};

function reducer(state , action) {
  switch (action.type) {
    case PROGRAM_LIST_REQUEST:
      return { loading: true, programs: [] };
    case PROGRAM_LIST_SUCCESS:
      return { loading: false, programs: action.payload };
    case PROGRAM_LIST_FAIL:
      return { loading: false, error: action.payload };
      case PROGRAM_LIST_TYPE_BYDONILAB_REQUEST:
      return { loadingprogramsbydonilab: true, programsByDonilab: [] };
    case PROGRAM_LIST_TYPE_BYDONILAB_SUCCESS:
      return { loadingprogramsbydonilab: false, programsByDonilab: action.payload };
    case PROGRAM_LIST_TYPE_BYDONILAB_FAIL:
      return { loadingprogramsbydonilab: false, errorloadingprogrambydonilab: action.payload };
      case PROGRAM_LIST_TYPE_REQUEST:
      return { loading: true, programsWithPartners: [] };
    case PROGRAM_LIST_TYPE_SUCCESS:
      return { loading: false, programsWithPartners: action.payload };
    case PROGRAM_LIST_TYPE_FAIL:
      return { loading: false, error: action.payload };
      case PROGRAM_DETAILS_REQUEST:
      return { loading: true };
    case PROGRAM_DETAILS_SUCCESS:
      return { loading: false, program: action.payload };
    case PROGRAM_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export const ProgramContextProvider = ({ children,locale }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
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
  
  
  const listProgramsTypeWithPartner = async (ProgrammestypesWithPartnersId) => {
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
  
  const detailsProgram =  async (slug) => {
    try {
      dispatch({ type: PROGRAM_DETAILS_REQUEST, payload: slug });
      const { data } = await ClientRepository.get(
        `/programs?slug=${slug}`
      );
      dispatch({ type: PROGRAM_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PROGRAM_DETAILS_FAIL, payload:
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
       detailsProgram,
       listProgramsTypeOfDonilab,
       listProgramsTypeWithPartner
      }}
    >
      {children}
    </ProgramContext.Provider>
  );
};
