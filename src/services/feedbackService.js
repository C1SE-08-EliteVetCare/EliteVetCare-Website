import * as request from "../utils/httpRequest";

export const createFeedback = async ( accessToken,type, clinicId, subject, content, rating) => {
    try {
        const response = await request.post(
            "/feedback/create",
            { type, clinicId, subject, content, rating },
            {
                headers: { Authorization: `Bearer ${accessToken}` },
            }
        );

        return {
            response: response.data,
            statusCode: response.status,
        };
    } catch (error) {
        return {
            error: error.response?.data || 'Unknown error',
            statusCode: error.response?.status || 500,
        };
    }
};

export const getClinic = async () => {
    try {
        const response = await request.get("clinic/clinics");

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


export const getFeedBack = async (query) => {
    try {
        const response = await request.get('/feedback/feedbacks', {
            params: {...query}
        });
        return {
            response: response.data,
            statusCode: response.status,
        };
    } catch (e) {
        return {
            error: e.response.data,
            status: e.response.status,
        };
    }
};

export const getFeedBackWithFiveRate = async (params) => {
    try {
        const response = await request.get('/feedback/feedbacks', {
            params: {...params},
        });
        return {
            response: response.data,
            statusCode: response.status,
        };
    } catch (e) {
        return {
            error: e.response.data,
            status: e.response.status,
        };
    }
};

export const getFeedbackById = async (feedbackId, accessToken) => {
    try {
        const response = await request.get(`/feedback/feedbacks/${feedbackId}`, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });

        return {
            response: response.data,
            statusCode: response.status,
        };
    } catch (error) {
        return {
            error: error.response.data,
            status: error.response.status,
        };
    }
};

