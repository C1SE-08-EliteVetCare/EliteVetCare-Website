import axios from "axios";

const request = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL
});

const requestAddress = axios.create({
    baseURL: 'https://vapi.vnappmob.com/api',
});

export const get = async (endpoint, options = {}) => {
    return await request.get(endpoint, options);
};

export const post = async (endpoint, options = {}) => {
    return await request.post(endpoint, options);
};

export const getAddress = async (endpoint, options = {}) => {
    return await requestAddress.get(endpoint, options);
};

export default request;