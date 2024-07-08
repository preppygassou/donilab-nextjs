import React, {  createContext, useReducer, useEffect, useContext } from "react";
import { CurrentLangContext } from "~/Context/CurrentLangContext";
import ClientRepository from '../../repositories/ClientRepository';
import { useRouter } from "next/router";

const {
  EVENT_LIST_SUCCESS,
  EVENT_LIST_REQUEST,
  EVENT_LIST_FAIL,
  EVENT_LIST_TYPE_FAIL,
  EVENT_LIST_TYPE_REQUEST,
  EVENT_LIST_TYPE_SUCCESS,
  EVENT_IMAGE_FAIL,
  EVENT_IMAGE_REQUEST,
  EVENT_IMAGE_SUCCESS,
  EVENT_DETAILS_FAIL,
  EVENT_DETAILS_REQUEST,
  EVENT_DETAILS_SUCCESS,
  
} = require("../constants/EventConstants");


export const EventContext = createContext();

export const initialState = {
  events:[],
  lieux: [],
  event:null,
  error: false,
  loading: false,
};

function reducer(state , action) {
  switch (action.type) {
    case EVENT_LIST_REQUEST:
      return { loading: true, events: [] };
    case EVENT_LIST_SUCCESS:
      return { loading: false, events: action.payload };
    case EVENT_LIST_FAIL:
      return { loading: false, error: action.payload };
      case EVENT_LIST_TYPE_REQUEST:
      return { loading: true, lieux: [] };
    case EVENT_LIST_TYPE_SUCCESS:
      return { loading: false, lieux: action.payload };
    case EVENT_LIST_TYPE_FAIL:
      return { loading: false, error: action.payload };
      case EVENT_IMAGE_REQUEST:
      return { loading: true, image :""};
    case EVENT_IMAGE_SUCCESS:
      return { loading: false, image: action.payload };
    case EVENT_IMAGE_FAIL:
      return { loading: false, image: action.payload };
      case EVENT_DETAILS_REQUEST:
      return { loading: true };
    case EVENT_DETAILS_SUCCESS:
      return { loading: false, event: action.payload };
    case EVENT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export const EventContextProvider = ({ children}) => {
  const [state, dispatch] = useReducer(reducer, initialState); 
  const params = useParams<{ locale: string; }>()
  const { locale} = params;

  const listevents =  async (locale) => {
    try {
      dispatch({ type:EVENT_LIST_REQUEST });
      const { data } = await ClientRepository.get(
      
        `/donievent/?lang=${locale}`
      );
      dispatch({ type: EVENT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: EVENT_LIST_FAIL, payload: error.message });
    }
  };
  
  const eventimage = async (featuredMedia) => {
    try {
      dispatch({ type:EVENT_IMAGE_REQUEST });
      const { data } = await ClientRepository.get(
        "/media/"+featuredMedia+"?_embed"
      );
      dispatch({ type: EVENT_IMAGE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: EVENT_IMAGE_FAIL, payload: error.message });
    }
  };
  
/*   const listLieuDeshubs = () => {
    try {
      dispatch({ type: EVENT_LIST_TYPE_REQUEST });
      const { data } = await ClientRepository.get(
        "/donievent?_embed"
      );
      dispatch({ type: EVENT_LIST_TYPE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: EVENT_LIST_TYPE_FAIL, payload: error.message });
    }
  }; */
  
  const detailsEvent = async (EventId) => {
    try {
      dispatch({ type: EVENT_DETAILS_REQUEST, payload: EventId });
      const { data } = await ClientRepository.get(
        "/donievent/" + EventId+"?_embed"
      );
      dispatch({ type: EVENT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: EVENT_DETAILS_FAIL, payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message, });
    }
  };
  

  useEffect(() => {
   
    listevents(locale)

  }, [locale]);



  return (
    <EventContext.Provider
      value={{
       state,
       dispatch,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
