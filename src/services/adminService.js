import * as request from "../utils/httpRequest";


export const getUsers = async (accessToken) => {
    try {
        const response = await request.get('/user/users', {
            headers: { Authorization: `Bearer ${accessToken}` },
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

export const getFeedBack = async (accessToken) => {
    try {
        const response = await request.get('/feedback/feedbacks?rating=5', {
            headers: { Authorization: `Bearer ${accessToken}` },
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





export const manageUser = async (id,fullName,email, gender,city,district,ward,avatar,phone,operatingStatus,createdAt,role,clinic) => {
    try {
        const response = await request.post("/user/update-profile", { id,fullName,email, gender,city,district,ward,avatar,phone,operatingStatus,createdAt,role,clinic});
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



