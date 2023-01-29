import { observer } from 'mobx-react-lite';
import React from 'react';
import LawyerHelpItem from '../../components/Account/LawyerHelpItem/LawyerHelpItem';
import { useAccountPage } from '../../hooks/lk/useAccountPage';
import styles from "./AccountPage.module.scss";

const AccountPage = () => {
    const {store, lawyer} = useAccountPage();


    return (
        <div>
            <LawyerHelpItem item={lawyer.lawyerHelp} />
        </div>
    )
}

export default observer(AccountPage);