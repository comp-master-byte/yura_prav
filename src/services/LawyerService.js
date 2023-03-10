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
    
    static async editLawyerAnswer(id, data) {
        try {
            const response = await $api.put(`/api/${id}/edit_answer`, data);
            return response.data;
        } catch(e) {
            console.log(e);
        }
    }

    static async editLawyerMessage(id, data) {
        try {
            const response = await $api.put(`/api/${id}/edit_message`, data);
            return response.data;
        } catch(e) {
            console.log(e);
        }
    }
}