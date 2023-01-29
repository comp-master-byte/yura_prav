import { makeObservable, observable, action } from "mobx";
import LawyerService from "../services/LawyerService";

export default class Lawyer {
    lawyerHelp = {}
    
    constructor() {
        makeObservable(this, {
            lawyerHelp: observable,
            setLawyerHelp: action
        })
    }

    setLawyerHelp(help) {
        this.lawyerHelp = help;
    }

    async getSelectedLawyerHelp(id = 1) {
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