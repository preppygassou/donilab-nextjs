import React, {  createContext, useReducer, useEffect, useContext } from "react";
import { CurrentLangContext } from "~/Context/CurrentLangContext";
import ClientRepository from '../../repositories/ClientRepository';
import { useRouter } from "next/router";
const {
  EXPERTISE_LIST_SUCCESS,
  EXPERTISE_LIST_REQUEST,
  EXPERTISE_LIST_FAIL,
  EXPERTISE_DETAILS_FAIL,
  EXPERTISE_DETAILS_REQUEST,
  EXPERTISE_DETAILS_SUCCESS,
  
} = require("../constants/ExpertiseConstants");


export const ExpertiseContext = createContext();

export const initialState = {
  expertises: [],
  expertise:null,
  error: false,
  loading: false,
};

function reducer(state , action) {
  switch (action.type) {
    case EXPERTISE_LIST_REQUEST:
      return { loading: true, expertises: [] };
    case EXPERTISE_LIST_SUCCESS:
      return { loading: false, expertises: action.payload };
    case EXPERTISE_LIST_FAIL:
      return { loading: false, error: action.payload };
      case EXPERTISE_DETAILS_REQUEST:
      return { loading: true };
    case EXPERTISE_DETAILS_SUCCESS:
      return { loading: false, expertise: action.payload };
    case EXPERTISE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export const ExpertiseContextProvider = ({ children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  

const params = useParams<{ locale: string; }>()
  const { locale} = params;

  const listExpertises = async (locale) => {
    try {
      dispatch({ type: EXPERTISE_LIST_REQUEST });
      const { data } = await ClientRepository.get(
        `/expertises/?lang=${locale}`
      );
      dispatch({ type: EXPERTISE_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: EXPERTISE_LIST_FAIL, payload: error.message });
    }
  };
  
  
  const detailsExpertise = async (expertiseId) => {
    try {
      dispatch({ type: EXPERTISE_DETAILS_REQUEST, payload: expertiseId
       });
      const { data } = await ClientRepository.get(
        `/expertises/${expertiseId}`     
      );
      dispatch({ type: EXPERTISE_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: EXPERTISE_DETAILS_FAIL, payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message, });
    }
  };

  useEffect(() => {
   
    listExpertises(locale)

  }, [locale]);



  return (
    <ExpertiseContext.Provider
      value={{
       state,
       dispatch,
       detailsExpertise,
      }}
    >
      {children}
    </ExpertiseContext.Provider>
  );
};
