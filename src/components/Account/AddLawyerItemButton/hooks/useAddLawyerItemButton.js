import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import LawyerService from "../../../../services/LawyerService";
import {Context} from "../../../../index"

export const useAddLawyerItemButton = () => {
    const {id} = useParams();

    const {lawyer} = useContext(Context);
    const [newAnswerValue, setNewAnswerValue] = useState('');
    const [answerValueError, setAnswerValueError] = useState('');
    const [isEdit, setIsEdit] = useState(false);

    const newAnswerValueHandler = (e) => {
        const message = e.target.value;
        setNewAnswerValue(message);
        if(message) {
            setAnswerValueError('')
        } else {
            setAnswerValueError('Поле не может быть пустым!');
        }
    };

    const toggleEdition = () => setIsEdit(prev => !prev);

    const onSubmit = () => {
        if(!newAnswerValue) {
            setAnswerValueError('Поле не может быть пустым!');
        } else {
            LawyerService.addNewLawyerAnswer(id, {new_answer: newAnswerValue});
            const modifiedData = [newAnswerValue, '0000'];
            lawyer.setLawyerHelpAnswers(modifiedData);
            setIsEdit(false);
        }
    }

    return {
        isEdit,
        toggleEdition,
        onSubmit,
        newAnswerValueHandler,
        newAnswerValue,
        answerValueError
    }
}