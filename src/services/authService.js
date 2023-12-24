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

const FORGOT_PASS_ENDPOINT = "/api/auth/forgot-password"

export const forgotPassword = async (email) => {
    try {
        return await request.post(FORGOT_PASS_ENDPOINT,
            {
                email: email
            },
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                withCredentials: true
            }
        );
    } catch (error) {
        return error
    }
};

const RESET_PASS_ENDPOINT = "/api/auth/reset-password"

export const resetPass = async (password, otp, email) => {
    try {
        return await request.post(RESET_PASS_ENDPOINT,
            {
                password: password,
                otp: otp,
                email: email
            },
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                withCredentials: true
            }
        );
    } catch (error) {
        return error
    }
};

