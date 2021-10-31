import "../Style/DisplayTemp.css";
import DisplayTemp from "./DiplayTemp";
import ClimateCond from "./ClimateCond";


const DisplayTempCont = (props) => {
    const {temp}=props
    return (
        <div className="inner-container">
            <DisplayTemp temp={temp}/>
            <ClimateCond temp={temp}/>
        </div>
    );
};
export default DisplayTempCont;
