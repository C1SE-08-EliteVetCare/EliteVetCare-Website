import * as request from "../utils/httpRequest";

export const getCurrentUser = async (accessToken) => {
    try {
        const response = await request.get("/user/me", {
            headers: { Authorization: `Bearer ${accessToken}` },
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

export const updateAvatar = async (accessToken, formData) => {
    try {
        const response = await request.post("/user/upload-avatar", formData, {
            headers: { Authorization: `Bearer ${accessToken}` },
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

export const updateProfile = async (accessToken, body) => {
    try {
        const response = await request.put("/user/update-profile", body, {
            headers: { Authorization: `Bearer ${accessToken}` },
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
