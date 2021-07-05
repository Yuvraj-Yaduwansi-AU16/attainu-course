import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducer';
import thunk from 'redux-thunk';
const middleware = [thunk];
const initialstate = {
  todo: [],
  current: '',
};
export default createStore(
  reducer,
  initialstate,
  composeWithDevTools(applyMiddleware(...middleware))
);
