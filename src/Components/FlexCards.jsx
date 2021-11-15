import "./FlexCards.css";
import wind from "../Images/wind.png";
import pressure from "../Images/pressure.png";
import spyglass from "../Images/spyglass.png";
import sunset from "../Images/sunset.png";
import humidity from "../Images/humidity.png";
import DisplayDate from "./DisplayDate";
import sunrise from "../Images/sunrise.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";



const FlexCards = (props) => {
    const { temp, search, handleCityNameChange, cityName } = props;
    const sunr = temp.sys?.sunrise;
    const suns = temp.sys?.sunset;

    const getsunrisetime = () => {
        const riseObj = new Date(sunr * 1000);
        const hours = riseObj.getUTCHours().toString().padStart(2, 0);
        const minutes = riseObj.getUTCMinutes().toString().padStart(2, 0);
        return `${hours}:${minutes}`;
    };

    const getsunsettime = () => {
        const setObj = new Date(suns * 1000);
        const hours = setObj.getUTCHours().toString().padStart(2, 0);
        const minutes = setObj.getUTCMinutes().toString().padStart(2, 0);
        return `${hours}:${minutes}`;
    };


    return (
        <div className="flex-cards-wrapper">
            <div className="header">
                <div className="date-time">
                    <DisplayDate />
                </div>
                <div className="search-bar">
                    <Header
                        search={search}
                handleCityNameChange={handleCityNameChange}
                cityName={cityName}
                    />
                </div>
            </div>

            {typeof temp.wind !== "undefined" ? (
                <div className="flex-cards">
                    <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-4 ">
                        <div className="col">
                            <div className="p-3 border bg-light climate-details">
                                <div className="wind-speed-img sys ">
                                    <img
                                        className="img-fluid"
                                        src={wind}
                                        alt="wind"
                                        style={{
                                            height: "5rem",
                                            width: "5rem",
                                        }}
                                    ></img>
                                </div>
                                <div className="wind-speed-details">
                                    <div className="name">WindSpeed</div>
                                    <div className="value">
                                        {temp.wind.speed}
                                    </div>
                                    <div className="unit">m/s</div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3 border bg-light climate-details">
                                <div className="wind-speed-img sys">
                                    <img
                                        className="img-fluid"
                                        src={pressure}
                                        alt="wind"
                                        style={{
                                            height: "5rem",
                                            width: "5rem",
                                        }}
                                    ></img>
                                </div>
                                <div className="wind-speed-details">
                                    <div className="name">Pressure</div>
                                    <div className="value">
                                        {" "}
                                        {temp.main.pressure}
                                    </div>
                                    <div className="unit">hPa</div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3 border bg-light climate-details">
                                <div className="wind-speed-img sys">
                                    <img
                                        className="img-fluid"
                                        src={humidity}
                                        alt="wind"
                                        style={{
                                            height: "5rem",
                                            width: "5rem",
                                        }}
                                    ></img>
                                </div>
                                <div className="wind-speed-details">
                                    <div className="name">Humidity</div>
                                    <div className="value">
                                        {temp.main.humidity}
                                    </div>
                                    <div className="unit">%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3 border bg-light mt-lg-4 climate-details">
                                <div className="wind-speed-img sys">
                                    <img
                                        className="img-fluid"
                                        src={spyglass}
                                        alt="wind"
                                        style={{
                                            height: "5rem",
                                            width: "5rem",
                                        }}
                                    ></img>
                                </div>
                                <div className="wind-speed-details">
                                    <div className="name">Visibility</div>
                                    <div className="value">
                                        {(temp.visibility / 1000).toFixed(1)}
                                    </div>
                                    <div className="unit">km</div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3 border bg-light mt-lg-4 climate-details">
                                <div className="wind-speed-img sys">
                                    <img
                                        className="img-fluid"
                                        src={sunrise}
                                        alt="wind"
                                        style={{
                                            height: "5rem",
                                            width: "5rem",
                                        }}
                                    ></img>
                                </div>
                                <div className="wind-speed-details">
                                    <div className="name">Sunrise</div>
                                    <div className="value">
                                        {getsunrisetime()}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3 border bg-light mt-lg-4 climate-details">
                                <div className="wind-speed-img sys">
                                    <img
                                        className="img-fluid"
                                        src={sunset}
                                        alt="wind"
                                        style={{
                                            height: "5rem",
                                            width: "5rem",
                                        }}
                                    ></img>
                                </div>
                                <div className="wind-speed-details">
                                    <div className="name">Sunset</div>
                                    <div className="value">
                                        {" "}
                                        {getsunsettime()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>failed</p>
            )}
        </div>
    );
};

export default FlexCards;
