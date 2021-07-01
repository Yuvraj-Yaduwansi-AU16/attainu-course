import { INCREMENT, DECREMENT } from './types';
export const incrementcnt = () => (dispatch) => {
  dispatch({
    type: INCREMENT,
  });
};
export const decrementcnt = () => (dispatch) => {
  dispatch({
    type: DECREMENT,
  });
};
