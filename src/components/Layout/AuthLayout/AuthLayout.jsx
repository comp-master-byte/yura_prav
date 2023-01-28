import React from "react";
import styles from "./AuthLayout.module.scss";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className={styles.authWrapper}>
            <div className={styles.container}>
                <div className={styles.form}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AuthLayout;