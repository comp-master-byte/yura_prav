import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import LawyerService from "../../../../services/LawyerService";
import {Context} from "../../../../index"

export const useAddLawyerItemButton = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const {lawyer} = useContext(Context)

    const {id} = useParams();

    const [isEdit, setIsEdit] = useState(false);

    const toggleEdition = () => setIsEdit(prev => !prev);

    const onSubmit = (data) => {
        LawyerService.addNewLawyerAnswer(id, data);
        const modifiedData = [data.new_answer, '0000'];
        lawyer.setLawyerHelpAnswers(modifiedData);
        setIsEdit(false);
        reset({});
    }

    return {
        register,
        isEdit,
        toggleEdition,
        handleSubmit,
        onSubmit,
        errors
    }
}