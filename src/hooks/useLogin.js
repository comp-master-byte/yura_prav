import { useNavigate } from "react-router-dom";
import { useInput } from "./useInput";

export const useLogin = () => {
    const navigate = useNavigate();

    const email = useInput('', {isEmpty: true, isEmail: true, minLength: 3});
    const password = useInput('', {isEmpty: true, minLength: 5, maxLength: 8});

    const emailErrors = (email.isDirty && email.isEmpty) || (email.isDirty && email.minLengthError) || (email.isDirty && email.emailError);
    const passwordErrors = (password.isDirty && password.isEmpty) || (password.isDirty && password.minLengthError) || (password.isDirty && password.maxLengthError);

    const toSignUpPage = () => navigate('/signup');

    return {
        email,
        password,
        emailErrors,
        passwordErrors,
        toSignUpPage
    }
}