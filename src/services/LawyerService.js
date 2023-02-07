import $api from "../http";

export default class LawyerService {
    static async getLawyerNode(id) {
        const response = await $api.get(`/api/node/${id}`);
        return response.data;
    }

    static async addNewLawyerAnswer(id, data) {
        try {
            const response = await $api.post(`/api/${id}/add_answer`, data);
            return response.data;
        } catch(e) {
            console.log(e);
        }
    }
}