
export default function validateLogin(values) {

    let errors = {};

    if (!values.email) {
        errors.email = "email address is requierd";
    } else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        .test(values.email)) {
        errors.email = "Email adress is invalid"
    }

    // } else if (!/\S+@S+\.\S+/.test(values.email)) {

    if (!values.password) {
        errors.password = "password is requierd";
    }
    else if (values.password.length < 10) {
        errors.password = "Password should be more than 6 characters";
    }

    return errors;

}