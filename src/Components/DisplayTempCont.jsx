import "../Style/DisplayTemp.css";
import DisplayTemp from "./DiplayTemp";
import ClimateCond from "./ClimateCond";


const DisplayTempCont = () => {
    return (
        <div className="inner">
            <DisplayTemp/>
            <ClimateCond/>
        </div>
    );
};
export default DisplayTempCont;
