import React from "react";
import styles from "./EditLawyerModule.module.scss";
import { useEditLawyerModule } from "./hooks/useEditLawyerModule";
import UIOutlinedInput from "../UI/UIOutlinedInput/UIOutlinedInput";
import UIButton from "../UI/UIButton/UIButton";

const EditLawyerModule = () => {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    parsedLocationState,
    goBackToAnswers,
  } = useEditLawyerModule();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <UIOutlinedInput
        register={register}
        name="title"
        error={errors.title}
        inputClassName={styles.message}
        validation={{
          required: "Поле обязательно к заполнению",
        }}
        isAccessToDelete
      />

      <div className={styles.answersList}>
        {parsedLocationState?.lawyerHelp.answers.map((answer, index) => (
          <UIOutlinedInput
            key={index}
            register={register}
            name={answer[0]}
            inputWrapperClassName={styles.answerItem}
            validation={{ required: "Поле обязательно к заполнению" }}
            isAccessToDelete
          />
        ))}
      </div>

      <div className={styles.editButtons}>
        <UIButton>Сохранить изменения</UIButton>
        <UIButton onClick={goBackToAnswers}>Назад</UIButton>
      </div>
    </form>
  );
};

export default EditLawyerModule;
