import "../Style/DisplayTemp.css";
import wind from "./wind.png";
import direction from "./compass.png";
import spyglass from "./spyglass.png";
import sunrise from "./sunrise.png";
import sunset from "./sunset.png";
import humidity from "./humidity.png";

const ClimateCond = (props) => {
    const { temp, search, handleCityNameChange, cityName } = props;

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
                        <div className="sys"></div>
                        <div className="value"></div>
                        <div className="unit"></div>
                    </div>
                </div>
                <div className="col-md-4 d-flex ">
                    <div className="climate-image col-md-5 d-flex align-items-center">
                        <img
                            src={direction}
                            alt="wind"
                            style={{ height: "7rem", width: "6rem" }}
                        ></img>
                    </div>
                    <div className="climate-details col-md-7">
                        {" "}
                        <div className="sys"></div>
                        <div className="value"></div>
                        <div className="unit"></div>
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
                        <div className="sys"></div>
                        <div className="value"></div>
                        <div className="unit"></div>
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
                        <div className="sys"></div>
                        <div className="value"></div>
                        <div className="unit"></div>
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
                        {/* <div className="value">{temp.sys.sunrise}</div> */}
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
                        {/* <div className="value">{temp.sys.sunset}</div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClimateCond;
