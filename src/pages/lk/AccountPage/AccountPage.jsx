import { observer } from 'mobx-react-lite';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import LawyerHelpItem from '../../../components/Account/LawyerHelpItem/LawyerHelpItem';
import styles from "./AccountPage.module.scss";

const AccountPage = () => {
    return (
        <div className={styles.accountPage}>
            <ToastContainer />
            <LawyerHelpItem />
        </div>
    )
}

export default observer(AccountPage);