import React from 'react';
import { useEffect } from 'react';
import { useAccountPage } from '../../hooks/lk/useAccountPage';
import styles from "./AccountPage.module.scss";

const AccountPage = () => {
    const {store} = useAccountPage();

    return (
        <div>AccountPage</div>
    )
}

export default AccountPage