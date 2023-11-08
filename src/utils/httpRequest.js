import axios from "axios";

const request = axios.create({
    baseURL: "https://elitevetcare-be.up.railway.app",
});

const requestAddress = axios.create({
    baseURL: "https://vapi.vnappmob.com/api",
});

export const postRegister = async (endPoints, option = {}) => {
    const response = await request.post(endPoints, option);
    return response;
};
export const postVerify = async (endPoints, option = {}) => {
    const response = await request.post(endPoints, option);
    return response;
};
export const post = async (endPoints, option = {}) => {
    const response = await request.post(endPoints, option);
    return response;
};
export const get = async (endpoint, options = {}) => {
    return await request.get(endpoint, options);
};

export const getAddress = async (endpoint, options = {}) => {
    return await requestAddress.get(endpoint, options);
};
export const getRegister = async (endpoint, data, options = {}) => {
    return await request.post(endpoint, data, options);
};

export const getLogin = async (endpoint, data, options = {}) => {
    return await request.post(endpoint, data, options);
};
export const reDelete = async (endPoints, option = {}) => {
    const response = await request.delete(endPoints, option);
    return response;
};

export const getUser = async (endPoints, option = {}) => {
    const response = await request.get(endPoints, option);
    return response;
};
export default request;
