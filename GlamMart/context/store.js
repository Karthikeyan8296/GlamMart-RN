import {createStore} from 'redux';
import myReducer from './reducers';

const store = createStore(myReducer);

export default store;

//after doing the store, we need to wrap it with our main app.js file
