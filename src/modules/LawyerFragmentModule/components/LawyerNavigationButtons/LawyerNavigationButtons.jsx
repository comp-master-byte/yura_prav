import React from "react";
import styles from "./LawyerNavigationButtons.module.scss";
import UIButton from "../../../../UI/UIButton/UIButton";

const LawyerNavigationButtons = ({ nodeId, goBack, toEditLawyerPage }) => {
  return (
    <div className={styles.lawyerHelpButtons}>
      {nodeId !== 1 && (
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
    </div>
  );
};

export default LawyerNavigationButtons;
