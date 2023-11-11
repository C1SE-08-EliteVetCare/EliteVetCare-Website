export const setPetList = (petList) => ({
    type: 'SET_PET_LIST',
    payload: petList,
});

export const selectPet = (pet) => ({
    type: 'SELECT_PET',
    payload: pet,
});