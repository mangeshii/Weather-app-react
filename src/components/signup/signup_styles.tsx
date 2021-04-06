import { makeStyles } from "@material-ui/core/styles";

const signUpStyle = makeStyles({
    SignUpSection: {
        backgroundColor: '#eee',
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    SignUpContainer: {
        height: 'auto',
        width: '30rem',
        backgroundColor: 'white',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '10px'

    },
    signUpHeader: {
        fontSize: "40px"
    },
    form: {
        width: '100%',
    },

    formInputs: {
        color: 'red'
    },
    formInput: {
        width: "80%",
        margin: "1% 0%",
    },
    signInBtn: {
        width: "80%",
        margin: "2% 0% 10% 0%",
        padding: '1.5% 0%',
        fontSize: '22px'
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

export default signUpStyle