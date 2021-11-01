import "../Style/DisplayTemp.css";
import wind from "../Images/wind.png";
import pressure from "../Images/pressure.png";
import spyglass from "../Images/spyglass.png";
import sunrise from "../Images/sunrise.png";
import sunset from "../Images/sunset.png";
import humidity from "../Images/humidity.png";

const ClimateCond = (props) => {
    const { temp, search, handleCityNameChange, cityName } = props;
    console.log(temp);

    var day = new Date();
    var todaysday =
        day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + day.getDate();

    return (
        <div className="right-cont">
            <div className="header">
                <div className="date">
                    <h5>{`${todaysday}`}</h5>
                </div>
                <input
                    type="text"
                    onKeyPress={search}
                    onChange={handleCityNameChange}
                    value={cityName}
                />
            </div>

            {typeof temp !== "undefined" ? (
                <div className="flex-container">
                    <div className="col-md-4 d-flex">
                        <div className="climate-image col-md-5 d-flex align-items-center">
                            <img
                                src={wind}
                                alt="wind"
                                style={{ height: "7rem", width: "6rem" }}
                            ></img>
                        </div>
                        <div className="climate-details col-md-7">
                            <div className="sys">wind speed </div>
                            <div className="value">{temp.wind?.speed}</div>
                            <div className="unit">m/s</div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex ">
                        <div className="climate-image col-md-5 d-flex align-items-center">
                            <img
                                src={pressure}
                                alt="wind"
                                style={{ height: "7rem", width: "6rem" }}
                            ></img>
                        </div>
                        <div className="climate-details col-md-7">
                            {" "}
                            <div className="sys">Pressure</div>
                            <div className="value">{temp.main?.pressure}</div>
                            <div className="unit">hPa</div>
                        </div>
                    </div>
                    <div className="col-md-4  d-flex justify-content-center">
                        <div className="climate-image col-md-5 d-flex align-items-center">
                            <img
                                src={humidity}
                                alt="wind"
                                style={{ height: "7rem", width: "6rem" }}
                            ></img>
                        </div>
                        <div className="climate-details col-md-7">
                            <div className="sys">humidity</div>
                            <div className="value">{temp.main?.humidity}</div>
                            <div className="unit">%</div>
                        </div>
                    </div>
                    <div className="col-md-4  d-flex justify-content-center">
                        <div className="climate-image col-md-5 d-flex align-items-center">
                            <img
                                src={spyglass}
                                alt="wind"
                                style={{ height: "7rem", width: "6rem" }}
                            ></img>
                        </div>
                        <div className="climate-details col-md-7">
                            {" "}
                            <div className="sys">visibility</div>
                            <div className="value">
                                {(temp?.visibility / 1000).toFixed(1)}
                            </div>
                            <div className="unit">km</div>
                        </div>
                    </div>
                    <div className="col-md-4  d-flex justify-content-center">
                        <div className="climate-image col-md-5 d-flex align-items-center">
                            <img
                                src={sunrise}
                                alt="wind"
                                style={{ height: "7rem", width: "6rem" }}
                            ></img>
                        </div>
                        <div className="climate-details col-md-7">
                            <div className="sys">sunrise</div>
                            <div className="value">{temp.sys?.sunrise}</div>
                        </div>
                    </div>
                    <div className="col-md-4  d-flex justify-content-center">
                        <div className="climate-image col-md-5 d-flex align-items-center">
                            <img
                                src={sunset}
                                alt="wind"
                                style={{ height: "7rem", width: "6rem" }}
                            ></img>
                        </div>
                        <div className="climate-details col-md-7">
                            <div className="sys">sunset</div>
                            <div className="value">{temp.sys?.sunset}</div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>ss</p>
            )}
        </div>
    );
};

export default ClimateCond;
