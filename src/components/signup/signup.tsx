import UseForm from "./UseForm"
import validateInfo from "./validateInfo";
import { TextField, Button ,Typography} from "@material-ui/core";
import signUpStyle from "./signup_styles"


const SignUp = () => {
    const { handleChange, values, handleSubmit, errors } = UseForm(validateInfo);

    const classes = signUpStyle();

    return (
        <section className={classes.SignUpSection}>
            <div className={classes.SignUpContainer}>
                <h1 className={classes.signUpHeader}>Sign Up</h1>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <div className={classes.formInputs}>
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

                    <div className={classes.formInputs}>
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

                    <div className={classes.formInputs}>
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

                    <div className={classes.formInputs}>
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
                        color="primary"
                    >
                        Sign Up
                    </Button>

                    <div>
                        <Typography variant="body2" className={classes.signInLink}>
                            Already have an account? <a href="../signin">SignIn</a>
                        </Typography>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default SignUp;



