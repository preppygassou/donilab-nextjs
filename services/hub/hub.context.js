import React, {  createContext, useReducer, useEffect, useContext } from "react";
import { CurrentLangContext } from "~/Context/CurrentLangContext";
import ClientRepository from '../../repositories/ClientRepository';
import { useRouter } from "next/router";

const {
  HUB_LIST_SUCCESS,
  HUB_LIST_REQUEST,
  HUB_LIST_FAIL,
  HUB_LIST_TYPE_FAIL,
  HUB_LIST_TYPE_REQUEST,
  HUB_LIST_TYPE_SUCCESS,
  HUB_IMAGE_FAIL,
  HUB_IMAGE_REQUEST,
  HUB_IMAGE_SUCCESS,
  HUB_LIST_FR_REQUEST,
  HUB_LIST_FR_SUCCESS,
  HUB_LIST_FR_FAIL,
  
} = require("../constants/HubConstants");


export const HubContext = createContext();

export const initialState = {
  hubs: [],
  abouts: [],
  hub:null,
  error: false,
  errorHub: false,
  loadingHub: false,
  loading: false,
};

function reducer(state , action) {
  switch (action.type) {
    case HUB_LIST_REQUEST:
      return { loading: true, hubs: [] };
    case HUB_LIST_SUCCESS:
      return { loading: false, hubs: action.payload };
    case HUB_LIST_FAIL:
      return { loading: false, error: action.payload };
      case "HUB_DETAILS_REQUEST":
      return { loadingHub: true };
    case "HUB_DETAILS_SUCCESS":
      return { loadingHub: false, hub: action.payload };
    case "HUB_DETAILS_FAIL":
      return { loadingHub: false, errorHub: action.payload };
    default:
      return state;
  }
}

export const HubContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  

const params = useParams<{ locale: string; }>()
  const { locale} = params;

  const listHubs = async (locale) => {
    try {
      dispatch({ type: HUB_LIST_REQUEST });
      const { data } = await ClientRepository.get(
        "/hubs/?lang="+ locale
      );
      dispatch({ type: HUB_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: HUB_LIST_FAIL, payload: error.message });
    }
  };

  const listLieuDeshubs = async () => {
    try {
      dispatch({ type: HUB_LIST_TYPE_REQUEST });
      const { data } = await ClientRepository.get(
        "/lieudeshubs"
      );
      dispatch({ type: HUB_LIST_TYPE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: HUB_LIST_TYPE_FAIL, payload: error.message });
    }
  };
  


  useEffect(() => {
   
    listHubs(locale)

  }, [locale]);



  return (
    <HubContext.Provider
      value={{
       state,
       dispatch,
       listHubs,
      }}
    >
      {children}
    </HubContext.Provider>
  );
};
