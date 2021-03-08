import axios from "axios";

const {
  PARTENAIRE_LIST_SUCCESS,
  PARTENAIRE_LIST_REQUEST,
  PARTENAIRE_LIST_FAIL,
  
  
} = require("../constants/PartenaireConstants");

const listPartenaires = () => async (dispatch) => {
  try {
    dispatch({ type: PARTENAIRE_LIST_REQUEST });
    const { data } = await axios.get(
      "https://blog.donilab.net/wp-json/wp/v2/partenaire"
    );
    dispatch({ type: PARTENAIRE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PARTENAIRE_LIST_FAIL, payload: error.message });
  }
};





export { listPartenaires };