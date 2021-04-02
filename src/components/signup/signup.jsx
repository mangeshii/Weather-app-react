import "./signup.css";
import useForm from "./useForm";

const SignUp = () => {
    const { handleChange, value, handleSubmit } = useForm();

    return (
        <section className="main-section">
            <div className="container">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-inputs">
                        <label htmlFor="username">
                            <input
                                type="text"
                                name="username"
                                className="form-input"
                                placeholder="First Name"
                                autoComplete="off"
                                value={value.username}
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <div className="form-inputs">
                        <label htmlFor="email">
                            <input
                                type="email"
                                name="email"
                                className="form-input"
                                placeholder="Email"
                                autoComplete="off"
                                value={value.email}
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <div className="form-inputs">
                        <label htmlFor="password">
                            <input
                                type="password"
                                name="password"
                                className="form-input"
                                placeholder="Password"
                                autoComplete="off"
                                value={value.password}
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <div className="form-inputs">
                        <label htmlFor="confirmpassword">
                            <input
                                type="password"
                                name="confirmpassword"
                                className="form-input"
                                placeholder="confirm password"
                                autoComplete="off"
                                value={value.confirmpassword}
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <button>submit</button>
                </form>
            </div>
        </section>
    );
};

export default SignUp;
