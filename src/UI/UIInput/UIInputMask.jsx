import React from "react";
import styles from "./UIInput.module.scss";
import classNames from "classnames";
import { Controller } from "react-hook-form";
import InputMask from "react-input-mask";

const UIInputMask = ({control, name, mask, placeholder, validation, iconClassName}) => {
    return (
        <Controller 
            name={name}
            control={control}
            rules={validation}
            render={({field: {value, onChange}, fieldState: {error}}) => 
                <div className={classNames(styles.inputField, {
                    [styles.errorInputField]: error,
                    [styles.validInputField]: !error
                })}>
                    <InputMask 
                        mask={mask}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                    />
                    <i className={iconClassName}></i>
                    {error && <div className={styles.errorMessage}>{error}</div>}
                </div>
            }
        />
    )
}

export default UIInputMask;