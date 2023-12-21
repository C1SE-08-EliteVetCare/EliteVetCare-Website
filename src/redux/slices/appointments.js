import {createSlice} from "@reduxjs/toolkit"

const appointmentSlice = createSlice({
    name: 'appointment',
    initialState: {
        appointments: [],
        loading: true,
        activeTab: 0,
        pagination: {
            page: 1,
            totalPages: 1
        },
        filters: {
            limit: 3,
            page: 1,
            status: null,
            search: null,
        },
    },
    reducers: {
        setAppointments: (state, action) => {
            state.appointments = action.payload
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

export default appointmentSlice;