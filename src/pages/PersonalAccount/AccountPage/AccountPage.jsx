import { observer } from "mobx-react-lite";
import React from "react";
import LawyerFragmentModule from "../../../modules/LawyerFragmentModule/LawyerFragmentModule";
import styles from "./AccountPage.module.scss";

const AccountPage = () => {
  return (
    <div className={styles.accountPage}>
      <LawyerFragmentModule />
    </div>
  );
};

export default observer(AccountPage);
