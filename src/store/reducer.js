import { SET_POSTS, REVERSE_POSTS } from "./actionTypes";

const INIT_STATE = {
  posts: [],
  total: 0,
};

export const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload.posts,
        total: action.payload.total,
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
