
const {
  PARTENAIRE_LIST_SUCCESS,
  PARTENAIRE_LIST_REQUEST,
  PARTENAIRE_LIST_FAIL,
  
} = require("../constants/PartenaireConstants");



function partenaireListReducer(state = { loading: true,partenaires: [] }, action) {
  switch (action.type) {
    case PARTENAIRE_LIST_REQUEST:
      return { loading: true, partenaires: [] };
    case PARTENAIRE_LIST_SUCCESS:
      return { loading: false, partenaires: action.payload };
    case PARTENAIRE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}



export {
  partenaireListReducer,
};