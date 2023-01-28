import $api from "../http";

export default class UserService {
    static async getUser() {
        const response = await $api.get('/api/auth/users/me');
        return response.data;
    }
}