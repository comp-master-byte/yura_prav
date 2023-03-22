import { observer } from "mobx-react-lite";
import React from "react";
import LawyerHelpItem from "../../../components/Account/LawyerHelpItem/LawyerHelpItem";
import styles from "./AccountPage.module.scss";

const AccountPage = () => {
  return (
    <div className={styles.accountPage}>
      <LawyerHelpItem />
    </div>
  );
};

export default observer(AccountPage);
