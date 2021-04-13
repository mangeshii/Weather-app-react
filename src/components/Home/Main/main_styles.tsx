import { makeStyles} from "@material-ui/core/styles"

const main_styles=makeStyles({
    mainWrapper:{
        height:'auto',
        width:'99.5%',
        display:'flex',
        justifyContent:'center'
    },
    mainContainer:{
        height:'auto',
        width:'100%',
        backgroundColor:'yellow'
    },

    flexContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection:'row'
    },

    image:{
        width: '500px',
        height: '380px',
        margin: '10px',
        textAlign: 'center',
        fontSize: '30px',
        borderRadius: '20px',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        backgroundColor:'white'
    },
    cards:{
        border:'2px solid red',
        height:'300px',
        width:'400px',
    }

})

export default main_styles