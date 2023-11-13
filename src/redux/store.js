// store.js
import {createStore, combineReducers} from 'redux';
import petReducer from './reducers/pets';
import appointmentReducer from "./reducers/appointments";

const rootReducer = combineReducers({
    pets: petReducer,
    appointments: appointmentReducer
});

const store = createStore(rootReducer);

export default store;
