import React from "react";
import styles from "./PersonalAccountContent.module.scss";

const PersonalAccountContent = ({ children }) => {
  return <div className={styles.personalAccountContent}>{children}</div>;
};

export default PersonalAccountContent;
