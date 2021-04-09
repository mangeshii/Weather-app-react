import { makeStyles } from '@material-ui/core/styles'


const signInStyles = makeStyles(theme=>({
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
        [theme.breakpoints.down('sm')]: {
            height:'100%',
            display:'flex',
            justifyContent:'center',

          },
        maxWidth: '30rem',
        width: '30rem',
        backgroundColor: 'white',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: '10px',


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
        margin: "2% 0% 0% 0%",
        padding: '1.5% 0%',
        fontSize: '22px'
    },
    signUpLink:{
        margin:'2% 0% 10% 0%',
        [theme.breakpoints.down('sm')]:{
            marginTop:'3% 0% 0% 0% '
        }
    }
}))

export default signInStyles