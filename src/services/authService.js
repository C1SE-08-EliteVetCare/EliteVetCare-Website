import * as request from "../utils/httpRequest";

export const login = async (email, password) => {
    try {
        const response = await request.post("/auth/login", { email, password });
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

export const loginGoogleSuccess = async (tokenGoogle) => {
    try {
        const response = await request.post("/auth/google/login-success", {
            tokenGoogle,
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

export const verify = async (email, otp) => {
    try {
        const response = await request.post("/auth/verify-email", {
            email,
            otp,
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


