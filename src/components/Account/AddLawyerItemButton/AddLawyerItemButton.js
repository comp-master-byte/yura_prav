import UIOutlinedInput from "../../../UI/UIOutlinedInput/UIOutlinedInput";
import styles from "./AddLawyerItemButton.module.scss";
import { useAddLawyerItemButton } from "./hooks/useAddLawyerItemButton";

const AddLawyerItemButton = () => {
    const {register, isEdit, toggleEdition, handleSubmit, onSubmit, errors} = useAddLawyerItemButton();
    return (
        <div className={styles.wrapper}>
            {!isEdit && <div onClick={() => toggleEdition()} className={styles.addLawyerBtn}>
                <i className="uil uil-plus"></i>
            </div>}
            {isEdit && 
                <div onSubmit={handleSubmit(onSubmit)} className={styles.editWrapper}>
                    <UIOutlinedInput 
                        name="new_answer"
                        register={register}
                        error={errors.new_answer}
                        validation={{
                            required: 'Это поле не может быть пустым!'
                        }}
                        placeholder="Добавить ваш ответ..."
                    />
                    <button type="submit" className={styles.editWrapperSendBtn}>
                        <i className="uil uil-message"></i>
                    </button>
                    <div onClick={toggleEdition} className={styles.cancelWrapperSendBtn}>
                        <i className="uil uil-cancel"></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default AddLawyerItemButton;