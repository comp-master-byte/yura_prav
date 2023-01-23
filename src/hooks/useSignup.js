import axios from "axios";
import { useState } from "react";
import {useForm} from "react-hook-form";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom";

export const useSignup = () => {
    const {register, handleSubmit, formState: {errors}, control} = useForm();
    const navigate = useNavigate();

    const [selectGender, setSelectGender] = useState('');
    const [registerBtnText, setRegisterBtnText] = useState('Зарегестрироваться')
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data) => {
        const dataToSubmit = {
            ...data, 
            gender: selectGender,
            username: 'user'
        }
        try {
            setIsLoading(true); // начинается загрузка
            setRegisterBtnText('Загрузка...');
            await axios.post('http://ane4ka.site/api/auth/users/', dataToSubmit);
            toast('Вы успешно зарегестрированны!', {
                type: 'success',
                position: 'top-right',
                pauseOnHover: true,
                autoClose: 2000
            })
            setRegisterBtnText('Переносим на вход...');
            setTimeout(() => navigate('/login'), 2000);
        } catch(error) {
            toast(`Что-то пошло не так...`, {
                type: 'error',
                position: 'top-right',
                pauseOnHover: true,
                autoClose: 5000
            })
            setRegisterBtnText('Зарегестрироваться');
            setIsLoading(false);
        } 
    }


    return {
        register, 
        handleSubmit,
        onSubmit,
        errors,
        control,
        setSelectGender,
        selectGender,
        isLoading,
        registerBtnText
    }
}