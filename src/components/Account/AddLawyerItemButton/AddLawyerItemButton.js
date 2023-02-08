import UIOutlinedInputNotRegister from "../../../UI/UIOutlinedInput/UIOutlinedInputNotRegister";
import styles from "./AddLawyerItemButton.module.scss";
import { useAddLawyerItemButton } from "./hooks/useAddLawyerItemButton";

const AddLawyerItemButton = () => {
    const {
        isEdit, 
        toggleEdition, 
        newAnswerValueHandler,
        newAnswerValue,
        onSubmit
    } = useAddLawyerItemButton();
    return (
        <div className={styles.wrapper}>
            {!isEdit && <div onClick={() => toggleEdition()} className={styles.addLawyerBtn}>
                <i className="uil uil-plus"></i>
            </div>}
            {isEdit && 
                <div className={styles.editWrapper}>
                    <UIOutlinedInputNotRegister 
                        placeholder="Добавить ваш ответ..."
                        name="new_answer"
                        value={newAnswerValue}
                        onChange={newAnswerValueHandler}
                    />
                    <div onClick={onSubmit} className={styles.editWrapperSendBtn}>
                        <i className="uil uil-message"></i>
                    </div>
                    <div onClick={toggleEdition} className={styles.cancelWrapperSendBtn}>
                        <i className="uil uil-cancel"></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default AddLawyerItemButton;