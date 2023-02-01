import $api from "../http";

export default class CreateQuestionService {
    static async createQuestion(id) {
        const response = $api.put(`/api/${id}/add_node`)
        return response;
    }
}