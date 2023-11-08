import * as request from "../utils/httpRequest";

const REGISTER_ENDPOINT = "/auth/register";

export const register = async (fullName, email, password, phone) => {
    try {
        console.log("");
        const response = await request.postRegister(REGISTER_ENDPOINT, {
            fullName: fullName,
            email: email,
            password: password,
            phone: phone,
        });
        return {
            response: response.data,
            statusCode: response.status,
        };
    } catch (error) {
        if (error.response) {
            console.log(error.response.data);
        }
        // Sử dụng error.response để truy cập thông tin lỗi HTTP
        // return {
        //     error: error.response.data,
        //     statusCode: error.response.status,
        // };
    }
};

const VERIFY_EMAIL = "/auth/verify-email";

export const verifyEmail = async (email, otp) => {
    try {
        const response = await request.postVerify(VERIFY_EMAIL, {
            email: email,
            otp: otp,
        });

        // Assuming a successful response has status code 200
        console.log("Response data:", response.data); // Display API response data
        return {
            success: true,
            data: response.data.data,
            statusCode: response.status,
        };
    } catch (error) {
        if (error.response) {
            // Handle server error with status code
            console.log("Server error response:", error.response.data); // Display server error data
            return {
                success: false,
                error: "Server error",
                statusCode: error.response.status,
            };
        } else {
            // Handle network error or other unexpected errors
            console.log("Network or server error:", error);
            return {
                success: false,
                error: "An error occurred while sending the request",
                statusCode: 0,
            };
        }
    }
};
