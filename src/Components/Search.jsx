import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";

const Search = (props) => {
    const { search, handleCityNameChange, cityName } = props;
    return (
        <div className="textfield" style={{display:"flex",justifyContent:'end'}}>

            <div>
                <TextField
                 className="input_field"
                    style={{ backgroundColor:'white',padding:'.3rem 1rem',margin:'0px',borderRadius:'10px'}}
                    type="text"
                    onKeyDown={search}
                    onChange={handleCityNameChange}
                    value={cityName}
                    InputProps={{
                        disableUnderline: true ,
                        endAdornment: (
                            <InputAdornment>
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </div>
        </div>
    );
};

export default Search;
