import axios from "axios";

const {
 EVENT_LIST_SUCCESS,
 EVENT_LIST_REQUEST,
 EVENT_LIST_FAIL,
 EVENT_LIST_TYPE_FAIL,
 EVENT_LIST_TYPE_REQUEST,
 EVENT_LIST_TYPE_SUCCESS,
 EVENT_IMAGE_FAIL,
 EVENT_IMAGE_REQUEST,
 EVENT_IMAGE_SUCCESS,
 EVENT_DETAILS_FAIL,
 EVENT_DETAILS_REQUEST,
 EVENT_DETAILS_SUCCESS,
  
} = require("../constants/EventConstants");

const listevents = (currentLang) => async (dispatch) => {
  try {
    dispatch({ type:EVENT_LIST_REQUEST });
    const { data } = await axios.get(
    
      `https://blog.donilab.org/wp-json/wp/v2/donievent/?lang=${currentLang}`
    );
    dispatch({ type: EVENT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: EVENT_LIST_FAIL, payload: error.message });
  }
};

const eventimage = (featuredMedia) => async (dispatch) => {
  try {
    dispatch({ type:EVENT_IMAGE_REQUEST });
    const { data } = await axios.get(
      "https://blog.donilab.org/wp-json/wp/v2/media/"+featuredMedia+"?_embed"
    );
    dispatch({ type: EVENT_IMAGE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: EVENT_IMAGE_FAIL, payload: error.message });
  }
};

const listLieuDeshubs = () => async (dispatch) => {
  try {
    dispatch({ type: EVENT_LIST_TYPE_REQUEST });
    const { data } = await axios.get(
      "https://blog.donilab.org/wp-json/wp/v2/donievent?_embed"
    );
    dispatch({ type: EVENT_LIST_TYPE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: EVENT_LIST_TYPE_FAIL, payload: error.message });
  }
};

const detailsEvent = (EventId) => async (dispatch) => {
  try {
    dispatch({ type: EVENT_DETAILS_REQUEST, payload: EventId });
    const { data } = await axios.get(
      "https://blog.donilab.org/wp-json/wp/v2/donievent/" + EventId+"?_embed"
    );
    dispatch({ type: EVENT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: EVENT_DETAILS_FAIL, payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message, });
  }
};



export { listevents, detailsEvent,listLieuDeshubs,eventimage};