import { makeStyles } from '@material-ui/styles'


const signInStyles = makeStyles({
    signInSection: {
        backgroundColor: '#eee',
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    signInContainer: {
        height: 'auto',
        width: '30rem',
        backgroundColor: 'white',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: '10px'

    },
    signInHeader: {
        fontSize: '40px'
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
})

export default signInStyles