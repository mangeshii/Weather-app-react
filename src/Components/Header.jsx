import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";

const Header = (props) => {
    const { search, handleCityNameChange, cityName } = props;
    return (
        <div className="header" style={{display:"flex",justifyContent:'end'}}>

            <div className="input_field">
                <TextField
                    style={{ backgroundColor:'white',padding:'0px',margin:'0px',borderRadius:'10px'}}
                    type="text"
                    onKeyPress={search}
                    onChange={handleCityNameChange}
                    value={cityName}
                    // variant="outlined"
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

export default Header;