import "../Style/DisplayTemp.css";

const ClimateCond = (props) => {
    const { temp, search, handleCityNameChange, cityName } = props;


    return (
        <div className="right-cont">
            <div className="header">
                <div className="date">
                    <h5> Saturday, 10:00 pm</h5>
                </div>
                <input
                    type="text"
                    onKeyPress={search}
                    onChange={handleCityNameChange}
                    value={cityName}
                />
            </div>
            <div className="flex-container">
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="climate ">1</div>
                </div>
                <div className="col-md-4  d-flex justify-content-center">
                    <div className="climate">1</div>
                </div>
                <div className="col-md-4  d-flex justify-content-center">
                    <div className="climate ">1</div>
                </div>
                <div className="col-md-4  d-flex justify-content-center">
                    <div className="climate ">1</div>
                </div>
                <div className="col-md-4  d-flex justify-content-center">
                    <div className="climate">1</div>
                </div>
                <div className="col-md-4  d-flex justify-content-center">
                    <div className="climate ">1</div>
                </div>
            </div>
        </div>
    );
};

export default ClimateCond;
