import { useState } from "react";

const useForm = (validateInfo) => {
    const [value, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
    });

    const [error, setError] = useState({});

    const handleChange = (e) => {
        setValues({ ...value, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(validateInfo(value));
    };

    return {
        handleChange,
        value,
        handleSubmit,
        error,
    };
};

export default useForm;
