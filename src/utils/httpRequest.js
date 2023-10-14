import axios from "axios";

const request = axios.create({
    baseURL: "http://localhost:5000"
});

const requestAddress = axios.create({
    baseURL: 'https://vapi.vnappmob.com/api',
});

export const get = async (endpoint, options = {}) => {
    return await request.get(endpoint, options);
};

export const getAddress = async (endpoint, options = {}) => {
    return await requestAddress.get(endpoint, options);
};

export default request;