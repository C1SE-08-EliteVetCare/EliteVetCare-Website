import * as request from "../utils/httpRequest";

export const makeAppointment = async (accessToken, data) => {
    try {
        const response = await request.post("/appointment/create", data, {
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

export const getClinic = async () => {
    try {
        const response = await request.get("/clinic/clinics");
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