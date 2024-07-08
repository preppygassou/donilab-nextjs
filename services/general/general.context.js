import React, {  createContext, useReducer, useEffect, useContext } from "react";
import { CurrentLangContext } from "~/Context/CurrentLangContext";
import ClientRepository from '../../repositories/ClientRepository';
import { useRouter } from "next/router";
const {
  GENERAL_LIST_SUCCESS,
  GENERAL_LIST_REQUEST,
  GENERAL_LIST_FAIL,
 
   
 } = require("../constants/GeneralConstants");


export const GeneralContext = createContext();

export const initialState = {
  generals: [ 
    {
      title:{
        rendered:"",
      },
      acf:{
      doni_about_footer:"",
      infos_contact:[],
      page_contact:[
        {
          titre_pagecontact:"",
          link_pagecontact:"",
          description_pagecontact:"",
          link_title:"",
        },
        {
          titre_pagecontact:"",
          link_pagecontact:"",
          description_pagecontact:"",
          link_title:"",
        },
        {
          titre_pagecontact:"",
          link_pagecontact:"",
          description_pagecontact:"",
          link_title:"",
        },
        {
          titre_pagecontact:"",
          link_pagecontact:"",
          description_pagecontact:"",
          link_title:"",
        },
      ],
      menu:[]
    }}
  ],
  error: false,
  loading: false,
};

function reducer(state , action) {
  switch (action.type) {
    case GENERAL_LIST_REQUEST:
      return { loading: true, 
        generals: [
        {
        acf:{
          doni_about_footer:"",
          infos_contact:[],
          page_contact:[
      {
        titre_pagecontact:"",
        link_pagecontact:"",
        description_pagecontact:"",
        link_title:"",
      },
      {
        titre_pagecontact:"",
        link_pagecontact:"",
        description_pagecontact:"",
        link_title:"",
      },
      {
        titre_pagecontact:"",
        link_pagecontact:"",
        description_pagecontact:"",
        link_title:"",
      },
      {
        titre_pagecontact:"",
        link_pagecontact:"",
        description_pagecontact:"",
        link_title:"",
      },
                       ],
          menu:[]
         }}
      ] };
    case GENERAL_LIST_SUCCESS:
      return { loading: false, generals: action.payload };
    case GENERAL_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export const GeneralContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  

const params = useParams<{ locale: string; }>()
  const { locale} = params;

  const listgenerals = async (locale) => {
    try {
      dispatch({ type:GENERAL_LIST_REQUEST });
      const { data } = await ClientRepository.get(
      
        `/generale/?lang=${locale}`
      );
      dispatch({ type: GENERAL_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GENERAL_LIST_FAIL, payload: error.message });
    }
  };
  


  useEffect(() => {
   
    listgenerals(locale)

  }, [locale]);



  return (
    <GeneralContext.Provider
      value={{
       state,
       dispatch,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
