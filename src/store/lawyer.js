import { makeObservable, observable, action } from "mobx";
import CreateQuestionService from "../services/CreateQuestionService";
import LawyerService from "../services/LawyerService";
import { toast } from "react-toastify";

export default class Lawyer {
  lawyerHelp = {}; // Хранит в себе данные вопросов/ответов
  nodeIdStack = []; // Хранит в себе все node_id
  isCreateQuestionLoading = false;

  constructor() {
    makeObservable(this, {
      lawyerHelp: observable,
      setLawyerHelp: action,
    });
  }

  setLawyerHelp(help) {
    this.lawyerHelp = help;
  }

  setLawyerHelpAnswers(newAnswer) {
    this.lawyerHelp = {
      ...this.lawyerHelp,
      answers: [...this.lawyerHelp.answers, newAnswer],
    };
  }

  setIsCreateQuestionLoading(bool) {
    this.isCreateQuestionLoading = bool;
  }

  async createLawyerQuestion(id, data) {
    try {
      this.setIsCreateQuestionLoading(true);
      const response = CreateQuestionService.createQuestion(id, data);
      toast("Данные успешно отправлены!", {
        type: "success",
        position: "top-right",
      });
    } catch (e) {
      console.log(e.response.data);
    } finally {
      this.setIsCreateQuestionLoading(false);
    }
  }

  async getPreviousLawyerHelp(returnId) {
    try {
      const stack = JSON.parse(localStorage.getItem("nodeIdStack"));
      const data = await LawyerService.getLawyerNode(stack[stack.length - 2]);
      const newData = {
        ...data,
        answers: data.answers ? Object.entries(data.answers) : [],
      };
      this.setLawyerHelp(newData);
      this.nodeIdStack.pop();
      stack.pop();
      if (!stack.length) {
        stack.shift(1);
      }
      const toStringStack = JSON.stringify(stack);
      localStorage.setItem("nodeIdStack", toStringStack);
    } catch (e) {
      console.log(e.response.data);
    }
  }

  async getSelectedLawyerHelp(id = 1, toClean = false) {
    try {
      const data = await LawyerService.getLawyerNode(id);
      const newData = {
        ...data,
        answers: data.answers ? Object.entries(data.answers) : [],
      };
      this.nodeIdStack.push(newData.node_id);
      const toStringStack = JSON.stringify(this.nodeIdStack);
      localStorage.setItem("nodeIdStack", toStringStack);
      this.setLawyerHelp(newData);
      if (toClean) {
        const stack = [1];
        const toStringStack = JSON.stringify(stack);
        localStorage.setItem("nodeIdStack", toStringStack);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  }
}
