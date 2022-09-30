import axios from "axios";
import * as React from "react";

const INIT_STATE = {
  posts: [],
  total: 0,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return {
        ...state,
        posts: action.payload.data,
        total: action.payload.total,
      };
    case "REVERSE_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

export const storeContext = React.createContext();
const URL = "https://jsonplaceholder.typicode.com/posts";

export default function StoreContextProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, INIT_STATE);

  const fetchPosts = async (page) => {
    const response = await axios.get(
      `${URL}?_start=${page * 10}&_end=${10 * (page + 1)}`
    );
    const posts = response.data;
    const total = response.headers["x-total-count"];

    dispatch({
      type: "SET_POSTS",
      payload: { data: posts, total },
    });
  };

  const reversePosts = () => {
    const reversedPosts = state.posts.reverse();

    dispatch({
      type: "REVERSE_POSTS",
      payload: reversedPosts,
    });
  };

  return (
    <storeContext.Provider
      value={{
        posts: state.posts,
        total: state.total,
        fetchPosts,
        reversePosts,
      }}
    >
      {props.children}
    </storeContext.Provider>
  );
}
