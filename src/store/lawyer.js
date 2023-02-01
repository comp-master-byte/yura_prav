import { makeObservable, observable, action } from "mobx";
import LawyerService from "../services/LawyerService";

export default class Lawyer {
    lawyerHelp = {}; // Хранит в себе данные вопросов/ответов
    nodeIdStack = []; // Хранит в себе все node_id 
    
    constructor() {
        makeObservable(this, {
            lawyerHelp: observable,
            setLawyerHelp: action
        })
    }

    setLawyerHelp(help) {
        this.lawyerHelp = help;
    }

    async getPreviousLawyerHelp() {
        try {
            const data = await LawyerService.getLawyerNode(this.nodeIdStack[this.nodeIdStack.length - 2]);
            const newData = {
                ...data,
                answers: data.answers ? Object.entries(data.answers) : []
            }
            this.setLawyerHelp(newData);
            this.nodeIdStack.pop();
        } catch(e) {
            console.log(e.response.data);
        }
    }

    async getSelectedLawyerHelp(id = 1) {
        try {
            const data = await LawyerService.getLawyerNode(id);
            const newData = {
                ...data,
                answers: data.answers ? Object.entries(data.answers) : []
            }
            this.nodeIdStack.push(newData.node_id)
            this.setLawyerHelp(newData);
        } catch(error) {
            console.log(error.response.data);
        }
    }
}