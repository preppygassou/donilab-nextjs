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
      `https://blog.donilab.org/wp-json/wp/v2/programs?lestypesdehub=${lestypesdehub}` 
    );
    dispatch({ type: PROGRAM_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PROGRAM_LIST_FAIL, payload: error.message });
  }
};

const listProgramsTypeOfDonilab = (ProgrammestypesOfDonilab,currentLang) => async (dispatch) => {
  try {
    dispatch({ type: PROGRAM_LIST_TYPE_BYDONILAB_REQUEST });
    const { data } = await axios.get(
      `https://blog.donilab.org/wp-json/wp/v2/programs?programmestypes=${ProgrammestypesOfDonilab}&lang=${currentLang}`
      
    );
    dispatch({ type: PROGRAM_LIST_TYPE_BYDONILAB_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PROGRAM_LIST_TYPE_BYDONILAB_FAIL, payload: error.message });
  }
};


const listProgramsTypeWithPartner = (ProgrammestypesWithPartnersId,currentLang) => async (dispatch) => {
  try {
    dispatch({ type: PROGRAM_LIST_TYPE_REQUEST });
    const { data } = await axios.get(
      `https://blog.donilab.org/wp-json/wp/v2/programs?programmestypes=${ProgrammestypesWithPartnersId}&lang=${currentLang}`
    );
    dispatch({ type: PROGRAM_LIST_TYPE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PROGRAM_LIST_TYPE_FAIL, payload: error.message });
  }
};

const detailsProgram = (slug) => async (dispatch) => {
  try {
    dispatch({ type: PROGRAM_DETAILS_REQUEST, payload: slug });
    const { data } = await axios.get(
      `https://blog.donilab.org/wp-json/wp/v2/programs?slug=${slug}`
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