import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayTempCont from "./Components/DisplayTempCont";
import "../src/Style/DisplayTemp.css";

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

    // useEffect(() => {
    //     search();
    // });

    const handleCityNameChange = (event) => {
        setCityName(event.target.value);
    };
    return (
        <div className="main-wrapper">
            <DisplayTempCont
                temp={temp}
                search={search}
                handleCityNameChange={handleCityNameChange}
                cityName={cityName}
            />
        </div>
    );
}

export default App;
