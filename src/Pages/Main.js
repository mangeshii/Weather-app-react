import { useEffect, useState } from "react";
import GetWeatherData from "./api/_api";
import "../Styles/Global.css";
import MainCard from "../Components/MainCard";
import FlexCards from "../Components/FlexCards";

const Main = () => {
    const [cityName, setCityName] = useState("Mumbai");
    const [weatherInfo, setWeatherInfo] = useState();

    const getCity = (e) => {
        if (e.key === "Enter") {
            const getdata = async () => {
                const data = await GetWeatherData(cityName);
                if(data.name){
                    setWeatherInfo(data);
                }

            };
            getdata();
            setCityName(" ");
        }
    };

    useEffect(() => {
        const Getdata = async () => {
            const data = await GetWeatherData(cityName);
            setWeatherInfo(data);
        };
        Getdata();
        // eslint-disable-next-line
    }, []);

    const handleOnChange = (e) => {
        setCityName(e.target.value);
    };

    return (
        <>
            {weatherInfo && (
                <div className="wrapper">
                    <MainCard
                        city={weatherInfo.name}
                        country={weatherInfo.sys.country}
                        description={weatherInfo.weather[0].description}
                        iconName={weatherInfo.weather[0].icon}
                        temperature={weatherInfo.main.temp}
                        feels_like={weatherInfo.main.feels_like}
                    />
                    <FlexCards
                        wind={weatherInfo.wind.speed}
                        pressure={weatherInfo.main.pressure}
                        humidity={weatherInfo.main.humidity}
                        visibility={(weatherInfo.visibility / 1000).toFixed(1)}
                        sunrise={
                            new Date(
                                weatherInfo.sys.sunrise * 1000
                            ).getHours() +
                            ":" +
                            new Date(
                                weatherInfo.sys.sunrise * 1000
                            ).getMinutes()
                        }
                        sunset={
                            new Date(weatherInfo.sys.sunset * 1000).getHours() +
                            ":" +
                            new Date(weatherInfo.sys.sunset * 1000).getMinutes()
                        }
                        getCity={getCity}
                        handleOnChange={handleOnChange}
                        cityName={cityName}
                    />

                </div>
            )}

        </>
    );
};
export default Main;
