import { SetStateAction } from "react";
import { useState } from "react";

interface IState {
    username: string;
    email: string;
    password: string;
    confirmpassword: string;
}

const useForm = (validateInfo: (value: IState) => SetStateAction<{}>)  => {
    const [value, setValues] = useState<IState>({
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
    });

    const [error, setError] = useState({});

    const handleChange = (e: any) => {
        setValues({ ...value, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: any) => {
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
