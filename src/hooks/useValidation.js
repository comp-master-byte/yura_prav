import { useEffect, useState } from "react"

export const useValidation = (value, validations) => {
    const [isEmpty, setIsEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [isInputValid, setIsInputValid] = useState(false);

    const isEmptyHandler = (value) => {
        if(value) {
            setIsEmpty(false);
            setErrorMessage('');
        } else if(!value) {
            setIsEmpty(true);
            setErrorMessage('Поле не может быть пустым');
        }
    }

    const minLengthHandler = (value, validation) => {
        if(value.length < validations[validation] && value.length > 0) {
            setErrorMessage(`Значение не может быть короче ${validations.minLength}`) 
            setMinLengthError(true)
        } else {
            setErrorMessage('');
            setMinLengthError(false);
        }
    }

    const maxLengthHandler = (value, validation) => {
        if(value.length > validations[validation]) {
            setErrorMessage(`Значение не может быть короче ${validations.maxLength}`) 
            setMaxLengthError(true)
        } else {
            setErrorMessage('');
            setMaxLengthError(false);
        }
    }

    useEffect(() => {
        for(const validation in validations) {
            switch(validation) {
                case 'minLength':
                    minLengthHandler(value, validation);
                    break;
                case 'isEmpty': 
                    isEmptyHandler(value);
                    break;
                case 'maxLength':
                    maxLengthHandler(value, validation);
                    break;
                case 'isEmail':
                    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    emailRegex.test(String((value)).toLowerCase()) ? setEmailError(false) : setEmailError(true);
                    break;
                default:
                    break;
            }
        }
    }, [value])

    useEffect(() => {
        if(isEmpty||minLengthError||maxLengthError||emailError) {
            setIsInputValid(false);
        } else {
            setIsInputValid(true);
        }
    }, [isEmpty, minLengthError, maxLengthError, emailError])

    return {
        isEmpty,
        minLengthError,
        maxLengthError,
        emailError,
        errorMessage,
        isInputValid
    }
}