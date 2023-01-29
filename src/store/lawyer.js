import { makeObservable, observable } from "mobx";
import LawyerService from "../services/LawyerService";

export default class Lawyer {
    lawyerHelp = {}
    
    constructor() {
        makeObservable(this, {
            lawyerHelp: observable,
        })
    }

    setLawyerHelp(help) {
        this.lawyerHelp = help;
    }

    async getSelectedLawyerHelp(id) {
        try {
            const data = await LawyerService.getLawyerNode(id);
            const newData = {
                ...data,
                answers: Object.entries(data.answers)
            }
            this.setLawyerHelp(newData);
        } catch(error) {
            console.log(error.response.data);
        }
    }
}