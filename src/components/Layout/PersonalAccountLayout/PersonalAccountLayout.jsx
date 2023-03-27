import React from "react";
import styles from "./PersonalAccountLayout.module.scss";
import classNames from "classnames";
import { Outlet } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useAccountLayout } from "../../../hooks/personalAccount/useAccountLayout";
import Footer from "../../Footer/Footer";

const PersonalAccountLayout = () => {
  const { logoutFromAccount, store } = useAccountLayout();

  return (
    <div className={styles.accountWrapper}>
      <div className={styles.innerAccount}>
        <header className={styles.accountHeader}>
          <div className={styles.headerInfo}>
            <div className={styles.headerTextInfo}>
              <p className={styles.headerTextInfo__text}>
                {store.user.last_name} {store.user.first_name}
              </p>
              <div onClick={logoutFromAccount} className={styles.logoutBtn}>
                <button>Выйти</button>
                <i className={classNames("uil uil-signout")}></i>
              </div>
            </div>
            <i className={classNames("uil uil-user", styles.exitIcon)}></i>
          </div>
        </header>
        <main className={styles.accountMainContent}>
          <div className={styles.mainContentInner}>
            <Outlet />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default observer(PersonalAccountLayout);
