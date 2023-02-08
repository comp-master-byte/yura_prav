import styles from "./UIOutlinedInput.module.scss";

const UIOutlinedInputNotRegister = ({placeholder, disabled, value, onChange}) => {
    return (
        <div className={styles.outlinedInputWrapper}>
            <input 
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                className={styles.outlinedInput}
            />
        </div>
    )
}

export default UIOutlinedInputNotRegister;