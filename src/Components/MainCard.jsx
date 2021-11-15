import "./MainCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
    const { temp } = props;

    const changeBackground = () => {
        if (typeof temp["main"] !== "undefined") {
            if (temp.weather[0].description === "sunny") {
                return sunny;
            } else if (temp.weather[0].description === "haze") {
                return haze;
            } else if (temp.weather[0].description === "mist") {
                return mist;
            } else if (temp.weather[0].description === "smoke") {
                return smoke;
            } else if (temp.weather[0].description === "dust") {
                return dust;
            } else if (temp.weather[0].description === "thunder storm") {
                return thunder_storm;
            } else if (temp.weather[0].description === "clear sky") {
                return cloudy;
            } else if (temp.weather[0].description === "snow") {
                return snow;
            } else if (temp.weather[0].description === "light rain") {
                return rainy;
            } else {
                return clouds;
            }
        }
    };

    return (
        <>
            {typeof temp.main !== "undefined" ? (
                <div className="temperature-details">
                    <div className="city-country-container">
                        <h1>{`${temp.name}, ${temp.sys.country}`}</h1>
                    </div>
                    <div className="description-container">
                        <h4>{temp.weather[0].description}</h4>
                    </div>
                    <div className="weather-image-container">
                        <img
                            className="img-fluid"
                            src={changeBackground()}
                            alt="imagess"
                            style={{ height: "15rem" }}
                        />
                    </div>
                    <div className="temperature-container">
                        <h1>{`${parseInt(temp.main.temp) - 273}°C`}</h1>
                    </div>
                    <div className="feels-like-container">
                        <h5>{`Feels like ${
                            parseInt(temp.main.feels_like) - 273
                        }°C`}</h5>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
};
export default MainCard;
