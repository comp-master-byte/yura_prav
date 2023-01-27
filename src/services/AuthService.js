import $api from "../http/index";

export default class AuthService {
    static async login(loginData) {
        return $api.post('/auth/token/login', loginData)
    }

    static async registration(registrationData) {
        return $api.post('/api/auth/users/', registrationData)
    }

    static async logout() {
        return $api.post('/auth/token/logut');
    }
}