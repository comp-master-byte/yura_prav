import { useState, useContext } from "react";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {Context} from "../../index"


export const useSignup = () => {
    const {register, handleSubmit, formState: {errors}, control} = useForm({mode: "all"});

    const navigate = useNavigate();

    const {store} = useContext(Context);

    const [selectGender, setSelectGender] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

    const toLoginPage = () => {
        setTimeout(() => {
            navigate('/');  
            store.setIsLoading(false);
            store.setRegisterBtnText('Зарегистрироваться'); 
        }, 2000);
    } 

    const onSubmit = async (data) => {
        const dataToSubmit = {
            ...data, 
            gender: selectGender,
            username: 'user'
        }
        await store.registration(dataToSubmit, toLoginPage);
    }

    return {
        register, 
        handleSubmit,
        onSubmit,
        errors,
        control,
        setSelectGender,
        selectGender,
        store,
        togglePasswordVisibility,
        isPasswordVisible,
    }
}