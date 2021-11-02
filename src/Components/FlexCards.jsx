import "../Style/DisplayTemp.css";
import wind from "../Images/wind.png";
import pressure from "../Images/pressure.png";
import spyglass from "../Images/spyglass.png";
import sunset from "../Images/sunset.png";
import humidity from "../Images/humidity.png";
import DisplayDate from "./DisplayDate";
import TextField from "@material-ui/core/TextField";
import sunrise from "../Images/sunrise.png";
import "bootstrap/dist/css/bootstrap.min.css";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

// render

const FlexCards = (props) => {
    const { temp, search, handleCityNameChange, cityName } = props;
    console.log(temp);
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
        <div className="right-container col-md-8 col-sm-12">
            <div className="header">
                <div className="date">
                    <h2>
                        <DisplayDate />
                    </h2>
                </div>
                <div className="input_field">
                    <TextField
                        type="text"
                        onKeyPress={search}
                        onChange={handleCityNameChange}
                        value={cityName}
                        variant="outlined"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment>
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>
            </div>
            {typeof temp.wind !== "undefined" ? (
                <div className="flex-cards">
                    <div className="cards">
                        <div className="climate_images">
                            <img
                                src={wind}
                                alt="wind"
                                style={{ height: "7rem", width: "6rem" }}
                            ></img>
                        </div>
                        <div className="climate_description">
                            <div className="sys">Wind Speed</div>
                            <div className="value">{temp.wind.speed} </div>
                            <div className="unit">m/s</div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="climate_images">
                            <img
                                src={pressure}
                                alt="wind"
                                style={{ height: "7rem", width: "6rem" }}
                            ></img>
                        </div>
                        <div className="climate_description">
                            <div className="sys">Pressure</div>
                            <div className="value">{temp.main.pressure}</div>
                            <div className="unit">hPa</div>
                        </div>
                    </div>
                    <div className="cards">
                        {" "}
                        <div className="climate_images">
                            <img
                                src={humidity}
                                alt="wind"
                                style={{ height: "7rem", width: "6rem" }}
                            ></img>
                        </div>
                        <div className="climate_description">
                            <div className="sys">Humidity</div>
                            <div className="value">{temp.main.humidity}</div>
                            <div className="unit">%</div>
                        </div>
                    </div>
                    <div className="cards">
                        {" "}
                        <div className="climate_images">
                            <img
                                src={spyglass}
                                alt="wind"
                                style={{ height: "7rem", width: "6rem" }}
                            ></img>
                        </div>
                        <div className="climate_description">
                            <div className="sys">Visibility</div>
                            <div className="value">
                                {(temp.visibility / 1000).toFixed(1)}
                            </div>
                            <div className="unit">km</div>
                        </div>
                    </div>
                    <div className="cards">
                        {" "}
                        <div className="climate_images">
                            <img
                                src={sunrise}
                                alt="wind"
                                style={{ height: "7rem", width: "6rem" }}
                            ></img>
                        </div>
                        <div className="climate_description">
                            <div className="sys">Sunrise</div>
                            <div className="value">{getsunrisetime()}</div>
                        </div>
                    </div>
                    <div className="cards">
                        {" "}
                        <div className="climate_images">
                            {" "}
                            <img
                                src={sunset}
                                alt="wind"
                                style={{ height: "7rem", width: "6rem" }}
                            ></img>
                        </div>
                        <div className="climate_description">
                            <div className="sys">Sunset</div>
                            <div className="value">{getsunsettime()}</div>
                        </div>
                    </div>
                </div>
            ) : (
                <p></p>
            )}
        </div>
    );
};

export default FlexCards;

