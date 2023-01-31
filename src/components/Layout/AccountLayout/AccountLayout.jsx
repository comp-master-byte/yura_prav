import React from "react";
import styles from "./AccountLayout.module.scss";
import {Outlet} from "react-router-dom";
import { useContext } from 'react';
import { Context } from "../../../index";
import {observer} from "mobx-react-lite";
import classNames from "classnames";
import {useNavigate} from "react-router-dom";

const AccountLayout = () => {
    const {store} = useContext(Context);
    const navigate = useNavigate();

    const logoutFromAccount = () => {
        store.logout();
        navigate('/');
    }

    return (
        <div className={styles.accountWrapper}>
            <div className={styles.innerAccount}>
                <header className={styles.accountHeader}>

                    <div className={styles.headerInfo}>
                        <div className={styles.headerTextInfo}>
                            <p className={styles.headerTextInfo__text}>{store.user.last_name} {store.user.first_name}</p>
                            <div className={styles.logoutBtn}>
                                <button onClick={logoutFromAccount}>Выйти</button>
                                <i className={classNames("uil uil-signout")}></i>
                            </div>
                        </div>
                        <i className={classNames("uil uil-user", styles.exitIcon)}></i>
                    </div>
                </header>
                <main className={styles.accountMainContent}>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default observer(AccountLayout);