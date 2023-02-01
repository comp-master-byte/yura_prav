import React from "react";
import styles from "./AccountLayout.module.scss";
import {Outlet} from "react-router-dom";
import {observer} from "mobx-react-lite";
import classNames from "classnames";
import { useAccountLayout } from "../../../hooks/lk/useAccountLayout";

const AccountLayout = () => {
    const {logoutFromAccount, store} = useAccountLayout();

    return (
        <div className={styles.accountWrapper}>
            <div className={styles.innerAccount}>
                <header className={styles.accountHeader}>

                    <div className={styles.headerInfo}>
                        <div className={styles.headerTextInfo}>
                            <p className={styles.headerTextInfo__text}>{store.user.last_name} {store.user.first_name}</p>
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
        </div>
    )
}

export default observer(AccountLayout);