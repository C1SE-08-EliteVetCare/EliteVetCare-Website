import * as request from "../utils/httpRequest";


export const getUsers = async (accessToken, { page, limit }) => {
    try {
        const response = await request.get('/user/users', {
            params: { page, limit },  // Include page and limit as query parameters
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

export const getDetail = async (accessToken) => {
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




export const manageUser = async (page,limit,search) => {
    try {
        const response = await request.post("/user/users?page=2&limit=3", {page,limit,search});
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
export const toggleAccountStatus = async (userid,action) => {
    try {
        const response = await request.post("/user/toggle-active?userId=3&action=activate", { userid,action});
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



