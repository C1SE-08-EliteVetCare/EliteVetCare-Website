const initialState = {
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
}

const petTreatmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PET_TREATMENTS':
            return {...state, petTreatments: action.payload};

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

export default petTreatmentReducer