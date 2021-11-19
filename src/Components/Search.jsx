const Search = ({ getCity, handleOnChange,cityName }) => {
    return (
        <>
            <input
            className="form-control"
            type="text"
            onKeyPress={getCity}
            onChange={handleOnChange}
            value={cityName}
            placeholder="search for a city..."

            />
        </>
    );
};
export default Search;
