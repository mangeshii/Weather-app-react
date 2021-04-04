import "./signup.css";
import useForm from "./useForm";
import validateInfo from "./validateInfo";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const usestyles = makeStyles({
    formInput: {
        width: "80%",
        margin: "1% 0%",
    },
    signInBtn: {
        width: "80%",
        margin: "2% 0%",
    },
    errorDiv: {
        display: "flex",
        justifyContent: "center",
    },
    errorMsg: {
        width: "80%",
        margin: "0% 0%",
        textAlign: "start",
        fontSize: "17px",
    },
});

const SignUp = () => {
    const { handleChange, value, handleSubmit, error } = useForm(validateInfo);

    const classes = usestyles();

    return (
        <section className="main-section">
            <div className="container">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-inputs">
                        <label htmlFor="username">
                            <TextField
                                type="text"
                                name="username"
                                className={classes.formInput}
                                placeholder="First Name"
                                autoComplete="off"
                                value={value.username}
                                onChange={handleChange}
                                variant="outlined"
                            />
                            {error.username && (
                                <div className={classes.errorDiv}>
                                    <p className={classes.errorMsg}>
                                        {error.username}
                                    </p>
                                </div>
                            )}
                        </label>
                    </div>

                    <div className="form-inputs">
                        <label htmlFor="email">
                            <TextField
                                type="email"
                                name="email"
                                className={classes.formInput}
                                placeholder="Email"
                                autoComplete="off"
                                value={value.email}
                                onChange={handleChange}
                                variant="outlined"
                            />
                            {error.email && (
                                <div className={classes.errorDiv}>
                                    <p className={classes.errorMsg}>
                                        {error.email}
                                    </p>
                                </div>
                            )}
                        </label>
                    </div>

                    <div className="form-inputs">
                        <label htmlFor="password">
                            <TextField
                                type="password"
                                name="password"
                                className={classes.formInput}
                                placeholder="Password"
                                autoComplete="off"
                                value={value.password}
                                onChange={handleChange}
                                variant="outlined"
                            />
                             {error.password && (
                                <div className={classes.errorDiv}>
                                    <p className={classes.errorMsg}>
                                        {error.password}
                                    </p>
                                </div>
                            )}
                        </label>
                    </div>

                    <div className="form-inputs">
                        <label htmlFor="confirmpassword">
                            <TextField
                                type="password"
                                name="confirmpassword"
                                className={classes.formInput}
                                placeholder="Confirm Password"
                                autoComplete="off"
                                value={value.confirmpassword}
                                onChange={handleChange}
                                variant="outlined"
                            />
                            {error.confirmpassword && (
                                <div className={classes.errorDiv}>
                                    <p className={classes.errorMsg}>
                                        {error.confirmpassword}
                                    </p>
                                </div>
                            )}
                        </label>
                    </div>

                    <Button
                        type="submit"
                        variant="contained"
                        className={classes.signInBtn}
                    >
                        Sign In
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default SignUp;
