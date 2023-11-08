import request from "../utils/httpRequest";

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
            response: error.response.data,
            statusCode: error.response.status,
        };
    }
};
