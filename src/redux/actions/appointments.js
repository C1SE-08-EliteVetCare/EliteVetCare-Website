export const setAppointments = (appointments) => ({
    type: 'SET_APPOINTMENTS',
    payload: appointments,
});

export const setLoading = (loading) => ({
    type: 'SET_LOADING',
    payload: loading,
});

export const setActiveTab = (tab) => ({
    type: 'SET_ACTIVE_TAB',
    payload: tab
});

export const setPagination = (pagination) => ({
    type: 'SET_PAGINATION',
    payload: pagination,
});

export const setFilters = (filters) => ({
    type: 'SET_FILTERS',
    payload: filters,
});