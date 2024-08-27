import React, {  createContext, useReducer, useEffect, useContext } from "react";
import { CurrentLangContext } from "~/Context/CurrentLangContext";
import ClientRepository from '../../repositories/ClientRepository';
import { useRouter } from "next/router";

const {
  POST_LIST_SUCCESS,
  POST_LIST_REQUEST,
  POST_LIST_FAIL,
  
} = require("../constants/PostConstants");


export const PostContext = createContext();

export const initialState = {
  posts: [],
  error: false,
  loading: false,
};

function reducer(state , action) {
  switch (action.type) {
    case POST_LIST_REQUEST:
      return { ...state,
        ...{ loading: true }, 
      };
    case POST_LIST_SUCCESS:
      return {loading: false, posts: action.payload};
    case POST_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export const PostContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
 

const params = useParams<{ locale: string; }>()
  const { locale} = params;

  const getPosts = async (locale) => {
    try {
      dispatch({ type: POST_LIST_REQUEST });
      const { data } = await ClientRepository.get(
        `/posts/?lang=${locale}`
      );
      dispatch({ type: POST_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: POST_LIST_FAIL, payload: error.message });
    }
  };


  useEffect(() => {
   
    getPosts(locale)
  }, [locale]);



  return (
    <PostContext.Provider
      value={{
       state,
       dispatch,
       getPosts
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
