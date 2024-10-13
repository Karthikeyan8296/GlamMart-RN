import {combineReducers} from 'redux';
import feedReducer from './feeds.Reducer';

const myReducer = combineReducers({
  feeds: feedReducer,
});

export default myReducer;
