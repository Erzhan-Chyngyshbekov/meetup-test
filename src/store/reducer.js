import { SET_POSTS, REVERSE_POSTS } from "./actionTypes";

const INIT_STATE = {
  posts: [],
};

export const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case REVERSE_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};
