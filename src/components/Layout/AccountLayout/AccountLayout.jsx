import React from 'react';
import styles from "./AccountLayout.module.scss";
import {Outlet} from "react-router-dom";

const AccountLayout = () => {
    return (
        <div className={styles.accountWrapper}>
            <Outlet />
        </div>
    )
}

export default AccountLayout;