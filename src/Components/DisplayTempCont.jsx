import "../Style/DisplayTemp.css";
import MainCard from "./MainCard";
import FlexCards from "./FlexCards";

const DisplayTempCont = (props) => {
    const { temp, search, handleCityNameChange, cityName} = props;
    return (
        <div className="inner-container">
            <MainCard temp={temp} />
            <FlexCards
                temp={temp}
                search={search}
                handleCityNameChange={handleCityNameChange}
                cityName={cityName}
            />
        </div>
    );
};
export default DisplayTempCont;
