
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
  
} = require("../constants/HubConstants");



function hubListReducer(state = { loading: true,hubs: [] }, action) {
  switch (action.type) {
    case HUB_LIST_REQUEST:
      return { loading: true, hubs: [] };
    case HUB_LIST_SUCCESS:
      return { loading: false, hubs: action.payload };
    case HUB_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
function hubListTypeReducer(state = { lieux: [] }, action) {
  switch (action.type) {
    case HUB_LIST_TYPE_REQUEST:
      return { loading: true, lieux: [] };
    case HUB_LIST_TYPE_SUCCESS:
      return { loading: false, lieux: action.payload };
    case HUB_LIST_TYPE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function hubDetailsReducer(state = {loading:true}, action) {
  switch (action.type) {
    case HUB_DETAILS_REQUEST:
      return { loading: true };
    case HUB_DETAILS_SUCCESS:
      return { loading: false, hub: action.payload };
    case HUB_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function hubImageReducer(state = { IsLoading:true}, action) {
  switch (action.type) {
    case HUB_IMAGE_REQUEST:
      return { loading: true, image :""};
    case HUB_IMAGE_SUCCESS:
      return { loading: false, image: action.payload };
    case HUB_IMAGE_FAIL:
      return { loading: false, image: action.payload };
    default:
      return state;
  }
}



export {
  hubListReducer,
  hubListTypeReducer,
  hubDetailsReducer,
  hubImageReducer,
};