
import { TextField, Button } from "@material-ui/core";
import signInStyles from "./signin_style"

const SignIn = () => {

    const classes = signInStyles()
    return (
        <>
            <section className={classes.signInSection}>
                <div className={classes.signInContainer}>
                    <h1 className={classes.signInHeader}>Sign In</h1>
                    <form className="sign-in-form" >
                        <div className="sign-in-form-input">
                            <label htmlFor="username">
                                <TextField
                                    placeholder="Username"
                                    variant="outlined"
                                    className={classes.formInput}
                                />
                            </label>
                        </div>


                        <div className="sign-in-form-input">
                            <label htmlFor="password">
                                <TextField
                                    placeholder="Password"
                                    variant="outlined"
                                    className={classes.formInput}
                                />
                            </label>
                        </div>

                        <Button type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.signInBtn}
                        >
                            Sign In
                        </Button>

                    </form>
                </div>
            </section>



        </>
    )
}

export default SignIn