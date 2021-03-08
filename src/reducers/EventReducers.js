
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



function eventListReducer(state = { events:[] }, action) {
  switch (action.type) {
    case EVENT_LIST_REQUEST:
      return { loading: true, events: [] };
    case EVENT_LIST_SUCCESS:
      return { loading: false, events: action.payload };
    case EVENT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
function eventListTypeReducer(state = { lieux: [] }, action) {
  switch (action.type) {
    case EVENT_LIST_TYPE_REQUEST:
      return { loading: true, lieux: [] };
    case EVENT_LIST_TYPE_SUCCESS:
      return { loading: false, lieux: action.payload };
    case EVENT_LIST_TYPE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function eventImageReducer(state = { IsLoading:true}, action) {
  switch (action.type) {
    case EVENT_IMAGE_REQUEST:
      return { loading: true, image :""};
    case EVENT_IMAGE_SUCCESS:
      return { loading: false, image: action.payload };
    case EVENT_IMAGE_FAIL:
      return { loading: false, image: action.payload };
    default:
      return state;
  }
}

function eventDetailsReducer(state = {loading:true}, action) {
  switch (action.type) {
    case EVENT_DETAILS_REQUEST:
      return { loading: true };
    case EVENT_DETAILS_SUCCESS:
      return { loading: false, event: action.payload };
    case EVENT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}




export {
  eventListReducer,
  eventListTypeReducer,
  eventDetailsReducer,
  eventImageReducer,
};