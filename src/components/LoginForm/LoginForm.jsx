import React from 'react';
import styles from "./LoginForm.module.scss";
import { TextField, Button } from '@mui/material';
import { useLogin } from '../../hooks/useLogin';
import { textFieldStyleProps, textFieldErrorStyleProps } from '../../mockups/textFieldProps';

const LoginForm = () => {

    const { email, password, emailErrors, passwordErrors } = useLogin();

    return (
        <div className={styles.loginFormWrapper}>
            <div className={styles.loginHeader}>
                <h1>Войти в аккаунт</h1>
                {/* <p>Welcome back login your account</p> */}
            </div>
            <form className={styles.loginForm}>
                <TextField
                    label="Email"
                    variant="standard"
                    name="email"
                    value={email.value}
                    onChange={email.onChange}
                    onBlur={email.onBlur}
                    className={styles.loginForm__input}
                    sx={emailErrors ? textFieldErrorStyleProps : textFieldStyleProps}
                    error={emailErrors}
                    helperText={
                        ((email.isDirty && email.isEmpty) && 'Поле не может быть пустым') ||
                        ((email.isDirty && email.minLengthError) && 'Поле не может быть короче 3 символов') ||
                        ((email.isDirty && email.emailError) && 'Неправильно введен email')
                    }
                />
                <TextField
                    type="password"
                    label="Пароль"
                    variant="standard"
                    name="password"
                    value={password.value}
                    onChange={password.onChange}
                    onBlur={password.onBlur}
                    className={styles.loginForm__input}
                    sx={passwordErrors ? textFieldErrorStyleProps : textFieldStyleProps}
                    error={passwordErrors}
                    helperText={
                        ((password.isDirty && password.isEmpty) && 'Поле не может быть пустым') ||
                        ((password.isDirty && password.minLengthError) && 'Поле не может быть короче 3 символов') ||
                        ((password.isDirty && password.maxLengthError) && 'Поле не может быть длиннее 8 символов')
                    }
                />
                <div className={styles.forgotPasswordBtn}>
                    <Button
                        variant="text"
                        className={styles.textBtn}
                        disableRipple
                    >
                        Забыли пароль?
                    </Button>
                </div>
                <div className={styles.loginAndRegBtns}>
                    <Button disabled={!email.isInputValid || !password.isInputValid} variant="contained" className={styles.enterBtn}>Войти</Button>
                    <Button
                        variant="text"
                        className={styles.textBtn}
                        disableRipple
                    >
                        Зарегестрироваться
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm