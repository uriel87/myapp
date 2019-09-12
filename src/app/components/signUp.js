import React from 'react';
import { useSignUpForm } from "../components/useSignUpForm "

const Signup = () => {

    const signup = () => {
        alert(
            "User Created" + JSON.stringify(inputs)
        );
        //console.log("user", JSON.stringify(inputs))
    }

    const onChangeInput = () => {
        console.log("user", inputs)
    }

    const { inputs, onChange, onSubmit } = useSignUpForm({ firstName: '', lastName: '', email: '', password1: '', password2: '' }, onChangeInput, signup);

    return (
        <form onSubmit={signup}>
            <div>
                <label>First Name</label>
                <input type="text" name="firstName" onChange={onChangeInput} value={inputs.firstName} />
                {/* <label>Last Name</label>
                <input type="text" name="lastName" onChange={onChange} value={inputs.lastName} required /> */}
            </div>
            {/* <div>
                <label>Email Address</label>
                <input type="email" name="email" onChange={onChange} value={inputs.email} required />
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password1" onChange={onChange} value={inputs.password1} />
            </div>
            <div>
                <label>Re-enter Password</label>
                <input type="password" name="password2" onChange={onChange} value={inputs.password2} />
            </div> */}
            <button type="submit">Sign Up</button>
            <p></p>
        </form>
    )
}
export default Signup;