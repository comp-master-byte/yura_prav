import styles from "./UIOutlinedInput.module.scss";
import classNames from "classnames";

const UIOutlinedInput = ({register, name, placeholder, disabled, validation, error}) => {
    return (
        <div className={classNames(styles.outlinedInputWrapper, {
            [styles.errorOutlindeInputWrapper]: error?.message
        })}>
            <input 
                {...register(name, {
                    ...validation
                })}
                placeholder={placeholder}
                disabled={disabled}
                className={styles.outlinedInput}
            />
            {error && <div className={styles.outlinedInputError}>{error.message}</div>}
        </div>
    )
}

export default UIOutlinedInput;