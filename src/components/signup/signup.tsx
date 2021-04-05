import "./signup.css";
import UseForm from "./UseForm"
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
    const { handleChange, values, handleSubmit, errors } = UseForm(validateInfo);

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
                                value={values.username}
                                onChange={handleChange}
                                variant="outlined"
                            />
                            {errors.username && (
                                <div className={classes.errorDiv}>
                                    <p className={classes.errorMsg}>
                                        {errors.username}
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
                                value={values.email}
                                onChange={handleChange}
                                variant="outlined"
                            />
                            {errors.email && (
                                <div className={classes.errorDiv}>
                                    <p className={classes.errorMsg}>
                                        {errors.email}
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
                                value={values.password}
                                onChange={handleChange}
                                variant="outlined"
                            />
                            {errors.password && (
                                <div className={classes.errorDiv}>
                                    <p className={classes.errorMsg}>
                                        {errors.password}
                                    </p>
                                </div>
                            )}
                        </label>
                    </div>

                    <div className="form-inputs">
                        <label htmlFor="confirmPassword">
                            <TextField
                                type="password"
                                name="confirmPassword"
                                className={classes.formInput}
                                placeholder="Confirm Password"
                                autoComplete="off"
                                value={values.confirmPassword}
                                onChange={handleChange}
                                variant="outlined"
                            />
                            {errors.confirmPassword && (
                                <div className={classes.errorDiv}>
                                    <p className={classes.errorMsg}>
                                        {errors.confirmPassword}
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
                        Sign Up
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default SignUp;



