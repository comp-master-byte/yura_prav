import $api from "../http";

export default class UserService {
    static async getUser() {
        try {
            const response = await $api.get('/api/auth/users/me');
            return response.data;
        } catch(e) {
            console.log(e.response.data);
        }
    }
}