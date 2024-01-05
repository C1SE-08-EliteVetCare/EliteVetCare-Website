import * as request from "../utils/httpRequest";


export const getUsers = async (accessToken, { page, limit,search }) => {
    try {
        const response = await request.get('/user/users', {
            params: { page, limit,search},  // Include page and limit as query parameters
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

export const getFeedBack = async (accessToken,{ page, limit,type }) => {
    try {
        const response = await request.get('/feedback/feedbacks', {
            params: { page, limit,type },
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
export const Toggleactivateuser = async (accessToken, userId, action ) => {
    try {
        const response = await request.post('user/toggle-active', null, {
            params: { userId, action },
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




export const updateUserRole = async (userId, roleId, accessToken) => {
    try {
        const response = await request.patch(
            `/user/update-role`,  // Include userId in the URL
            { userId, roleId },
            {
                headers: { Authorization: `Bearer ${accessToken}` },
            }
        );
        return {
            response: response.data,
            statusCode: response.status,
        };
    } catch (error) {
        console.error('Error updating user role:', error);
        return {
            error: error.response.data,
            statusCode: error.response.status,
        };
    }
};
export const updateClinic = async (userId, clinicId, accessToken) => {
    try {
        const response = await request.patch(
            `/user/update-clinic`,
            { userId, clinicId },
            {
                headers: { Authorization: `Bearer ${accessToken}` },
            }
        );
        return {
            response: response.data,
            statusCode: response.status,
        };
    } catch (error) {
        console.error('Error updating user role:', error);
        return {
            error: error.response.data,
            statusCode: error.response.status,
        };
    }
};







