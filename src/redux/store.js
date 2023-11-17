// store.js
import {createStore, combineReducers} from 'redux';
import petReducer from './reducers/pets';
import appointmentReducer from "./reducers/appointments";
import petTreatmentReducer from "./reducers/petTreatments";

const rootReducer = combineReducers({
    pet: petReducer,
    appointment: appointmentReducer,
    petTreatment: petTreatmentReducer
});

const store = createStore(rootReducer);

export default store;
