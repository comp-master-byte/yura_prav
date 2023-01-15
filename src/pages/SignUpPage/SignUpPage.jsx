import React from "react";
import styles from "./SignUpPage.module.scss";
import SignUpForm from "../../components/Auth/SignUpForm/SignUpForm";

const SignUpPage = () => {
    return (
        <section className={styles.signUpWrapper}>
            <header className={styles.signUpHeader}>
                <div className={styles.container}>
                    <h1>Регистрация</h1>
                    <p>*Пожалуйста заполните все необходимые поля, чтобы создать аккаунт!</p>
                </div>
            </header>
            <main className={styles.signUpContent}>
                <div className={styles.container}>
                    <SignUpForm />
                </div>
            </main>
        </section>
    )
}

export default SignUpPage;