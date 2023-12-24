import {createSlice} from "@reduxjs/toolkit"

const imageSlice = createSlice({
    name: 'image',
    initialState: {
        images: [],
        selectedImage: "",
        isShowModal: false
    },
    reducers: {
        setImages: (state, action) => {
            // mutation
            state.images = action.payload
        }, // { type: 'image/setImages' }
        setShowImage: (state, action) => {
            const {selectedImage, isShowModal} = action.payload
            state.selectedImage = selectedImage
            state.isShowModal = isShowModal
        }
    }
})

export const {setImages, setShowImage} = imageSlice.actions

export default imageSlice;