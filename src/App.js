import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MainCard from "./Components/MainCard";

function App() {
    const [cityName, setCityName] = useState("pune");
    const [weatherData, setWeatherData] = useState("");

    const APP_ID = "c9c4b2085677b74b3493c03f9f66b8e6";

    const search = async (event) => {
        if (event.key === "Enter") {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APP_ID}`
            );
            const data = await res.json();
            setWeatherData(data);
        }
        setCityName("");
    };


    const handleCityNameChange = (event) => {
        setCityName(event.target.value);
    };
    return (
        <>
            <MainCard
                weatherData={weatherData}
                search={search}
                handleCityNameChange={handleCityNameChange}
                cityName={cityName}
            />
        </>
    );
}

export default App;

