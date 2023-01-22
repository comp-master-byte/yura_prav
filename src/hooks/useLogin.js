import { useForm } from "react-hook-form"

export const useLogin = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return {
        register, 
        handleSubmit,
        errors,
        onSubmit
    }
}