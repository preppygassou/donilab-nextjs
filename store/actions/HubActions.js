import axios from "axios";

const {
  HUB_LIST_SUCCESS,
  HUB_LIST_REQUEST,
  HUB_LIST_FAIL,
  HUB_LIST_TYPE_FAIL,
  HUB_LIST_TYPE_REQUEST,
  HUB_LIST_TYPE_SUCCESS,
  HUB_IMAGE_FAIL,
  HUB_IMAGE_REQUEST,
  HUB_IMAGE_SUCCESS,
  HUB_DETAILS_FAIL,
  HUB_DETAILS_REQUEST,
  HUB_DETAILS_SUCCESS,
  HUB_LIST_FR_REQUEST,
  HUB_LIST_FR_SUCCESS,
  HUB_LIST_FR_FAIL,
  
} = require("../constants/HubConstants");

const listHubs = (currentLang) => async (dispatch) => {
  try {
    dispatch({ type: HUB_LIST_REQUEST });
    const { data } = await axios.get(
      "https://blog.donilab.org/wp-json/wp/v2/hubs/?lang="+ currentLang
    );
    dispatch({ type: HUB_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: HUB_LIST_FAIL, payload: error.message });
  }
};

const listHubsFr = (currentLang) => async (dispatch) => {
  try {
    dispatch({ type: HUB_LIST_FR_REQUEST });
    const { data } = await axios.get(
      "https://blog.donilab.org/wp-json/wp/v2/hubsdefrance/?lang="+ currentLang
    );
    dispatch({ type: HUB_LIST_FR_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: HUB_LIST_FR_FAIL, payload: error.message });
  }
};




const listLieuDeshubs = () => async (dispatch) => {
  try {
    dispatch({ type: HUB_LIST_TYPE_REQUEST });
    const { data } = await axios.get(
      "https://blog.donilab.org/wp-json/wp/v2/lieudeshubs"
    );
    dispatch({ type: HUB_LIST_TYPE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: HUB_LIST_TYPE_FAIL, payload: error.message });
  }
};

const detailsHub = (HubId) => async (dispatch) => {
  dispatch({ type: HUB_DETAILS_REQUEST, payload: HubId });
  try {
    const { data } = await axios.get(
      
      "https://blog.donilab.org/wp-json/wp/v2/hubs?slug=" + HubId
    );
    dispatch({ type: HUB_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: HUB_DETAILS_FAIL, 
      payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message, });
  }
};

const hubimage = (featuredMedia) => async (dispatch) => {
  try {
    dispatch({ type:HUB_IMAGE_REQUEST });
    const { data } = await axios.get(
      "https://blog.donilab.org/wp-json/wp/v2/media/"+featuredMedia
    );
    dispatch({ type: HUB_IMAGE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: HUB_IMAGE_FAIL, payload: error.message });
  }
};


export { listHubs, detailsHub,listLieuDeshubs,hubimage,listHubsFr };