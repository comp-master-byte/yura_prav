import {useForm} from "react-hook-form";

export const useGenerateQuestion = () => {
    const {register, formState: {errors}} = useForm();

    return {
        register,
        errors
    }
}