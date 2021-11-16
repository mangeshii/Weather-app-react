import "./MainCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FlexCards from "./FlexCards";
import smoke from "../Images/bonfire.png";
import clouds from "../Images/clouds.png";
import cloudy from "../Images/cloudy.png";
import dust from "../Images/dust.png";
import haze from "../Images/haze.png";
import mist from "../Images/mist.png";
import sunny from "../Images/sunny.png";
import rainy from "../Images/raining.png";
import thunder_storm from "../Images/scattered-thunderstorms.png";
import snow from "../Images/snow.png";

const MainCard = (props) => {
    const { weatherData, search, handleCityNameChange, cityName } = props;
    console.log(weatherData);

    const changeBackground = () => {
    if (typeof weatherData["main"] !== "undefined") {
        if (weatherData.weather[0].description === "sunny") {
            return sunny;
        } else if (weatherData.weather[0].description === "haze") {
            return haze;
        } else if (weatherData.weather[0].description === "mist") {
            return mist;
        } else if (weatherData.weather[0].description === "smoke") {
            return smoke;
        } else if (weatherData.weather[0].description === "dust") {
            return dust;
        } else if (weatherData.weather[0].description === "thunder storm") {
            return thunder_storm;
        } else if (weatherData.weather[0].description === "clear sky") {
            return cloudy;
        } else if (weatherData.weather[0].description === "snow") {
            return snow;
        } else if (weatherData.weather[0].description === "light rain") {
            return rainy;
        } else {
            return clouds;
        }
    }
};

    return (
        <>
            <div class="main--wrapper container">
                <div class="row">
                    <div class="col-md-4">
                        {typeof weatherData.main !== "undefined" ? (
                            <>
                                <div className="cityAndCountry">
                                    <h1>{`${weatherData.name}, ${weatherData.sys.country}`}</h1>
                                </div>
                                <div className="description">
                                    <h4>
                                        {weatherData.weather[0].description}
                                    </h4>
                                </div>
                                <div className="image">
                                    <img style={{height:'12rem'}} src={changeBackground()}  alt="imagess"/>
                                </div>
                                <div className="temperature">
                                    <h1>{`${
                                        parseInt(weatherData.main.temp) - 273
                                    }°C`}</h1>
                                </div>
                                <div className="feels_like">
                                    <h6>{`Feels like ${
                                        parseInt(weatherData.main.feels_like) -
                                        273
                                    }°C`}</h6>
                                </div>
                            </>
                        ) : (
                        <></>
                        )}
                    </div>
                    <FlexCards
                        search={search}
                        handleCityNameChange={handleCityNameChange}
                        cityName={cityName}
                        weatherData={weatherData}
                    />
                </div>
            </div>
        </>
    );
};
export default MainCard;















