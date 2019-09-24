import { useState } from 'react';

const useForm = (callback, validateLogin) => {

    const initialStateValues = {
        email: "",
        password: ""
    }

    const [values, setValues] = useState(initialStateValues)
    const [errors, setErrors] = useState({})


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
        callback();
    }

    return {
        handleChange,
        handleSubmit,
        values,
        errors
    };

}

export default useForm;