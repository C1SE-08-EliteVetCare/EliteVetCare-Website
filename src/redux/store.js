// // store.js
import {configureStore} from "@reduxjs/toolkit"
import petSlice from "./slices/pet";
import appointmentSlice from "./slices/appointments";
import petTreatmentSlice from "./slices/petTreatments";
import conversationSlice from "./slices/conversation";
import messageSlice from "./slices/message";
import imageSlice from "./slices/image";

const store = configureStore({
    reducer: {
        pet: petSlice.reducer,
        appointment: appointmentSlice.reducer,
        petTreatment: petTreatmentSlice.reducer,
        conversation: conversationSlice.reducer,
        message: messageSlice.reducer,
        image: imageSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    devTools: true
})

export default store
