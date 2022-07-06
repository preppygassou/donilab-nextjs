import React, {  createContext, useReducer, useEffect } from "react";
import ClientRepository from '../../repositories/ClientRepository';


const {
  DEXPERTISE_LIST_SUCCESS,
  DEXPERTISE_LIST_REQUEST,
  DEXPERTISE_LIST_FAIL,
  DEXPERTISE_DETAILS_FAIL,
  DEXPERTISE_DETAILS_REQUEST,
  DEXPERTISE_DETAILS_SUCCESS,
  
} = require("../constants/DexpertiseConstants");


export const DexpertiseContext = createContext();

export const initialState = {
  dexpertises: [],
  dexpertise:null,
  error: false,
  loading: false,
};

function reducer(state , action) {
  switch (action.type) {
    case DEXPERTISE_LIST_REQUEST:
      return { loading: true, dexpertises: [] };
    case DEXPERTISE_LIST_SUCCESS:
      return { loading: false, dexpertises: action.payload };
    case DEXPERTISE_LIST_FAIL:
      return { loading: false, error: action.payload };
      case DEXPERTISE_DETAILS_REQUEST:
        return { loading: true };
      case DEXPERTISE_DETAILS_SUCCESS:
        return { loading: false, dexpertise: action.payload };
      case DEXPERTISE_DETAILS_FAIL:
        return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export const DexpertiseContextProvider = ({ children,locale }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const listDexpertises = async (locale) => {
    try {
      dispatch({ type: DEXPERTISE_LIST_REQUEST });
      const { data } = await ClientRepository.get(
        `/dexpertise/?lang=${locale}`
      );
      dispatch({ type: DEXPERTISE_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: DEXPERTISE_LIST_FAIL, payload: error.message });
    }
  };
  
  
  const detailsDexpertise = async (expertiseId) => {
    try {
      dispatch({ type: DEXPERTISE_DETAILS_REQUEST, payload: expertiseId
       });
      const { data } = await ClientRepository.get(
        `/dexpertise/${expertiseId}`     
      );
      dispatch({ type: DEXPERTISE_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: DEXPERTISE_DETAILS_FAIL, payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message, });
    }
  };

  useEffect(() => {
   
    listDexpertises(locale)

  }, [locale]);



  return (
    <DexpertiseContext.Provider
      value={{
       state,
       dispatch,
       detailsDexpertise,
      }}
    >
      {children}
    </DexpertiseContext.Provider>
  );
};
