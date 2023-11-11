import * as request from "../utils/httpRequest";

export const getPet = async (accessToken) => {
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