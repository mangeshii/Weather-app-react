import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/Style/DisplayTemp.css";
import MainCard from "./Components/MainCard";
import FlexCards from "./Components/FlexCards";

function App() {
    const [cityName, setCityName] = useState("");
    const [temp, setTemp] = useState("");

    const APP_ID = "c9c4b2085677b74b3493c03f9f66b8e6";

    const search = async (event) => {
        if (event.key === "Enter") {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APP_ID}`
            );
            const data = await res.json();
            setTemp(data);
            setCityName("");
        }
    };
    const handleCityNameChange = (event) => {
        setCityName(event.target.value);
    };
    return (
        <div className="main-wrapper ">
        <MainCard temp={temp}/>
        <FlexCards temp={temp} search={search} cityName={cityName} handleCityNameChange={handleCityNameChange}/>
        </div>
    );
}

export default App;
