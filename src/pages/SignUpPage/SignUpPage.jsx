import React from "react";
import styles from "../../styles/auth.module.scss";
import {Link} from "react-router-dom"
import { useSignup } from "../../hooks/useSignup";
import { EMAIL_REGEX } from "../../utils/regexExp";
import UIInput from "../../UI/UIInput";
import UIInputMask from "../../UI/UIInputMask";
import classNames from "classnames";
import { ToastContainer } from "react-toastify";
import { observer } from 'mobx-react-lite';

const SignUpPage = () => {
    const {
        register, 
        handleSubmit, 
        onSubmit, 
        errors, 
        control, 
        setSelectGender, 
        selectGender,
        store
    } = useSignup();

    return (
        <div className={styles.signupPage}>
            <ToastContainer />
            <span className={styles.title}>Регистрация</span>
            <form onSubmit={handleSubmit(onSubmit)}>
                <UIInput 
                    name="first_name"
                    placeholder="Введите ваше имя*"
                    register={register}
                    error={errors.first_name}
                    iconClassName={`uil uil-user ${styles.icon}`}
                    validation={{
                        required: 'Это поле обязательное!'
                    }}
                />
                <UIInput 
                    name="last_name"
                    placeholder="Введите вашу фамилию*"
                    register={register}
                    error={errors.last_name}
                    iconClassName={`uil uil-user ${styles.icon}`}
                    validation={{
                        required: 'Это поле обязательное!'
                    }}
                />
                <UIInput 
                    name="email"
                    placeholder="Введите ваш E-mail*"
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
                <UIInputMask 
                    name="birthday"
                    placeholder="Введите вашу дату рождения: дд.мм.гггг"
                    mask="99.99.9999"
                    control={control}
                    iconClassName={`uil uil-calender ${styles.icon}`}
                />
                <UIInput 
                    name="password"
                    type="password"
                    placeholder="Введите ваш пароль*"
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
                        <input 
                            type="checkbox" 
                            id="logCheck" 
                            {...register('is_lawer')}
                        />
                        <label htmlFor="logCheck" className={styles.text}>Вы являетесь юристом?</label>
                    </div>
                </div>
                
                <div className={classNames(styles.genderText)}>
                    <div className={styles.genderTitle}>Укажите ваш пол*</div>
                    <div className={styles.genderContent}>
                        <div className={styles.checkboxContent}>
                            <input 
                                type="checkbox" 
                                id="male" 
                                onChange={() => setSelectGender('м')}
                                checked={(selectGender === 'ж' || !selectGender) ? false : true}
                            />
                            <label htmlFor="male" className={styles.text}>Мужчина</label>
                        </div>
                        <div className={styles.checkboxContent}>
                            <input 
                                type="checkbox"
                                id="female"
                                onChange={() => setSelectGender('ж')}
                                checked={(selectGender === 'м' || !selectGender) ? false : true}
                            />
                            <label htmlFor="female" className={styles.text}>Женщина</label>
                        </div>
                    </div>
                </div>

                <div className={classNames(styles.inputField, styles.button, {
                    [styles.disabledBtn]: Object.keys(errors).length > 0,
                    [styles.loadingBtn]: store.isLoading
                })}>
                    <button disabled={Object.keys(errors).length > 0||store.isLoading}>{store.registerBtnText}</button>
                </div>
            </form>
            
            <div className={styles.loginSignup}>
                <span className={styles.text}>Уже есть аккаунт?</span>
                <Link to="/" className={`${styles.text} ${styles.signupText}`}>Войдите сейчас</Link>
            </div>
        </div>
    )
}
export default observer(SignUpPage);