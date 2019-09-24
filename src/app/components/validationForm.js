
export default function validateLogin(values) {

    let errors = {};

    if (!values.email) {
        errors.email = "email address is requierd";
    } else if (!/\S+@S+\.\S+/.test(values.email)) {
        errors.email = "Email adress is invalid"
    }

    if (!values.password) {
        errors.password = "password address is requierd";
    }
    else if (values.password.length < 10) {
        errors.password = "Password should be more than 6 characters";
    }

    return errors;

}