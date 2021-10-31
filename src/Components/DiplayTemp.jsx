import "../Style/DisplayTemp.css";
import "bootstrap/dist/css/bootstrap.min.css";

const DisplayTemp = (props) => {
    const { temp } = props;
    console.log(temp);
    return (
        <>
            {typeof temp.sys !== "undefined" ? (
                <div className="left-cont">
                    <div className="country text-center pt-5 ">
                        <h1>{`${temp.name}, ${temp.sys.country}`}</h1>
                    </div>
                    <div className="description text-center">
                        <h5>{temp.weather[0].description}</h5>
                    </div>
                    <div className="image text-center"></div>
                    <div className="temperature text-center">
                        <h1>{`${parseInt(temp.main.temp) - 273}°C`}</h1>
                    </div>
                    <div className="feels-like text-center">
                        <h6>{`Feels like ${
                            parseInt(temp.main.feels_like) - 273
                        }°C`}</h6>
                    </div>
                </div>
            ) : (
                <p className="error-msg">not found </p>
            )}
        </>
    );
};

export default DisplayTemp;
