import {combineReducers} from 'redux';
import feedReducer from './feeds.Reducer';
import cartReducer from './cartReducer';

const myReducer = combineReducers({
  feeds: feedReducer,
  cartItem: cartReducer,
});

export default myReducer;
