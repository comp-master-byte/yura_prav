import React from "react";
import styles from "./EditLawyerModule.module.scss";
import { useEditLawyerModule } from "./hooks/useEditLawyerModule";
import UIOutlinedInput from "../UI/UIOutlinedInput/UIOutlinedInput";

const EditLawyerModule = () => {
  const { register, handleSubmit, errors, onSubmit, parsedLocationState } =
    useEditLawyerModule();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <UIOutlinedInput
        register={register}
        name="title"
        error={errors.title}
        validation={{
          required: "Поле обязательно к заполнению",
        }}
      />

      {parsedLocationState?.lawyerHelp.answers.map((answer, index) => (
        <UIOutlinedInput
          key={index}
          register={register}
          name={answer[0]}
          //   error={errors.answer[0]}
          validation={{ required: "Поле обязательно к заполнению" }}
        />
      ))}
    </form>
  );
};

export default EditLawyerModule;
