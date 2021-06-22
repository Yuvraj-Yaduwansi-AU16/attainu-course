import axios from 'axios';
import React, { useReducer } from 'react';
import Postcontext from './PostContext';
import PostReducer from './PostReducer';
import { SINGLE_POST, GET_POSTS, ERROR } from '../types';

const PostState = (props) => {
  const initialState = {
    posts: null,
    singlePost: null,
    error: null,
  };
  const [state, dispatch] = useReducer(PostReducer, initialState);
  // Get Posts
  const getPosts = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      dispatch({
        type: GET_POSTS,
        payload: res.data.slice(0, 10),
      });
    } catch (err) {
      dispatch({
        type: ERROR,
        payload: err.response.msg,
      });
    }
  };

  const clickedPost = async (id) => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      dispatch({
        type: SINGLE_POST,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR,
        payload: err.response.msg,
      });
    }
  };

  return (
    <Postcontext.Provider
      value={{
        posts: state.posts,
        error: state.error,
        singlePost: state.singlePost,
        getPosts,
        clickedPost,
      }}
    >
      {props.children}
    </Postcontext.Provider>
  );
};
export default PostState;
