import { ADD_TODO, EDIT_TODO, SET_TODO, DELETE_TODO } from '../types';
export const addTodo = (data) => (dispatch) => {
  dispatch({
    type: ADD_TODO,
    payload: data,
  });
};
export const editTodo = (data) => (dispatch) => {
  dispatch({
    type: EDIT_TODO,
    payload: data,
  });
};
export const setTodo = (data) => (dispatch) => {
  dispatch({
    type: SET_TODO,
    payload: data,
  });
};
export const deleteTodo = (data) => (dispatch) => {
  dispatch({
    type: DELETE_TODO,
    payload: data,
  });
};
