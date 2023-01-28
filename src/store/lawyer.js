import { makeAutoObservable } from "mobx";
import LawyerService from "../services/LawyerService";

export default class Lawyer {
    lawyerHelp = {}
    
    constructor() {
        makeAutoObservable(this);
    }

    setLawyerHelp(help) {
        this.lawyerHelp = help;
    }

    async getSelectedLawyerHelp(id) {
        try {
            const data = await LawyerService.getLawyerNode(id);
            this.setLawyerHelp(data);
        } catch(error) {
            console.log(error.response.data);
        }
    }
}