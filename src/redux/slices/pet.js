import {createSlice} from "@reduxjs/toolkit"

const petSlice = createSlice({
    name: 'pet',
    initialState: {
        petList: [],
        selectedPet: null,
    },
    reducers: {
        setPetList: (state, action) => {
            // mutation
            state.petList = action.payload
        }, // { type: 'pet/setPetList' }
        selectPet: (state, action) => {
            state.selectedPet = action.payload
        }
    }
})

export default petSlice;