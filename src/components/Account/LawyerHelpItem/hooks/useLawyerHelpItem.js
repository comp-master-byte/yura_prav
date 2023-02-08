import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../..";

export const useLawyerHelpItem = () => {
    const {lawyer} = useContext(Context);
    const {register, reset, handleSubmit} = useForm();
    const navigate = useNavigate();

    const [isAnswersDisabled, setIsAnswersDisabled] = useState(true);

    const onSubmit = (data) => {
        console.log(data);
    }

    const toggleAnswersDisabled = (e) => {
        e.preventDefault();
        setIsAnswersDisabled(prev => !prev);
    } 

    const onSelectAnswer = (answer) => {
        if(answer[1] === 101) {
            navigate('/lk/generate-question')
            const stack = JSON.parse(localStorage.getItem('nodeIdStack'));
            stack.push(100);
            const toStringStack = JSON.stringify(stack);
            localStorage.setItem('nodeIdStack', toStringStack);
        } else {
            lawyer.getSelectedLawyerHelp(answer[1])
            navigate(`/lk/account/${answer[1]}`)
        }
    }

    const goBack = (e) => {
        e.preventDefault();
        lawyer.getPreviousLawyerHelp(1);
        navigate(-1);
    }

    useEffect(() => {
        if(lawyer.lawyerHelp?.answers?.length) {
            let stack = [];
            lawyer.lawyerHelp?.answers.forEach((item) => {
                stack.push({[item[0]]: item[0]})
            })
            let reassignStack = Object.assign({}, ...stack);
            reset(reassignStack);
        }
    }, [lawyer.lawyerHelp?.answers])

    return {
        register,
        onSelectAnswer,
        lawyer,
        goBack,
        handleSubmit,
        onSubmit,
        toggleAnswersDisabled,
        isAnswersDisabled
    }
}