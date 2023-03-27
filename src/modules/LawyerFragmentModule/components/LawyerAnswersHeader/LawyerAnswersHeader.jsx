import React from "react";
import styles from "./LawyerAnswersHeader.module.scss";
import classNames from "classnames";

const LawyerAnswersHeader = ({ title, answersLength }) => {
  return (
    <header
      className={classNames(styles.lawyerHelpHeader, {
        [styles.withoutMarginBottom]: !answersLength,
      })}
    >
      {title}
    </header>
  );
};

export default LawyerAnswersHeader;
