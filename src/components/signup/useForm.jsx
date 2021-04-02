import { useState, useEffect } from "react";

const useForm = () => {
    const [value, setValue] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
    });

    const [error, setError] = useState({});

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return {
        handleChange,
        value,
        handleSubmit,
    };
};

export default useForm;
