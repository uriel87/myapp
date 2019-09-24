import React, { useState } from 'react';
import useForm from './useForm'
import validateLogin from './validationForm'

const Form = () => {

    // const initialStateValues = {
    //     email: "",
    //     password: ""
    // }

    const { values, handleSubmit, handleChange, errors } = useForm(submit, validateLogin);

    function submit() {
        console.log("submitted successfully");
    }

    function onChangeInput() {
        console.log("values", values)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} noValidate>
                <label>Email</label>
                <div>
                    <input
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <label>Password</label>
                <div>
                    <input
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>

    )
}


export default Form;