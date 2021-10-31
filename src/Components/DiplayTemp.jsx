import "../Style/DisplayTemp.css";
import "bootstrap/dist/css/bootstrap.min.css";

const DisplayTemp = (props) => {
    const {temp}=props;
    return (
        <div className="left-cont">
            <div className="country text-center pt-5 " >
                <h1>paris</h1>
            </div>
            <div className="description text-center">
                <h5>Haze</h5>
            </div>
            <div className="image text-center"></div>
            <div className="temperature text-center">
                <h1>27°C</h1>
            </div>
            <div className="feels-like text-center">
                <h6>feels like 32°C</h6>
            </div>
        </div>
    );
};

export default DisplayTemp;
