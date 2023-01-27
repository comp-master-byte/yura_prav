import { useState, useContext, useEffect } from "react";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {Context} from "../index"

export const useSignup = () => {
    const {register, handleSubmit, formState: {errors}, control} = useForm({mode: 'all'});

    const navigate = useNavigate();

    const {store} = useContext(Context);

    const [selectGender, setSelectGender] = useState('');

    const onSubmit = async (data) => {
        const dataToSubmit = {
            ...data, 
            gender: selectGender,
            username: 'user'
        }
        await store.registration(dataToSubmit, setTimeout(() => navigate('/login'), 2000));
    }

    useEffect(() => {
        if(store.isAuth) {
            navigate('/login');
        }
    }, [store.isAuth])

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