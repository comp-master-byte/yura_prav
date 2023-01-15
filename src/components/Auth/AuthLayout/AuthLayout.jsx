import React from "react";
import styles from "./AuthLayout.module.scss";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className={styles.authWrapper}>
            <Outlet />
        </div>
    )
}

export default AuthLayout;