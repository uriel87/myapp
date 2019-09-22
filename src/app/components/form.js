import React, { useState } from 'react';
import useForm from './useForm'

const Form = () => {

    const { values, handleSubmit, handleChange } = useForm(submit);

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
                    {/* error message */}
                </div>
                <label>Password</label>
                <div>
                    <input
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {/* error message */}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>

    )
}


export default Form;