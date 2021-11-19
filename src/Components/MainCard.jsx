import "./MainCard.css";

const MainCard = ({
    city,
    country,
    temperature,
    feels_like,
    description,
    iconName,
}) => {
    return (
        <>

            <div className="main-wrapper">
                <div className="CityAndCountry">
                    <h1>{`${city}, ${country}`}</h1>
                </div>
                <div className="description">
                    <h5>{description}</h5>
                </div>
                <div className="image">
                    <img
                        className="img-fluid weather-icons"
                        src={process.env.PUBLIC_URL + `/Images/${iconName}.svg`}
                        alt="weathericon"
                    />
                </div>
                <div className="temperature">
                    <h1>{`${temperature.toFixed(0)}°C`}</h1>
                </div>
                <div className="feels-like">
                    <h6>{`Feels like ${feels_like.toFixed(0)}°C`}</h6>
                </div>
            </div>
        </>
    );
};
export default MainCard;
