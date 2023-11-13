const initialState = {
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
        search: '',
    },
}

const appointmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_APPOINTMENTS':
            return {...state, appointments: action.payload};

        case 'SET_LOADING':
            return {...state, loading: action.payload};

        case 'SET_ACTIVE_TAB':
            return {...state, activeTab: action.payload};

        case 'SET_PAGINATION':
            return {...state, pagination: action.payload};

        case 'SET_FILTERS':
            return {...state, filters: action.payload};

        default:
            return state;
    }
}

export default appointmentReducer