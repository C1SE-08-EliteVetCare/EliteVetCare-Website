import * as request from "../utils/httpRequest";

const ROLE_USERS = '/user/users';
export const getUser = async (accessToken) => {
    try {
        const response = await request.get(ROLE_USERS, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        return {

        };
    } catch (error) {
        return {
            error,
            statusCode: error.status,
        };
    }
};


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
export const userprofile = async (fullName, gender,city,district,ward,streetAddress,birthYear,phone) => {
    try {
        const response = await request.post("/user/update-profile", { fullName, gender,city,district,ward,streetAddress,birthYear,phone });
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

export const uploadImage = async (avatar, authToken) => {
    try {
        const formData = new FormData();
        formData.append('image', avatar);

        const response = await request.post("/user/upload-avatar", formData, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'multipart/form-data'
            }
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
