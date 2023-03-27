import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Context } from "../../..";

export const useLawyerHelpItem = () => {
  const { lawyer } = useContext(Context);
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

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

  const returnToFirstAnswer = () => {
    lawyer.getSelectedLawyerHelp(1, true);
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
    returnToFirstAnswer,
    toEditLawyerPage,
  };
};
