
const {
  EXPERTISE_LIST_SUCCESS,
  EXPERTISE_LIST_REQUEST,
  EXPERTISE_LIST_FAIL,
  EXPERTISE_DETAILS_FAIL,
  EXPERTISE_DETAILS_REQUEST,
  EXPERTISE_DETAILS_SUCCESS,
  
} = require("../constants/ExpertiseConstants");

function expertiseListReducer(state = { loading: true,expertises: [] }, action) {
  switch (action.type) {
    case EXPERTISE_LIST_REQUEST:
      return { loading: true, expertises: [] };
    case EXPERTISE_LIST_SUCCESS:
      return { loading: false, expertises: action.payload };
    case EXPERTISE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function expertiseDetailsReducer(state = {loading:true}, action) {
  switch (action.type) {
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

export {
  expertiseListReducer,
  expertiseDetailsReducer,
};