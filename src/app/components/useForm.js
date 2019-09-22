import { useState } from 'react';

const useForm = (callback) => {

    // const initialStateValues = {
    //     email: "",
    //     password: ""
    // }

    const [values, SetValues] = useState({})
    const [errors, SetErrors] = useState({})


    const handleChange = (event) => {
        const { name, value } = event.target
        SetValues({
            ...values,
            [name]: value
        });
        console.log("handleChange")
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        callback();
    }

    return {
        handleChange,
        handleSubmit,
        values
    };

}

export default useForm;