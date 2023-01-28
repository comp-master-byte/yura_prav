import axios from "axios";

export const API_URL = "http://ane4ka.site";

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Token ${localStorage.getItem('token')}`
    return config;
})

export default $api;