import React from "react";
import styles from "../../../styles/auth.module.scss";
import { Link } from "react-router-dom";
import UIInput from "../../../UI/UIInput/UIInput";
import { useLogin } from "../../../hooks/auth/useLogin";
import { EMAIL_REGEX } from "../../../utils/regexExp";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { ToastContainer } from "react-toastify";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    store,
    togglePasswordVisibility,
    isPasswordVisible,
  } = useLogin();

  return (
    <>
      <ToastContainer />
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
              required: "Это поле обязательное",
              pattern: {
                value: EMAIL_REGEX,
                message: "E-mail введён некорректно",
              },
            }}
          />
          <UIInput
            name="password"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Введите ваш пароль"
            register={register}
            error={errors.password}
            iconClassName={`uil uil-lock ${styles.icon}`}
            extraIconClassName={
              isPasswordVisible
                ? `uil uil-eye ${styles.showHidePw}`
                : `uil uil-eye-slash ${styles.showHidePw}`
            }
            isPasswordVisible={isPasswordVisible}
            togglePasswordVisibility={togglePasswordVisibility}
            validation={{
              required: "Это поле обязательное",
              minLength: {
                value: 8,
                message: "Минимальное кол-во символов 8.",
              },
              maxLength: {
                value: 32,
                message: "Максимальное кол-во символов 32.",
              },
            }}
          />
          <div className={styles.checkboxText}>
            <div className={styles.checkboxContent}>
              <input type="checkbox" id="logCheck" />
              <label htmlFor="logCheck" className={styles.text}>
                Запомнить меня
              </label>
            </div>
            <a href="#" className={styles.text}>
              Забыли пароль?
            </a>
          </div>

          <div
            className={classNames(styles.inputField, styles.button, {
              [styles.disabledBtn]: Object.keys(errors).length > 0,
              [styles.loadingBtn]: store.isLoading,
            })}
          >
            <button
              disabled={Object.keys(errors).length > 0 || store.isLoading}
            >
              {store.loginBtnText}
            </button>
          </div>
        </form>

        <div className={styles.loginSignup}>
          <span className={styles.text}>Нет аккаунта?</span>
          <Link to="/signup" className={`${styles.text} ${styles.signupText}`}>
            Зарегистрируйтесь сейчас
          </Link>
        </div>
      </div>
    </>
  );
};

export default observer(LoginPage);
