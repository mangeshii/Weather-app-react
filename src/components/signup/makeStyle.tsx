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

export default usestyles