// // store.js
import {configureStore} from "@reduxjs/toolkit"
import petSlice from "./slices/pet";
import appointmentSlice from "./slices/appointments";
import petTreatmentSlice from "./slices/petTreatments";

const store = configureStore({
    reducer: {
        pet: petSlice.reducer,
        appointment: appointmentSlice.reducer,
        petTreatment: petTreatmentSlice.reducer
    }
})

export default store
