import React from "react";
import styles from "./LawyerHelpItem.module.scss";
import { observer } from "mobx-react-lite";
import classNames from "classnames";
import UIButton from "../../../UI/UIButton/UIButton";
import AddLawyerItemButton from "../AddLawyerItemButton/AddLawyerItemButton";
import { useLawyerHelpItem } from "./hooks/useLawyerHelpItem";

const LawyerHelpItem = () => {
  const {
    lawyer,
    onSelectAnswer,
    goBack,
    isAnswersDisabled,
    toEditLawyerPage,
  } = useLawyerHelpItem();

  return (
    <div className={styles.lawyerHelpItem}>
      <header
        className={classNames(styles.lawyerHelpHeader, {
          [styles.withoutMarginBottom]: !lawyer.lawyerHelp?.answers?.length,
        })}
      >
        {lawyer.lawyerHelp?.message}
      </header>
      <main className={styles.lawyerHelperAnswers}>
        {lawyer.lawyerHelp?.answers?.map((answer, index) =>
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
      {lawyer.lawyerHelp?.node_id !== 1 && (
        <UIButton
          customClassName={styles.marginRigth}
          onClick={(e) => goBack(e)}
        >
          Назад
        </UIButton>
      )}
      <UIButton
        customClassName={styles.marginRigth}
        onClick={(event) => toEditLawyerPage(event)}
      >
        Редактировать
      </UIButton>
      {!isAnswersDisabled && (
        <UIButton type="submit">Сохранить изменения</UIButton>
      )}
    </div>
  );
};

export default observer(LawyerHelpItem);
