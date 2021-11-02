import "../Style/DisplayTemp.css";
import "bootstrap/dist/css/bootstrap.min.css";
import smoke from "../Images/bonfire.png";
import clouds from "../Images/clouds.png";
import cloudy from "../Images/cloudy.png";
import dust from "../Images/dust.png";
import haze from "../Images/haze.png";
import mist from "../Images/mist.png";
import sunny from "../Images/sunny.png";
import thunder_storm from "../Images/scattered-thunderstorms.png";
import snow from "../Images/snow.png";
// import FlexCards from "./FlexCards";

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
            } else {
                return clouds;
            }
        }
    };

    return (
        <>
            {typeof temp.main !== "undefined" ? (
                <div className="left-container col-md-4 col-sm-12">
                    <div className="temp-details">
                        <div className="country ">
                            <h1>{`${temp.name}, ${temp.sys.country}`}</h1>
                        </div>
                        <div className="description">
                            {" "}
                            <h5>{temp.weather[0].description}</h5>
                        </div>
                        <div className="image">
                            <img
                                src={changeBackground()}
                                alt="imagess"
                                style={{ height: "15rem" }}
                            />
                        </div>
                        <div className="temperature">
                            {" "}
                            <h1>{`${parseInt(temp.main.temp) - 273}°C`}</h1>
                        </div>
                        <div className="feels_like">
                            <h6>{`Feels like ${
                                parseInt(temp.main.feels_like) - 273
                            }°C`}</h6>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Not found </p>
            )}
        </>
    );
};
export default MainCard;

// {typeof temp.sys !== "undefined" ? (
//     <>
//         <div className="left-cont col-md-4 col-sm-12">
//             <div className="country text-center pt-5 ">
//                 <h1>{`${temp.name}, ${temp.sys.country}`}</h1>
//             </div>
//             <div className="description text-center">
//                < h5>{temp.weather[0].description}</h5>
//             </div>
//             <div className="image">
//                 <img
//                     src={changeBackground()}
//                     alt="imagess"
//                     style={{ height: "15rem" }}
//                 />
//             </div>
//             <div className="temperature text-center">
//                 <h1>{`${parseInt(temp.main.temp) - 273}°C`}</h1>
//             </div>
//             <div className="feels-like text-center">
//                 <h6>{`Feels like ${
//                     parseInt(temp.main.feels_like) - 273
//                 }°C`}</h6>
//             </div>
//         </div>
//     </>
// ) : (
//     <p className="error-msg">City Not Found </p>
// )}
