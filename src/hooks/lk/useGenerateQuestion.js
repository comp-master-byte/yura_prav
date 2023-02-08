import { useContext } from "react";
import { useState } from "react";
import {useForm} from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import {Context} from "../../index"

export const useGenerateQuestion = () => {
    const {lawyer} = useContext(Context);
    const location = useLocation();

    const {register, formState: {errors}, handleSubmit, reset} = useForm();

    const navigate = useNavigate();

    const [selectQuestionOrAnswer, setSelectQuestionOrAnswer] = useState('a');
    const [answersList, setAnswersList] = useState([{id: 1, name: 'answer'}]);

    const returnToPreviousQuestion = () => {
        lawyer.getPreviousLawyerHelp(1);
        navigate(-1);
    }

    const addAnswerToTheList = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let nextElement = answersList.length + 1;
        const newAnswer = {
            id: nextElement,
            name: `answer_${nextElement}`
        }
        setAnswersList([...answersList, newAnswer]);
    }

    const deleteSelectedAnswer = (e, id) => {
        e.stopPropagation();
        e.preventDefault();
        setAnswersList(answersList.filter(answer => answer.id !== id));
    }

    const onSubmit = (data) => {
        const answers = [];
        answersList.forEach((item) => {
            answers.push(item.name);
        })

        const submitData = {
            message: data.message,
            q_or_a: selectQuestionOrAnswer,
            answers: selectQuestionOrAnswer === 'q' ? answers : '',
            previous_answer: location.state
        }
    
        lawyer.createLawyerQuestion(2, submitData);
        // очистка полей после отправки сообщения
        setSelectQuestionOrAnswer([]);
        setSelectQuestionOrAnswer('a');
        reset({message: ''});
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