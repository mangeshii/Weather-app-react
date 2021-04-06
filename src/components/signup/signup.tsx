import "./signup.css";
import UseForm from "./UseForm"
import validateInfo from "./validateInfo";
import { TextField, Button } from "@material-ui/core";
import usestyles from "./makeStyle"

const SignUp = () => {
    const { handleChange, values, handleSubmit, errors } = UseForm(validateInfo);

    const classes = usestyles();

    return (
        <section className="main-section">
            <div className="container">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-inputs">
                        <label htmlFor="firstName">
                            <TextField
                                type="text"
                                name="firstName"
                                className={classes.formInput}
                                placeholder="First Name"
                                autoComplete="off"
                                value={values.firstName}
                                onChange={handleChange}
                                variant="outlined"
                            />
                            {errors.firstName && (
                                <div className={classes.errorDiv}>
                                    <p className={classes.errorMsg}>
                                        {errors.firstName}
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



