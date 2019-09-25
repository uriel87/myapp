import { useState, useEffect } from 'react';

const useForm = (callback, validateLogin) => {

    const initialStateValues = {
        email: "",
        password: ""
    }

    const [values, setValues] = useState(initialStateValues)
    const [errors, setErrors] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false);


    const handleChange = (event) => {
        const { name, value } = event.target
        setValues({
            ...values,
            [name]: value
        });
        console.log("handleChange", values)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validateLogin(values))
        setIsSubmitted(true)
    }

    useEffect(() => {
        // checek if no error
        if (Object.keys(errors).length === 0 && isSubmitted) {
            callback();
        }
    }, [errors])

    return {
        handleChange,
        handleSubmit,
        values,
        errors
    };

}

export default useForm;