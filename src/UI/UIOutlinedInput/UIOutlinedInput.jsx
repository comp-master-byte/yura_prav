import styles from "./UIOutlinedInput.module.scss";
import classNames from "classnames";

const UIOutlinedInput = ({register, name, placeholder, disabled, validation, error, disabledText}) => {
    return (
        <div className={classNames(styles.outlinedInputWrapper, {
            [styles.errorOutlindeInputWrapper]: error?.message,
        })}>
            <input 
                {...register(name, {
                    ...validation
                })}
                placeholder={placeholder}
                disabled={disabled}
                className={classNames(styles.outlinedInput, {
                    [styles.disabledText]: disabledText
                })}
            />
            {error && <div className={styles.outlinedInputError}>{error.message}</div>}
        </div>
    )
}

export default UIOutlinedInput;