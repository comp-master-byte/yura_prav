import React from 'react';
import styles from "./LoginPage.module.scss";
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
    return (
        <section className={styles.loginWrapper}>
            <main className={styles.loginContent}>
                <div className={styles.leftColumnContent}></div>
                <div className={styles.rightColumnContent}>
                    <LoginForm />
                </div>
            </main>
        </section>
    )
}

export default LoginPage