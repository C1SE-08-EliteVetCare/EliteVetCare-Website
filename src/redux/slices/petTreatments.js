import {createSlice} from "@reduxjs/toolkit"

const petTreatmentSlice = createSlice({
    name: 'petTreatment',
    initialState: {
        petTreatments: [],
        loading: true,
        activeTab: 2,
        pagination: {
            page: 1,
            totalPages: 1
        },
        filters: {
            limit: 6,
            page: 1,
            status: 2,
        },
    },
    reducers: {
        setPetTreatments: (state, action) => {
            state.petTreatments = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setActiveTab: (state, action) => {
            state.activeTab = action.payload
        },
        setPagination: (state, action) => {
            state.pagination = action.payload
        },
        setFilters: (state, action) => {
            state.filters = action.payload
        },
    }
})

export default petTreatmentSlice;