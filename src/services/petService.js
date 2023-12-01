import * as request from "../utils/httpRequest";

export const getPets = async (accessToken) => {
    try {
        const response = await request.get("/pet/pets", {
            headers: {Authorization: `Bearer ${accessToken}`}
        });
        return {
            response: response.data,
            statusCode: response.status,
        };
    } catch (error) {
        return {
            error: error.response.data,
            statusCode: error.response.status,
        };
    }
};

export const getPet = async (accessToken, petId) => {
    try {
        const response = await request.get(`/pet/${petId}`, {
            headers: {Authorization: `Bearer ${accessToken}`}
        });
        return {
            response: response.data,
            statusCode: response.status,
        };
    } catch (error) {
        return {
            error: error.response.data,
            statusCode: error.response.status,
        };
    }
};

export const updateProfile = async (accessToken, body, petId) => {
    try {
        const response = await request.put(`/pet/${petId}`, body, {
            headers: {Authorization: `Bearer ${accessToken}`}
        });
        return {
            response: response.data,
            statusCode: response.status,
        };
    } catch (error) {
        return {
            error: error.response.data,
            statusCode: error.response.status,
        };
    }
};

export const getCondition = async (accessToken, petId) => {
    try {
        const response = await request.get(`/pet/condition/${petId}`, {
            headers: {Authorization: `Bearer ${accessToken}`}
        });
        return {
            response: response.data,
            statusCode: response.status,
        };
    } catch (error) {
        return {
            error: error.response.data,
            statusCode: error.response.status,
        };
    }
};

export const updateCondition = async (accessToken, body, petId) => {
    try {
        const response = await request.put(`/pet/condition/${petId}`, body, {
            headers: {Authorization: `Bearer ${accessToken}`}
        });
        return {
            response: response.data,
            statusCode: response.status,
        };
    } catch (error) {
        return {
            error: error.response.data,
            statusCode: error.response.status,
        };
    }
};

// Vet
export const getTreatment = async (accessToken, params) => {
    try {
        const response = await request.get("/pet/pet-treatments", {
            params: {...params},
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
        });
        return {
            response: response.data,
            statusCode: response.status,
        };
    } catch (error) {
        return {
            error: error.response.data,
            statusCode: error.response.status,
        };
    }
};

export const acceptTreatment = async (accessToken, treatmentId) => {
    try {
        const response = await request.post("/pet/accept-treatment", {treatmentId}, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
        });
        return {
            response: response.data,
            statusCode: response.status,
        };
    } catch (error) {
        return {
            error: error.response.data,
            statusCode: error.response.status,
        };
    }
};

export const updateVetAdvice = async (accessToken, body, petId) => {
    try {
        const response = await request.put(`/pet/vet-advice/${petId}`, body, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
        });
        return {
            response: response.data,
            statusCode: response.status,
        };
    } catch (error) {
        return {
            error: error.response.data,
            statusCode: error.response.status,
        };
    }
};