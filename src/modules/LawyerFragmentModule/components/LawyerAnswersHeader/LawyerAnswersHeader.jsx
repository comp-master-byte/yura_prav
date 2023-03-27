import React from "react";
import styles from "./LawyerAnswersHeader.module.scss";
import classNames from "classnames";
import logo from "./public/logo.svg";

const LawyerAnswersHeader = ({ title, answersLength }) => {
  return (
    <header
      className={classNames(styles.lawyerHelpHeader, {
        [styles.withoutMarginBottom]: !answersLength,
      })}
    >
      <img className={styles.lawyerHelpHeader__img} src={logo} alt="logo" />
      <div className={styles.lawyerHelpHeader__title}>{title}</div>
    </header>
  );
};

export default LawyerAnswersHeader;
