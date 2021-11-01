import "../Style/DisplayTemp.css";
import DisplayTemp from "./DiplayTemp";
import ClimateCond from "./ClimateCond";

const DisplayTempCont = (props) => {
    const { temp, search, handleCityNameChange, cityName} = props;
    return (
        <div className="inner-container">
            <DisplayTemp temp={temp} />
            <ClimateCond
                temp={temp}
                search={search}
                handleCityNameChange={handleCityNameChange}
                cityName={cityName}
            />
        </div>
    );
};
export default DisplayTempCont;
