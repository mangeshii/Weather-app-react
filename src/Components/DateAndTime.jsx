const DateAndTime = () => {
    const date_time = new Date();
    const weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const todays_day = weekdays[date_time.getDay()];

    const todays_time = date_time.getHours() + ":" + date_time.getMinutes();
    return (
        <h4 style={{fontWeight:'600'}}>
            {`${todays_day}, ${todays_time}`}
        </h4>
    );
};

export default DateAndTime;
