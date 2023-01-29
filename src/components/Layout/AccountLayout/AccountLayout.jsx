import React from "react";
import styles from "./AccountLayout.module.scss";
import {Outlet} from "react-router-dom";
import { useContext } from 'react';
import { Context } from "../../../index";
import {observer} from "mobx-react-lite";
import classNames from "classnames";

const AccountLayout = () => {
    const {store} = useContext(Context);

    return (
        <div className={styles.accountWrapper}>
            <div className={styles.innerAccount}>
                <header className={styles.accountHeader}>
                    <div 
                        // onMouseLeave={() => store.accountPopupToHide(false)}
                        className={styles.headerInfo}
                    >
                        <p className={styles.headerInfo__text}>{store.user.last_name} {store.user.first_name}</p>
                        <i  onMouseEnter={() => store.accountPopupToVisible(true)} className="uil uil-user"></i>
                        <div 
                            className={classNames(styles.accountUserPopup, {
                            [styles.visibleAccountPopup]: store.isAccountPopupVisible
                        })}>
                            <div className={styles.button}>
                                <button onClick={store.logout}>Выйти</button>
                            </div>
                        </div>
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