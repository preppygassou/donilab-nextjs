import axios from "axios";

const {
 GENERAL_LIST_SUCCESS,
 GENERAL_LIST_REQUEST,
 GENERAL_LIST_FAIL,

  
} = require("../constants/GeneralConstants");

const listgenerals = (currentLang) => async (dispatch) => {
  try {
    dispatch({ type:GENERAL_LIST_REQUEST });
    const { data } = await axios.get(
    
      `https://blog.donilab.org/wp-json/wp/v2/generale/?lang=${currentLang}`
    );
    dispatch({ type: GENERAL_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GENERAL_LIST_FAIL, payload: error.message });
  }
};




export { listgenerals};