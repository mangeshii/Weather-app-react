import { useState } from "react";

interface ErrorType {
    firstName: string;
    email: string;
    password: string;
    confirmPassword: string;
}
const UseForm = (ValidateInfo: any) => {
    const [values, setValues] = useState({
        firstName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState<ErrorType>({
        firstName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    console.log(errors);

    const handleChange = (e: any) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e: any) => {
        e.preventDefault();
        setErrors(ValidateInfo(values));
    };

    return {
        handleChange,
        values,
        handleSubmit,
        errors,
    };
};

export default UseForm;
