const initialState = {
    petList: [],
    selectedPet: null,
};

const petReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PET_LIST':
            return {
                ...state,
                petList: action.payload,
            };
        case 'SELECT_PET':
            return {
                ...state,
                selectedPet: action.payload,
            };
        default:
            return state;
    }
};

export default petReducer;
