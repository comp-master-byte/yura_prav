import React from "react";
import styles from "./LawyerAnswersList.module.scss";
import AddLawyerItemButton from "../AddLawyerItemButton/AddLawyerItemButton";

const LawyerAnswersList = ({
  lawyerAnswers,
  isAnswersDisabled,
  onSelectAnswer,
}) => {
  return (
    <main className={styles.lawyerHelperAnswers}>
      {lawyerAnswers?.map((answer, index) =>
        parseInt(answer[0]) === 1000 ? (
          <React.Fragment key={index}></React.Fragment>
        ) : (
          <div
            onClick={() => isAnswersDisabled && onSelectAnswer(answer)}
            key={index}
            className={styles.lawyerHelperAnswer}
          >
            {answer[0]}
          </div>
        )
      )}
      <AddLawyerItemButton />
    </main>
  );
};

export default LawyerAnswersList;
