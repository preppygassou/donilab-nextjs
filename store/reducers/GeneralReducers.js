
const {
  GENERAL_LIST_SUCCESS,
  GENERAL_LIST_REQUEST,
  GENERAL_LIST_FAIL,
  
} = require("../constants/GeneralConstants");



function generalListReducer(state = { loading: true,generals: [ 
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
] }, action) {
  switch (action.type) {
    case GENERAL_LIST_REQUEST:
      return { loading: true, generals: [
        {acf:{
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



export {
  generalListReducer,
};