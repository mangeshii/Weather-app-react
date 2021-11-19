const APP_ID = "c9c4b2085677b74b3493c03f9f66b8e6";

const GetWeatherData = async (cityName) => {
    const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${APP_ID}`
    );
    const weatherData = await weatherResponse.json();
    return weatherData
};

export default GetWeatherData;
