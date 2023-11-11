import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
});

const requestAddress = axios.create({
    baseURL: "https://vapi.vnappmob.com/api",
});

export const postRegister = async (endPoints, option = {}) => {
    const response = await instance.post(endPoints, option);
    return response;
};

export const postVerify = async (endPoints, option = {}) => {
    const response = await instance.post(endPoints, option);
    return response;
};

export const post = async (endPoints, option = {}) => {
    const response = await instance.post(endPoints, option);
    return response;
};

export const get = async (endpoint, options = {}) => {
    return await instance.get(endpoint, options);
};

export const getAddress = async (endpoint, options = {}) => {
    return await requestAddress.get(endpoint, options);
};

let isRefreshing = false;
instance.interceptors.response.use(
    (res) => res,
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !isRefreshing) {
            console.log("Access token expired");
            isRefreshing = true;
            try {
                console.log("call api refresh token");
                const refreshToken = localStorage.getItem("refresh-token");

                const result = await instance.post(
                    `/auth/refresh-token`,
                    {},
                    {
                        headers: { Authorization: `Bearer ${refreshToken}` },
                    }
                );

                const accessToken = result.data.accessToken;
                localStorage.setItem("access-token", accessToken);
                originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
                return Promise.resolve(instance(originalRequest))
            } catch (error) {
                if (error.response.status === 401) {
                    console.log("Refresh token expired");
                    localStorage.removeItem("access-token");
                    localStorage.removeItem("refresh-token");
                    localStorage.removeItem("auth");
                    window.location.href = "/login";
                }
                return Promise.reject(error);
            } finally {
                isRefreshing = false;
            }
        }
        return Promise.reject(error);
    }
);

export default instance;
