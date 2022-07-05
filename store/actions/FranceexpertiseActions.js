import axios from "axios";

const {
  FREXPERTISE_LIST_SUCCESS,
  FREXPERTISE_LIST_REQUEST,
  FREXPERTISE_LIST_FAIL,
  FREXPERTISE_DETAILS_FAIL,
  FREXPERTISE_DETAILS_REQUEST,
  FREXPERTISE_DETAILS_SUCCESS,
  
} = require("../constants/FranceexpertiseConstants");

const listFrexpertises = (currentLang) => async (dispatch) => {
  try {
    dispatch({ type: FREXPERTISE_LIST_REQUEST });
    const { data } = await axios.get(
      `https://blog.donilab.org/wp-json/wp/v2/donilafrexpertises/?lang=${currentLang}`
    );
    dispatch({ type: FREXPERTISE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FREXPERTISE_LIST_FAIL, payload: error.message });
  }
};


const detailsDexpertise = (dexpertiseId) => async (dispatch) => {
  try {
    dispatch({ type: FREXPERTISE_DETAILS_REQUEST, payload: dexpertiseId
     });
    const { data } = await axios.get(
      "https://blog.donilab.org/wp-json/wp/v2/donilafrexpertises/" + dexpertiseId     
    );
    dispatch({ type: FREXPERTISE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FREXPERTISE_DETAILS_FAIL, payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message, });
  }
};



export { listFrexpertises, detailsDexpertise };