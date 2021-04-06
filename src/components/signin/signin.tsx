import "./signin.css"
import { TextField, Button } from "@material-ui/core";
import usestyles from "../signup/makeStyle"

const SignIn = () => {

    const classes = usestyles()
    return (
        <>
            <section className="sign-in-section">
                <div className="sign-in-container">

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
                            className={classes.signInBtn}>
                            Sign In
                        </Button>

                    </form>
                </div>
            </section>



        </>
    )
}

export default SignIn