// store.js
import { createStore, combineReducers } from 'redux';
import petReducer from './reducers/pets';

const rootReducer = combineReducers({
    pets: petReducer,
});

const store = createStore(rootReducer);

export default store;
