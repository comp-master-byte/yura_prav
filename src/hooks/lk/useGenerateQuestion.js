import { useState } from "react";
import {useForm} from "react-hook-form";

export const useGenerateQuestion = () => {
    const {register, formState: {errors}, handleSubmit} = useForm();

    const [selectQuestionOrAnswer, setSelectQuestionOrAnswer] = useState('');
    const [answersList, setAnswersList] = useState([
        {id: 1, name: 'answer'}
    ])

    const addAnswerToTheList = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let nextElement = answersList.length + 1;
        const newAnswer = {
            id: nextElement,
            name: `answer_${nextElement}`
        }

        setAnswersList([...answersList, newAnswer])
    }

    const deleteSelectedAnswer = (e, id) => {
        e.stopPropagation();
        e.preventDefault();
        setAnswersList(answersList.filter(answer => answer.id !== id));
    }

    const onSubmit = (data) => {
        console.log(data);
    }

    return {
        register,
        errors,
        handleSubmit,
        onSubmit,
        selectQuestionOrAnswer, 
        setSelectQuestionOrAnswer,
        answersList,
        addAnswerToTheList,
        deleteSelectedAnswer   
    }
}