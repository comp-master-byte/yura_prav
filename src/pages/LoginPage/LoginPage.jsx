import React from 'react';
import styles from "../../styles/auth.module.scss";
import {Link} from "react-router-dom";
import UIInput from '../../UI/UIInput';
import { useLogin } from '../../hooks/useLogin';
import { EMAIL_REGEX } from '../../utils/regexExp';
import classNames from "classnames";
import {observer} from "mobx-react-lite";

const LoginPage = () => {
    const {register, handleSubmit, onSubmit, errors} = useLogin();

    return (
        <div className={styles.loginPage}>
            <span className={styles.title}>Вход</span>
            <form onSubmit={handleSubmit(onSubmit)}>
                <UIInput 
                    name="email"
                    placeholder="Введите ваш E-mail"
                    register={register}
                    error={errors.email}
                    iconClassName={`uil uil-envelope ${styles.icon}`}
                    validation={{
                        required: 'Это поле обязательное',
                        pattern: {
                            value: EMAIL_REGEX,
                            message: 'E-mail введён некорректно'
                        }
                    }}
                />
                <UIInput 
                    name="password"
                    type="password"
                    placeholder="Введите ваш пароль"
                    register={register}
                    error={errors.password}
                    iconClassName={`uil uil-lock ${styles.icon}`}
                    extraIconClassName={`uil uil-eye-slash ${styles.showHidePw}`}
                    validation={{
                        required: 'Это поле обязательное',
                        minLength: {
                            value: 8,
                            message: 'Минимальное кол-во символов 8.'
                        },
                        maxLength: {
                            value: 32,
                            message: 'Максимальное кол-во символов 32.'
                        }
                    }}
                />
                <div className={styles.checkboxText}>
                    <div className={styles.checkboxContent}>
                        <input type="checkbox" id="logCheck" />
                        <label htmlFor="logCheck" className={styles.text}>Запомнить меня</label>
                    </div>
                    <a href="#" className={styles.text}>Забыли пароль?</a>
                </div>

                <div className={classNames(styles.inputField, styles.button)}>
                    <button disabled={Object.keys(errors).length > 0}>Войти</button>
                </div>
            </form>
            
            <div className={styles.loginSignup}>
                <span className={styles.text}>Нет аккаунта?</span>
                <Link to="/signup" className={`${styles.text} ${styles.signupText}`}>Зарегестрируйтесь сейчас</Link>
            </div>
        </div>
    )
}

export default observer(LoginPage);