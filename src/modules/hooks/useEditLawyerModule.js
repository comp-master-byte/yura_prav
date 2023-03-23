import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { mergeObjectsInArr } from "../../utils/mergeObjectsInArr";
import LawyerService from "../../services/LawyerService";
import { toast } from "react-toastify";

export const useEditLawyerModule = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [parsedLocationState, setParsedLocationState] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    if ("title" in data) {
      LawyerService.editLawyerMessage(parsedLocationState.lawyerHelp.node_id, {
        new_message: data.title,
      });
    }
    delete data.title;
    const result = Object.entries(data).map((entry) => ({
      [entry[0]]: entry[1],
    }));
    result.forEach(async (item) => {
      const previous_answer = Object.keys(item);
      const new_answer = Object.values(item);
      if (previous_answer[0] !== new_answer[0]) {
        await LawyerService.editLawyerAnswer(
          parsedLocationState.lawyerHelp.node_id,
          {
            previous_answer: previous_answer[0],
            new_answer: new_answer[0],
          }
        );
      }
    });
    toast("Редактирование прошло успешно", {
      type: "success",
      position: "top-right",
    });
  };

  const onDeleteAnswer = (name) => {
    LawyerService.deleteLawyerAnswer(
      parsedLocationState.lawyerHelp.node_id,
      name
    );
  };

  const onDeleteNode = () => {
    LawyerService.deleteLawyerNode(parsedLocationState.lawyerHelp.node_id);
  };

  const goBackToAnswers = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  useEffect(() => {
    const parsedLocationState = JSON.parse(location.state);
    setParsedLocationState(parsedLocationState);
    const stack = parsedLocationState.lawyerHelp.answers.map((item) => {
      return {
        [item[0]]: item[0],
      };
    });

    let mergedObjects = mergeObjectsInArr(stack);

    reset({
      title: parsedLocationState.lawyerHelp.message,
      ...mergedObjects,
    });
  }, [location.state, reset]);

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    parsedLocationState,
    goBackToAnswers,
    onDeleteAnswer,
    onDeleteNode,
  };
};
