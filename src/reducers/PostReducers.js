
const {
  POST_LIST_SUCCESS,
  POST_LIST_REQUEST,
  POST_LIST_FAIL,
  POST_CATEGORIES_FAIL,
  POST_CATEGORIES_REQUEST,
  POST_CATEGORIES_SUCCESS,
  POST_IMAGE_FAIL,
  POST_IMAGE_REQUEST,
  POST_IMAGE_SUCCESS,
  
} = require("../constants/PostConstants");



function postListReducer(state = { posts: [] }, action) {
  switch (action.type) {
    case POST_LIST_REQUEST:
      return { loading: true, posts: [] };
    case POST_LIST_SUCCESS:
      return { loading: false, posts: action.payload };
    case POST_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
function postListCategoriesReducer(state = { categories: [] }, action) {
  switch (action.type) {
    case POST_CATEGORIES_REQUEST:
      return { loading: true, categories: [] };
    case POST_CATEGORIES_SUCCESS:
      return { loading: false, categories: action.payload };
    case POST_CATEGORIES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
function postImage(state = {images:[]}, action) {
  switch (action.type) {
    case POST_IMAGE_REQUEST:
      return { loading: true, images: [] };
    case POST_IMAGE_SUCCESS:
      return { loading: false, images: action.payload };
    case POST_IMAGE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export {
  postListReducer,
  postListCategoriesReducer,
  postImage
 
};