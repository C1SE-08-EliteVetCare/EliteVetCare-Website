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


export const forgotPassword = async (email) => {
    try {
        const response = await request.post("/auth/forgot-password", {
            email,
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

export const Resetpassword = async (body) => {
    try {
        const response = await request.post("/auth/reset-password", body);
        return {
            success: true,
            response: response.data,
            statusCode: response.status,
        };
    } catch (error) {
        console.error("Reset password error:", error); // Log the error for debugging
        return {
            success: false,
            error: error.response.data,
            statusCode: error.response.status,
        };
    }
};






export const changePassword = async (oldPassword, newPassword) => {
    try {
        const response = await request.put("/user/change-password", { oldPassword, newPassword });
        return {
            success: true,
            data: response.data,
            statusCode: response.status,
        };
    } catch (error) {
        if (error.response && error.response.status === 400 && error.response.data.errorCode === "CURRENT_PASSWORD_INCORRECT") {
            return {
                success: false,
                errorCode: "CURRENT_PASSWORD_INCORRECT",
            };
        }

        console.error("Change password error:", error);
        throw error;
    }
};

export const checkOldPassword = async (oldPassword) => {
    try {
        const response = await request.post("/user/change-password", { oldPassword });
        return {
            success: true,
            data: response.data,
            statusCode: response.status,
        };
    } catch (error) {
        if (error.response && error.response.status === 400 && error.response.data.errorCode === "CURRENT_PASSWORD_INCORRECT") {
            console.error("Mật khẩu hiện tại không đúng");
            return {
                success: false,
                errorCode: "CURRENT_PASSWORD_INCORRECT",
            };
        }

        console.error("Check old password error:", error);
        throw error;
    }
};
