import { observer } from 'mobx-react-lite';
import React from 'react';
import { useAccountPage } from '../../hooks/lk/useAccountPage';
import styles from "./AccountPage.module.scss";

const AccountPage = () => {
    const {store, lawyer} = useAccountPage();

    return (
        <div>AccountPage</div>
    )
}

export default observer(AccountPage);