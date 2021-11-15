import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/Style/DisplayTemp.css";
import MainCard from "./Components/MainCard";
import FlexCards from "./Components/FlexCards";

function App() {
    const [cityName, setCityName] = useState("mumbai");
    const [temp, setTemp] = useState("");

    const APP_ID = "c9c4b2085677b74b3493c03f9f66b8e6";

    const search = async (event) => {
        if (event.key === "Enter") {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APP_ID}`
            );
            const data = await res.json();
            console.log(data);
            setTemp(data);
            setCityName("");
        }
    };

    const handleCityNameChange = (event) => {
        setCityName(event.target.value);
    };
    return (
        <>
            <div className="wrapper">
                <div className="main-container-wrapper container">
                    <div className="row">
                        <div
                            className="col-12 col-md-4"
                            style={{ backgroundColor: "white" }}
                        >
                            <MainCard temp={temp} />
                        </div>
                        <div
                            className="col-12 col-md-8"
                            style={{
                                backgroundColor: "#f7f7f7",
                                padding: "2rem",
                            }}
                        >
                            <FlexCards
                                temp={temp}
                                search={search}
                                cityName={cityName}
                                handleCityNameChange={handleCityNameChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
