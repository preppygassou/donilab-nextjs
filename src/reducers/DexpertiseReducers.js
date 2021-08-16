
const {
  DEXPERTISE_LIST_SUCCESS,
  DEXPERTISE_LIST_REQUEST,
  DEXPERTISE_LIST_FAIL,
  DEXPERTISE_DETAILS_FAIL,
  DEXPERTISE_DETAILS_REQUEST,
  DEXPERTISE_DETAILS_SUCCESS,
  
} = require("../constants/DexpertiseConstants");

function dexpertiseListReducer(state = { dexpertises: [] }, action) {
  switch (action.type) {
    case DEXPERTISE_LIST_REQUEST:
      return { loading: true, dexpertises: [] };
    case DEXPERTISE_LIST_SUCCESS:
      return { loading: false, dexpertises: action.payload };
    case DEXPERTISE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function dexpertiseDetailsReducer(state = {loading:true}, action) {
  switch (action.type) {
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

export {
  dexpertiseListReducer,
  dexpertiseDetailsReducer,
};