import styles from "./UIOutlinedInput.module.scss";
import classNames from "classnames";

const UIOutlinedInputNotRegister = ({placeholder, disabled, value, onChange, error}) => {
    return (
        <div className={classNames(styles.outlinedInputWrapper, {
            [styles.errorOutlindeInputWrapper]: error,
        })}>
            <input 
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                className={styles.outlinedInput}
            />
            {error && <div className={styles.outlinedInputError}>{error}</div>}
        </div>
    )
}

export default UIOutlinedInputNotRegister;