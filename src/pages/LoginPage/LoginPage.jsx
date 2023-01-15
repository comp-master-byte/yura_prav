import React from 'react';
import styles from "./LoginPage.module.scss";
import LoginForm from '../../components/Auth/LoginForm/LoginForm';

const LoginPage = () => {
    return (
        <section className={styles.loginContent}>
            <div className={styles.leftColumnContent}></div>
            <div className={styles.rightColumnContent}>
                <LoginForm />
            </div>
        </section>
    )
}

export default LoginPage