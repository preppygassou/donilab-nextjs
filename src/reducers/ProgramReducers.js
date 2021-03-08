
const {
  PROGRAM_LIST_SUCCESS,
  PROGRAM_LIST_REQUEST,
  PROGRAM_LIST_FAIL,
  PROGRAM_LIST_TYPE_FAIL,
  PROGRAM_LIST_TYPE_REQUEST,
  PROGRAM_LIST_TYPE_SUCCESS,
  PROGRAM_LIST_TYPE_BYDONILAB_FAIL,
  PROGRAM_LIST_TYPE_BYDONILAB_REQUEST,
  PROGRAM_LIST_TYPE_BYDONILAB_SUCCESS,
  PROGRAM_DETAILS_FAIL,
  PROGRAM_DETAILS_REQUEST,
  PROGRAM_DETAILS_SUCCESS,
  
} = require("../constants/ProgramConstants");



function programListReducer(state = { programs: [] }, action) {
  switch (action.type) {
    case PROGRAM_LIST_REQUEST:
      return { loading: true, programs: [] };
    case PROGRAM_LIST_SUCCESS:
      return { loading: false, programs: action.payload };
    case PROGRAM_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
function programListTypeOfDonilabReducer(state = { programsByDonilab: [] }, action) {
  switch (action.type) {
    case PROGRAM_LIST_TYPE_BYDONILAB_REQUEST:
      return { loadingprogramsbydonilab: true, programsByDonilab: [] };
    case PROGRAM_LIST_TYPE_BYDONILAB_SUCCESS:
      return { loadingprogramsbydonilab: false, programsByDonilab: action.payload };
    case PROGRAM_LIST_TYPE_BYDONILAB_FAIL:
      return { loadingprogramsbydonilab: false, errorloadingprogrambydonilab: action.payload };
    default:
      return state;
  }
}
function programListTypeWithPartnersReducer(state = { programsWithPartners: [] }, action) {
  switch (action.type) {
    case PROGRAM_LIST_TYPE_REQUEST:
      return { loading: true, programsWithPartners: [] };
    case PROGRAM_LIST_TYPE_SUCCESS:
      return { loading: false, programsWithPartners: action.payload };
    case PROGRAM_LIST_TYPE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function programDetailsReducer(state = {loading:true}, action) {
  switch (action.type) {
    case PROGRAM_DETAILS_REQUEST:
      return { loading: true };
    case PROGRAM_DETAILS_SUCCESS:
      return { loading: false, program: action.payload };
    case PROGRAM_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}



export {
  programListReducer,
  programDetailsReducer,
  programListTypeOfDonilabReducer,
  programListTypeWithPartnersReducer,
};