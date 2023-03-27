import React from "react";
import styles from "./LawyerAnswersList.module.scss";
import AddLawyerItemButton from "../AddLawyerItemButton/AddLawyerItemButton";

const LawyerAnswersList = ({
  lawyerAnswers,
  onSelectAnswer,
  returnToFirstAnswer,
}) => {
  return (
    <main className={styles.lawyerHelperAnswers}>
      {lawyerAnswers?.length > 0 ? (
        lawyerAnswers?.map((answer, index) =>
          parseInt(answer[0]) === 1000 ? (
            <React.Fragment key={index}></React.Fragment>
          ) : (
            <div
              onClick={() => onSelectAnswer(answer)}
              key={index}
              className={styles.lawyerHelperAnswer}
            >
              {answer[0]}
            </div>
          )
        )
      ) : (
        <div
          onClick={returnToFirstAnswer}
          className={styles.lawyerHelperAnswer}
        >
          Вернуться на главную
        </div>
      )}
      <AddLawyerItemButton />
    </main>
  );
};

export default LawyerAnswersList;
