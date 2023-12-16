// // store.js
import {configureStore} from "@reduxjs/toolkit"
import petSlice from "./slices/pet";
import appointmentSlice from "./slices/appointments";
import petTreatmentSlice from "./slices/petTreatments";
import conversationSlice from "./slices/conversation";

const store = configureStore({
    reducer: {
        pet: petSlice.reducer,
        appointment: appointmentSlice.reducer,
        petTreatment: petTreatmentSlice.reducer,
        conversation: conversationSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})

export default store
