import { useContext } from "react";
import { useForm } from "react-hook-form"
import { Context } from "../index";

export const useLogin = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {store} = useContext(Context);

    const onSubmit = (data) => {
        store.login(data);
    }

    return {
        register, 
        handleSubmit,
        errors,
        onSubmit,
        store
    }
}