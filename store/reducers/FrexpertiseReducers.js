
const {
  FREXPERTISE_LIST_SUCCESS,
  FREXPERTISE_LIST_REQUEST,
  FREXPERTISE_LIST_FAIL,
  FREXPERTISE_DETAILS_FAIL,
  FREXPERTISE_DETAILS_REQUEST,
  FREXPERTISE_DETAILS_SUCCESS,
  
} = require("../constants/FranceexpertiseConstants");

function frexpertiseListReducer(state = {loading: true, frexpertises: [] }, action) {
  switch (action.type) {
    case FREXPERTISE_LIST_REQUEST:
      return { loading: true, frexpertises: [] };
    case FREXPERTISE_LIST_SUCCESS:
      return { loading: false, frexpertises: action.payload };
    case FREXPERTISE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function frexpertiseDetailsReducer(state = {loading:true}, action) {
  switch (action.type) {
    case FREXPERTISE_DETAILS_REQUEST:
      return { loading: true };
    case FREXPERTISE_DETAILS_SUCCESS:
      return { loading: false, frexpertise: action.payload };
    case FREXPERTISE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export {
  frexpertiseListReducer,
  frexpertiseDetailsReducer,
};