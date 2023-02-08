import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import LawyerService from "../../../../services/LawyerService";
import {Context} from "../../../../index"

export const useAddLawyerItemButton = () => {
    const {lawyer} = useContext(Context);
    const [newAnswerValue, setNewAnswerValue] = useState('');

    const newAnswerValueHandler = (e) => setNewAnswerValue(e.target.value);

    const {id} = useParams();

    const [isEdit, setIsEdit] = useState(false);

    const toggleEdition = () => setIsEdit(prev => !prev);

    const onSubmit = () => {
        LawyerService.addNewLawyerAnswer(id, {new_answer: newAnswerValue});
        const modifiedData = [newAnswerValue, '0000'];
        lawyer.setLawyerHelpAnswers(modifiedData);
        setIsEdit(false);
    }

    return {
        isEdit,
        toggleEdition,
        onSubmit,
        newAnswerValueHandler,
        newAnswerValue
    }
}