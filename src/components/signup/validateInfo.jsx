export default function validateInfo(value) {
    let error = {};
    if (value.username.length === 0) {
        error.username = "Username Required";
    }

    if (!value.email) {
        error.email = "Email Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.email)) {
        error.email = "Email address is invalid";
    }

    if (!value.password) {
        error.password = "Password is required";
    } else if (value.password.length < 6) {
        error.password = "Password should be 6 characters or more";
    }

    if (!value.confirmpassword) {
        error.confirmpassword = "Password is required";
    } else if (value.confirmpassword !== value.password) {
        error.confirmpassword = "Password do not match";
    }

    return error;
}
