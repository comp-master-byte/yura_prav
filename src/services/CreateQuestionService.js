import $api from "../http";

export default class CreateQuestionService {
    static async createQuestion(id, data) {
        const response =  await $api.put(`/api/${id}/add_node`, data);
        return response;
    }
}