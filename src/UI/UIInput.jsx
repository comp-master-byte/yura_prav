import React from 'react';
import styles from "./UIInput.module.scss";
import classNames from "classnames";

const UIInput = ({register, name, type, placeholder, validation, error, iconClassName, extraIconClassName, togglePasswordVisibility, isPasswordVisible}) => {
    return (
        <div className={classNames(styles.inputField, {
            [styles.errorInputField]: error,
            [styles.validInputField]: !error
        })}>
            <input 
                type={type||"text"}
                placeholder={placeholder}
                {...register(name, validation)}
            />
            <i className={iconClassName}></i>
            {(type === "password"||isPasswordVisible) && 
                <i 
                    onClick={togglePasswordVisibility}
                    className={classNames(extraIconClassName, {
                        [styles.showHidePw]: (type === "password"|| isPasswordVisible)
                    })}
                >
                </i>
            }
            
            {error && <div className={styles.errorMessage}>{error.message}</div>}
        </div>
    )
}

export default UIInput;