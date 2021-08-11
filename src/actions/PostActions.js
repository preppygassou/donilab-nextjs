import axios from "axios";

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

const listPosts = (currentLang) => async (dispatch) => {
  try {
    dispatch({ type: POST_LIST_REQUEST });
    const { data } = await axios.get(
      "https://blog.donilab.org/wp-json/wp/v2/posts/?lang="+ currentLang
    );
    dispatch({ type: POST_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: POST_LIST_FAIL, payload: error.message });
  }
};


const listCategories = (postId) => async (dispatch) => {
  try {
    dispatch({ type: POST_CATEGORIES_REQUEST });
    const { data } = await axios.get(
      "https://www.blog.donilab.net/wp-json/wp/v2/categories?post="+postId+"&cat_relation=AND"
      /* "https://www.blog.donilab.net/wp-json/wp/v2/posts/?categories=" + CategoriesId */
      /* "https://blog.donilab.org/wp-json/wp/v2/categories" */
    );
    dispatch({ type: POST_CATEGORIES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: POST_CATEGORIES_FAIL, payload: error.message });
  }
};

const PostImage = (PostId) => async (dispatch) => {
  try {
    dispatch({ type: POST_IMAGE_REQUEST, payload: PostId });
    const { data } = await axios.get(
      "https://blog.donilab.org/wp-json/wp/v2/media/" + PostId
    );
    dispatch({ type: POST_IMAGE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: POST_IMAGE_FAIL, payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message, });
  }
};



export { listPosts, PostImage,listCategories };