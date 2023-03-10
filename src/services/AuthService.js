import axios from "axios";
import $api, { API_URL } from "../http";

export default class AuthService {
    static async login(loginData) {
        return axios.post(`${API_URL}/auth/token/login`, loginData);
    }

    static async registration(registrationData) {
        return axios.post(`${API_URL}/api/auth/users/`, registrationData);
    }

    static async logout() {
        return $api.post('/auth/token/logout');
    }
}