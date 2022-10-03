import axios from "axios";
import { SET_POSTS, REVERSE_POSTS } from "./actionTypes";

const URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await axios.get(URL);
    const posts = response.data;

    dispatch({ type: SET_POSTS, payload: posts });
  };
};

export const reversePosts = (posts) => {
  return (dispatch) => {
    const reversedPosts = posts.reverse();

    dispatch({
      type: REVERSE_POSTS,
      payload: reversedPosts,
    });
  };
};
