import { useState } from "react";
import {useForm} from "react-hook-form";

export const useSignup = () => {
    const {register, handleSubmit, formState: {errors}, control} = useForm();

    const [selectGender, setSelectGender] = useState('');

    const onSubmit = (data) => {
        const dataToSubmit = {
            ...data, 
            gender: selectGender
        }
        console.log(dataToSubmit)
    }

    return {
        register, 
        handleSubmit,
        onSubmit,
        errors,
        control,
        setSelectGender,
        selectGender
    }
}