import axios from "axios";

const {
  EXPERTISE_LIST_SUCCESS,
  EXPERTISE_LIST_REQUEST,
  EXPERTISE_LIST_FAIL,
  EXPERTISE_DETAILS_FAIL,
  EXPERTISE_DETAILS_REQUEST,
  EXPERTISE_DETAILS_SUCCESS,
  
} = require("../constants/ExpertiseConstants");

const listExpertises = (currentLang) => async (dispatch) => {
  try {
    dispatch({ type: EXPERTISE_LIST_REQUEST });
    const { data } = await axios.get(
      `https://blog.donilab.org/wp-json/wp/v2/expertises/?lang=${currentLang}`
    );
    dispatch({ type: EXPERTISE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: EXPERTISE_LIST_FAIL, payload: error.message });
  }
};


const detailsExpertise = (expertiseId) => async (dispatch) => {
  try {
    dispatch({ type: EXPERTISE_DETAILS_REQUEST, payload: expertiseId
     });
    const { data } = await axios.get(
      "https://blog.donilab.org/wp-json/wp/v2/expertises/" + expertiseId     
    );
    dispatch({ type: EXPERTISE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: EXPERTISE_DETAILS_FAIL, payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message, });
  }
};



export { listExpertises, detailsExpertise };