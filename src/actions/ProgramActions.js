import axios from "axios";

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

const listPrograms = (lestypesdehub) => async (dispatch) => {
  try {
    dispatch({ type: PROGRAM_LIST_REQUEST });
    const { data } = await axios.get(
      "https://blog.donilab.org/wp-json/wp/v2/programs?lestypesdehub="+lestypesdehub
    );
    dispatch({ type: PROGRAM_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PROGRAM_LIST_FAIL, payload: error.message });
  }
};

const listProgramsTypeOfDonilab = (ProgrammestypesOfDonilab) => async (dispatch) => {
  try {
    dispatch({ type: PROGRAM_LIST_TYPE_BYDONILAB_REQUEST });
    const { data } = await axios.get(
      "https://blog.donilab.org/wp-json/wp/v2/programs?programmestypes=" + ProgrammestypesOfDonilab
      
    );
    dispatch({ type: PROGRAM_LIST_TYPE_BYDONILAB_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PROGRAM_LIST_TYPE_BYDONILAB_FAIL, payload: error.message });
  }
};


const listProgramsTypeWithPartner = (ProgrammestypesWithPartnersId) => async (dispatch) => {
  try {
    dispatch({ type: PROGRAM_LIST_TYPE_REQUEST });
    const { data } = await axios.get(
      "https://blog.donilab.org/wp-json/wp/v2/programs?programmestypes=" + ProgrammestypesWithPartnersId
    );
    dispatch({ type: PROGRAM_LIST_TYPE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PROGRAM_LIST_TYPE_FAIL, payload: error.message });
  }
};

const detailsProgram = (ProgramId) => async (dispatch) => {
  try {
    dispatch({ type: PROGRAM_DETAILS_REQUEST, payload: ProgramId });
    const { data } = await axios.get(
      "https://blog.donilab.org/wp-json/wp/v2/programs/" + ProgramId
    );
    dispatch({ type: PROGRAM_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PROGRAM_DETAILS_FAIL, payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message, });
  }
};



export { listPrograms, detailsProgram,listProgramsTypeWithPartner,listProgramsTypeOfDonilab };