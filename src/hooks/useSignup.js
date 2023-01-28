import { useEffect } from "react";
import { useState, useContext } from "react";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {Context} from "../index"

export const useSignup = () => {
    const {register, handleSubmit, formState: {errors}, control} = useForm({mode: 'onChange'});

    const navigate = useNavigate();

    const {store} = useContext(Context);

    const [selectGender, setSelectGender] = useState('');

    const onSubmit = async (data) => {
        const dataToSubmit = {
            ...data, 
            gender: selectGender,
            username: 'user'
        }
        await store.registration(dataToSubmit);
    }

    useEffect(() => { // После успешной регистрации переносим пользователя на главную страницу
        if(Object.keys(store.user).length) {
            setTimeout(() => navigate('/'), 2000);
        }
    }, [store.user])

    return {
        register, 
        handleSubmit,
        onSubmit,
        errors,
        control,
        setSelectGender,
        selectGender,
        store
    }
}