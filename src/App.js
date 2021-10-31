import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayTempCont from "./Components/DisplayTempCont";
import "../src/Style/DisplayTemp.css";

function App() {
    const [temp, setTemp] = useState();

    const keys = "c9c4b2085677b74b3493c03f9f66b8e6";

    const getData = async () => {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${keys}`
        );
        const data = await res.json();
        setTemp(data);
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <div className="main-wrapper">
            <DisplayTempCont temp={temp} />
        </div>
    );
}

export default App;
