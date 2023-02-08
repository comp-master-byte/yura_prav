import React from 'react';
import styles from "./LawyerHelpItem.module.scss";
import { observer } from "mobx-react-lite";
import classNames from 'classnames';
import UIButton from '../../../UI/UIButton/UIButton';
import AddLawyerItemButton from '../AddLawyerItemButton/AddLawyerItemButton';
import UIOutlinedInput from '../../../UI/UIOutlinedInput/UIOutlinedInput';
import { useLawyerHelpItem } from './hooks/useLawyerHelpItem';

const LawyerHelpItem = () => {
    const {
        register, 
        lawyer, 
        onSelectAnswer, 
        goBack, 
        handleSubmit, 
        onSubmit, 
        isAnswersDisabled, 
        toggleAnswersDisabled
    } = useLawyerHelpItem();

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.lawyerHelpItem}>
            <header className={classNames(styles.lawyerHelpHeader, {
                [styles.withoutMarginBottom]: !lawyer.lawyerHelp?.answers?.length
            })}>
                <UIOutlinedInput 
                    name="title"
                    register={register}
                    disabled={isAnswersDisabled}
                    disabledText
                />
            </header>
            <main className={styles.lawyerHelperAnswers}>
                {lawyer.lawyerHelp?.answers?.map((answer, index) =>
                    parseInt(answer[0]) === 1000 ? 
                        <React.Fragment key={index}></React.Fragment>
                    :
                        <div onClick={() => isAnswersDisabled && onSelectAnswer(answer)} key={index} className={styles.lawyerHelperAnswer}>
                            <UIOutlinedInput 
                                name={answer[0]}
                                register={register}
                                disabled={isAnswersDisabled}
                            />
                        </div>
                )}
                <AddLawyerItemButton />
            </main>
            {lawyer.lawyerHelp?.node_id !== "1" && 
                <UIButton customClassName={styles.marginRigth} onClick={(e) => goBack(e)}>
                    Назад
                </UIButton>
            }
            <UIButton customClassName={styles.marginRigth} onClick={(e) => toggleAnswersDisabled(e)}>{isAnswersDisabled ? 'Редактировать' : 'Отменить редактирование'}</UIButton>
            {!isAnswersDisabled && <UIButton type="submit">Сохранить изменения</UIButton>}
        </form>
    )
}

export default observer(LawyerHelpItem);