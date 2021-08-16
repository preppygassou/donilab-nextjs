import axios from "axios";

const {
  DEXPERTISE_LIST_SUCCESS,
  DEXPERTISE_LIST_REQUEST,
  DEXPERTISE_LIST_FAIL,
  DEXPERTISE_DETAILS_FAIL,
  DEXPERTISE_DETAILS_REQUEST,
  DEXPERTISE_DETAILS_SUCCESS,
  
} = require("../constants/DexpertiseConstants");

const listDexpertises = (currentLang) => async (dispatch) => {
  try {
    dispatch({ type: DEXPERTISE_LIST_REQUEST });
    const { data } = await axios.get(
      `https://blog.donilab.org/wp-json/wp/v2/dexpertise/?lang=${currentLang}`
    );
    dispatch({ type: DEXPERTISE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DEXPERTISE_LIST_FAIL, payload: error.message });
  }
};


const detailsDexpertise = (dexpertiseId) => async (dispatch) => {
  try {
    dispatch({ type: DEXPERTISE_DETAILS_REQUEST, payload: dexpertiseId
     });
    const { data } = await axios.get(
      "https://blog.donilab.org/wp-json/wp/v2/dexpertise/" + dexpertiseId     
    );
    dispatch({ type: DEXPERTISE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DEXPERTISE_DETAILS_FAIL, payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message, });
  }
};



export { listDexpertises, detailsDexpertise };