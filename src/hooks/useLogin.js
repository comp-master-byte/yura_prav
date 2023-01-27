import { useContext } from "react";
import { useForm } from "react-hook-form"
import { Context } from "../index";
import {useNavigate} from "react-router-dom";

export const useLogin = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {store} = useContext(Context);
    const navigate = useNavigate();

    const toAccountPage = () => navigate('/lk/account');

    const onSubmit = (data) => {
        store.login(data, toAccountPage);
    }

    return {
        register, 
        handleSubmit,
        errors,
        onSubmit,
        store,
        toAccountPage
    }
}