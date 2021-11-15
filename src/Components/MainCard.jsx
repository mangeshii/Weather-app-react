import "./MainCard.css"
import "bootstrap/dist/css/bootstrap.min.css";
import smoke from "../Images/bonfire.png";
import clouds from "../Images/clouds.png";
import cloudy from "../Images/cloudy.png";
import dust from "../Images/dust.png";
import haze from "../Images/haze.png";
import mist from "../Images/mist.png";
import sunny from "../Images/sunny.png";
import rainy from "../Images/raining.png"
import thunder_storm from "../Images/scattered-thunderstorms.png";
import snow from "../Images/snow.png";

const MainCard = (props) => {
    const { temp } = props;

    const changeBackground = () => {
        if (typeof temp["main"] !== "undefined") {
            if (temp.weather[0].description === "sunny") {
                return sunny;
            } else if (temp.weather[0].description === "haze") {
                return haze;
            } else if (temp.weather[0].description === "mist") {
                return mist;
            } else if (temp.weather[0].description === "smoke") {
                return smoke;
            } else if (temp.weather[0].description === "dust") {
                return dust;
            } else if (temp.weather[0].description === "thunder storm") {
                return thunder_storm;
            } else if (temp.weather[0].description === "clear sky") {
                return cloudy;
            } else if (temp.weather[0].description === "snow") {
                return snow;
            } else if (temp.weather[0].description === "light rain") {
                return rainy;
            }  else {
                return clouds;
            }
        }
    };

    return (
        <>
            {/* {typeof temp.main !== "undefined" ? ( */}
                <div className="temperature-details">

                    <div className="city-country-container">
                        <h1>Paris</h1>
                    </div>
                    <div className="description-container">
                        <h4>haze</h4>
                    </div>
                    <div className="weather-image-container">

                    </div>
                    <div className="temperature-container">
                        <h1>7C</h1>
                    </div>
                    <div className="feels-like-container">
                        <h5>feels like 24c</h5>
                    </div>
                </div>
            {/* ) : (<></>)} */}

        </>
    );
};
export default MainCard;













{/* {typeof temp.main !== "undefined" ? (
    <Grid className="left-cont" item md={4} xs={12} style={{background:'white',borderTopLeftRadius:'2rem',borderBottomLeftRadius:'2rem'}}>
        <Box paddingTop={3} style={{ fontSize: "2.8rem" }}>
            <h1 style={{fontSize:'2.2rem',fontWeight:'600'}}>{`${temp.name}, ${temp.sys.country}`}</h1>
        </Box>
        <Box style={{ fontSize: "1rem" }}>
            <h6>{temp.weather[0].description}</h6>
        </Box>
        <Box padding={5}>
            <img
                className="img-fluid"
                src={changeBackground()}
                alt="imagess"
                style={{ height: "15rem" }}
            />
        </Box>
        <Box className="temp" paddingTop={3} >
            <h1>{`${parseInt(temp.main.temp) - 273}°C`}</h1>
        </Box>
        <Box style={{ fontSize: "1rem" ,marginBottom:'4rem'}}>
            {" "}
            <h6>{`Feels like ${
                parseInt(temp.main.feels_like) - 273
            }°C`}</h6>
        </Box>
    </Grid>
) : (
    <p style={{backgroundColor:'white',width:'100%'}}>City Not Found</p>
)} */}