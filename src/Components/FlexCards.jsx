import "./FlexCards.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DateAndTime from "./DateAndTime";
import Search from "./Search";
import windimg from "../Icons/wind.png";
import pressureimg from "../Icons/pressure.png";
import humidityimg from "../Icons/humidity.png";
import visibilityimg from "../Icons/binocular.png";
import sunriseimg from "../Icons/sunrise.png";
import sunsetimg from "../Icons/sunset.png"

const FlexCards = ({ wind, pressure, humidity, visibility,sunrise,sunset ,getCity,handleOnChange,cityName}) => {
    return (
        <>
            <div className="flex-wrapper">
                <div className="header">
                    <div className="date-time">
                        <DateAndTime />
                    </div>
                    <div className="input-feild">
                        <Search getCity={getCity}
                            handleOnChange={handleOnChange}
                            cityName={cityName}
                        />
                    </div>
                </div>
                <div className="flex-cards row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3 g-lg-4 ">
                    <div className="col">
                        <div className="p-3">
                            <img
                                className="img-fluid weather-desc-img col-md-6"
                                src={windimg}
                                alt=""
                            />
                            <div className="wind col-md-6">
                                <h6>WindSpeed</h6>
                                <h5 className="value">{wind}</h5>
                                <h6>m/s</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <img
                                className="img-fluid weather-desc-img col-md-6"
                                src={pressureimg}
                                alt=""
                            />
                            <div className="wind col-md-6 ">
                                <h6 >Pressure</h6>
                                <h5 className="value">{pressure}</h5>
                                <h6>hPa</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <img
                                className="img-fluid weather-desc-img col-md-6"
                                src={humidityimg}
                                alt=""
                            />
                            <div className="wind col-md-6">
                                <h6>Humidity</h6>
                                <h5 className="value">{humidity}</h5>
                                <h6>%</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <img
                                className="img-fluid weather-desc-img col-md-6"
                                src={visibilityimg}
                                alt=""
                            />
                            <div className="wind col-md-6">
                                <h6>Visibility</h6>
                                <h5 className="value">{visibility}</h5>
                                <h6>km</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <img
                                className="img-fluid weather-desc-img col-md-6"
                                src={sunriseimg}
                                alt=""
                            />
                            <div className="wind col-md-6">
                                <h6>Sunrise</h6>
                                <h5 className="value">{sunrise}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <img
                                className="img-fluid weather-desc-img col-md-6"
                                src={sunsetimg}
                                alt=""
                            />
                            <div className="wind col-md-6">
                                <h6>Sunset</h6>
                                <h5 className="value">{sunset}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default FlexCards;
