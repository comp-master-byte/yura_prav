import React from "react";
import { useGenerateQuestion } from "../../../hooks/lk/useGenerateQuestion";
import styles from "./GenerateQuestionPage.module.scss";
import UIInput from "../../../UI/UIInput";
import UIButton from "../../../UI/UIButton/UIButton"
import classNames from "classnames";

const GenerateQuestionPage = () => {
    const {
        register, 
        handleSubmit, 
        errors, 
        onSubmit, 
        selectQuestionOrAnswer, 
        setSelectQuestionOrAnswer, 
        answersList,
        addAnswerToTheList,
        deleteSelectedAnswer
    } = useGenerateQuestion();

    return (
        <div className={styles.generateQuestionWrapper}>
            <span className={styles.title}>Напишите ваш вопрос/ответ</span>
            <form onSubmit={handleSubmit(onSubmit)}>
                <UIInput 
                    name="message"
                    placeholder="Напишите ваш текст"
                    register={register}
                    error={errors.email}
                    iconClassName={`uil uil-question-circle`}
                    validation={{
                        required: 'Это поле обязательное',
                    }}
                />
                <div className={classNames(styles.genderText, {
                })}>
                    <div className={styles.genderTitle}>К какой категории относится ваше сообщение</div>
                    <div className={styles.genderContent}>
                        <div className={styles.checkboxContent}>
                            <input 
                                type="checkbox" 
                                id="question" 
                                onChange={() => setSelectQuestionOrAnswer('q')}
                                checked={(selectQuestionOrAnswer === 'a' || !selectQuestionOrAnswer) ? false : true}
                            />
                            <label htmlFor="question" className={styles.text}>Вопрос</label>
                        </div>
                        <div className={styles.checkboxContent}>
                            <input 
                                type="checkbox"
                                id="answer"
                                onChange={() => setSelectQuestionOrAnswer('a')}
                                checked={(selectQuestionOrAnswer === 'q' || !selectQuestionOrAnswer) ? false : true}
                            />
                            <label htmlFor="answer" className={styles.text}>Ответ</label>
                        </div>
                    </div>
                </div>
                
                {selectQuestionOrAnswer === "q" && 
                    <div className={styles.generateAnswerList}>
                        {answersList?.map(item => 
                            <UIInput 
                                key={item.id}
                                name={item.name}
                                togglePasswordVisibility={() => deleteSelectedAnswer(item.id)}
                                isPasswordVisible={true}
                                placeholder="Напишите ответ на вопрос"
                                register={register}
                                error={errors[item.name]}
                                iconClassName={`uil uil-text`}
                                extraIconClassName={answersList.length > 1 && `uil uil-trash-alt`}
                                validation={{
                                    required: 'Это поле обязательное',
                                }}
                            />
                        )}
                        <UIButton customClassName={styles.generateAnswerList__btn} onClick={(e) => addAnswerToTheList(e)}>Добавить ответ</UIButton>
                    </div>
                }
            </form>
        </div>
    )
}

export default GenerateQuestionPage