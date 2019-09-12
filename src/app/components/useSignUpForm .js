import React, { useState } from 'react';

export const useSignUpForm = (callback) => {
    const [inputs, setInputs] = useState({});

    const onSubmit = (event) => {
        if (event) {
            event.preventDefault();
            //callback();
        }
    }

    const onChange = (event) => {
        event.persist();
        setInputs({ inputs: { ...inputs, [event.target.name]: event.target.value } });
    }

    return {
        onSubmit,
        onChange,
        inputs
    };
}

//export default useSignUpForm;