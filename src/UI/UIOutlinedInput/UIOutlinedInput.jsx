import styles from "./UIOutlinedInput.module.scss";
import classNames from "classnames";
import { UilTimesCircle } from "@iconscout/react-unicons";

const UIOutlinedInput = ({
  register,
  name,
  placeholder,
  disabled,
  validation,
  error,
  disabledText,
  inputClassName,
  inputWrapperClassName,
  isAccessToDelete,
  onDelete,
}) => {
  return (
    <div
      className={classNames(
        styles.outlinedInputWrapper,
        inputWrapperClassName,
        {
          [styles.errorOutlindeInputWrapper]: error?.message,
        }
      )}
    >
      <textarea
        {...register(name, {
          ...validation,
        })}
        placeholder={placeholder}
        disabled={disabled}
        className={classNames(styles.outlinedInput, inputClassName, {
          [styles.disabledText]: disabledText,
        })}
      />
      {error && (
        <div className={styles.outlinedInputError}>{error.message}</div>
      )}
      {isAccessToDelete && (
        <div onClick={() => onDelete(name)} className={styles.deleteIcon}>
          <UilTimesCircle />
        </div>
      )}
    </div>
  );
};

export default UIOutlinedInput;
