import $api from "../http";

export default class LawyerService {
    static async getLawyerNode(id) {
        const response = await $api.get(`/api/node/${id}`);
        return response.data;
    }
}