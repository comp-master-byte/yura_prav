import { useContext } from "react";
import { useState } from "react";
import {useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {Context} from "../../index"

export const useGenerateQuestion = () => {
    const {lawyer} = useContext(Context);

    const {register, formState: {errors}, handleSubmit} = useForm();

    const navigate = useNavigate();
    const nodeIdStack = JSON.parse(localStorage.getItem('nodeIdStack'))

    const [selectQuestionOrAnswer, setSelectQuestionOrAnswer] = useState('');
    const [answersList, setAnswersList] = useState([
        {id: 1, name: 'answer'}
    ])

    const returnToPreviousQuestion = () => {
        lawyer.getPreviousLawyerHelp(1);
        navigate(-1)
    }

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
        console.log(answersList);
        lawyer.createLawyerQuestion();
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
        deleteSelectedAnswer,
        returnToPreviousQuestion
    }
}