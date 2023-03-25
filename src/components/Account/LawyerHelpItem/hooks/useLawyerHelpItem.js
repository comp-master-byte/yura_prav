import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../..";
import LawyerService from "../../../../services/LawyerService";
import { toast } from "react-toastify";

export const useLawyerHelpItem = () => {
  const { lawyer } = useContext(Context);
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  const [isAnswersDisabled, setIsAnswersDisabled] = useState(true);

  const onSubmit = (data) => {
    if ("title" in data) {
      LawyerService.editLawyerMessage(id, { new_message: data.title });
    }
    delete data.title;
    const result = Object.entries(data).map((entry) => ({
      [entry[0]]: entry[1],
    }));
    result.forEach(async (item) => {
      const previous_answer = Object.keys(item);
      const new_answer = Object.values(item);
      if (previous_answer[0] !== new_answer[0]) {
        await LawyerService.editLawyerAnswer(id, {
          previous_answer: previous_answer[0],
          new_answer: new_answer[0],
        });
      }
    });
    toast("Редактирование прошло успешно", {
      type: "success",
      position: "top-right",
    });
    setIsAnswersDisabled(true);
  };

  const toggleAnswersDisabled = (e) => {
    e.preventDefault();
    setIsAnswersDisabled((prev) => !prev);
  };

  const onSelectAnswer = (answer) => {
    if (answer[1] === 101) {
      navigate("/personalAccount/generate-question", {
        state: { id: location.state.id, data: location.state.data },
      });
      const stack = JSON.parse(localStorage.getItem("nodeIdStack"));
      stack.push(100);
      const toStringStack = JSON.stringify(stack);
      localStorage.setItem("nodeIdStack", toStringStack);
    } else {
      lawyer.getSelectedLawyerHelp(answer[1]);
      navigate(`/personalAccount/account/${answer[1]}`, {
        state: { id, data: answer[0] },
      });
    }
  };

  const goBack = (e) => {
    e.preventDefault();
    lawyer.getPreviousLawyerHelp(1);
    navigate(-1);
  };

  const toEditLawyerPage = (event) => {
    event.preventDefault();
    navigate(`/personalAccount/account/${id}/edit`, {
      state: JSON.stringify(lawyer),
    });
  };

  useEffect(() => {
    if (lawyer.lawyerHelp?.answers?.length) {
      let stack = [];
      lawyer.lawyerHelp?.answers.forEach((item) => {
        stack.push({ [item[0]]: item[0] });
      });
    }
  }, [lawyer.lawyerHelp]);

  return {
    onSelectAnswer,
    lawyer,
    goBack,
    onSubmit,
    toggleAnswersDisabled,
    isAnswersDisabled,
    toEditLawyerPage,
  };
};
