import { observer } from 'mobx-react-lite';
import React from 'react';
import LawyerHelpItem from '../../components/Account/LawyerHelpItem/LawyerHelpItem';
import { useAccountPage } from '../../hooks/lk/useAccountPage';
import styles from "./AccountPage.module.scss";

const AccountPage = () => {
    const {lawyer} = useAccountPage();

    return (
        <div className={styles.accountPage}>
            
            <LawyerHelpItem item={lawyer.lawyerHelp} />
        </div>
    )
}

export default observer(AccountPage);