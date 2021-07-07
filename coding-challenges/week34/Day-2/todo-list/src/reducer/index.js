import { ADD_TODO, EDIT_TODO, SET_TODO, DELETE_TODO } from '../types';
const initialstate = {
  todo: [],
  current: '',
};
export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };

    case EDIT_TODO:
      return {
        ...state,
        current: action.payload,
      };
    case SET_TODO:
      return {
        ...state,
        todo: action.payload,
      };
    case DELETE_TODO:
      return {
        ...state,
        todo: state.todo.filter((item, idx) => idx !== action.payload),
      };
    default:
      return state;
  }
};
export default reducer;
