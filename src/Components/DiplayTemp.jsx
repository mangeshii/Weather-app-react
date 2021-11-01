import "../Style/DisplayTemp.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../Background.jsx"
import ClimateCond from "./ClimateCond";
// import smoke from "../Images/bonfire.png";
// import clear_sky from "../Images/clouds-and-sun.png";
// import cloudy from "../Images/cloudy.png";
// import dust from "../Images/dust.png";
// import haze from "../Images/haze.png";
// import mist from "../Images/mist.png";
// import sunny from "../Images/sunny.png";
// import thunder_storm from "../Images/scattered-thunderstorms.png";


const DisplayTemp = (props) => {
    const { temp } = props;

    const classes = styles();

    const changeBackground = () => {
        if (typeof temp["main"] !== "undefined") {
            if (temp.weather[0].description === "sunny") {
                return classes.sunny;
            } else if (temp.weather[0].description === "haze") {
                return classes.haze;
            } else if (temp.weather[0].description === "mist") {
                return classes.mist;
            } else if (temp.weather[0].description === "smoke") {
                return classes.smoke;
            } else if (temp.weather[0].description === "dust") {
                return classes.dust;
            } else if (temp.weather[0].description === "thunder storm") {
                return classes.thunder_storm;
            } else if (temp.weather[0].description === "clear sky") {
                return classes.clear_sky;
            } else {
                return classes.cloudy;
            }
        }
    };
        return (
            <>
                {typeof temp.sys !== "undefined" ? (
                    <>
                    <div className="left-cont">
                        <div className="country text-center pt-5 ">
                            <h1>{`${temp.name}, ${temp.sys.country}`}</h1>
                        </div>
                        <div className="description text-center">
                            <h5>{temp.weather[0].description}</h5>
                        </div>
                        <div className="image">

                        </div>
                        <div className="temperature text-center">
                            <h1>{`${parseInt(temp.main.temp) - 273}°C`}</h1>
                        </div>
                        <div className="feels-like text-center">
                            <h6>{`Feels like ${
                                parseInt(temp.main.feels_like) - 273
                            }°C`}</h6>
                        </div>
                    </div>
                    </>
                ) : (
                    <p className="error-msg">not found </p>
                )}
            </>
        );

};
export default DisplayTemp;
