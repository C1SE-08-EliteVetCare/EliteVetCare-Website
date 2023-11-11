import * as request from "../utils/httpRequest";

export const makeAppointment = async (accessToken, data) => {
    try {
        const response = await request.post("/appointment/create", {
            body: { data },
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

export const getAppointment = async (accessToken, params) => {
    try {
        const response = await request.get("/appointment/appointments", {
            params: {
                ...params
            },
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