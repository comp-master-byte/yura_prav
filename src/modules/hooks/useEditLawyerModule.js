import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { mergeObjectsInArr } from "../../utils/mergeObjectsInArr";

export const useEditLawyerModule = () => {
  const location = useLocation();

  const [parsedLocationState, setParsedLocationState] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
  };
};
