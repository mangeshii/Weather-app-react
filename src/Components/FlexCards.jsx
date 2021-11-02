import "../Style/DisplayTemp.css";
import wind from "../Images/wind.png";
import pressure from "../Images/pressure.png";
import spyglass from "../Images/spyglass.png";
import sunset from "../Images/sunset.png";
import humidity from "../Images/humidity.png";
import DisplayDate from "./DisplayDate";
import TextField from "@material-ui/core/TextField";
import sunrise from "../Images/sunrise.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
    },
}));

const FlexCards = (props) => {
    const { temp, search, handleCityNameChange, cityName } = props;
    const sunr = temp.sys?.sunrise;
    const suns = temp.sys?.sunset;

    const getsunrisetime = () => {
        const riseObj = new Date(sunr * 1000);
        const hours = riseObj.getUTCHours().toString().padStart(2, 0);
        const minutes = riseObj.getUTCMinutes().toString().padStart(2, 0);
        return `${hours}:${minutes}`;
    };

    const getsunsettime = () => {
        const setObj = new Date(suns * 1000);
        const hours = setObj.getUTCHours().toString().padStart(2, 0);
        const minutes = setObj.getUTCMinutes().toString().padStart(2, 0);
        return `${hours}:${minutes}`;
    };

    const classes = useStyles();
    return (
        <Grid
            item
            md={8}
            xs={12}
            style={{
                background: "#ebecf0",
                width: "100%",
                borderTopRightRadius: "2rem",
                borderBottomRightRadius: "2rem",
                padding: "3rem",
            }}
        >
            <Grid container item style={{ padding: "1.3rem" }}>
                <Grid md={6} xs={12} style={{display:"flex",justifyContent:'start',alignItems:'center'}}>
                    <h4 style={{fontWeight:'600'}}>
                        <DisplayDate />
                    </h4>
                </Grid>
                <Grid md={6} xs={12}>
                    <Header
                        search={search}
                        handleCityNameChange={handleCityNameChange}
                        cityName={cityName}
                    />
                </Grid>
            </Grid>

            {typeof temp.wind !== "undefined" ? (
                <>
                    <Grid container spacing={3} style={{marginTop:'1.2rem'}}>
                        <Grid item xs>
                            <Paper
                                className={classes.paper}
                                style={{ borderRadius: "2rem" ,marginBottom:'1rem',padding:'2.5rem 1rem '}}
                            >
                                <Grid container>
                                    <Grid xs={6}>
                                        <img
                                            className="img-fluid"
                                            src={wind}
                                            alt="wind"
                                            style={{
                                                height: "4rem",
                                                width: "4rem",
                                            }}
                                        ></img>
                                    </Grid>
                                    <Grid xs={6} style={{ textAlign: "end" }}>
                                        <div className="sys">WindSpeed</div>
                                        <div className="value" style={{fontSize:'1.2rem'}}>
                                            {temp.wind.speed}{" "}
                                        </div>
                                        <div className="unit">m/s</div>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper
                                className={classes.paper}
                                style={{ borderRadius: "2rem",marginBottom:'1rem',padding:'2.5rem 1rem '}}
                            >
                                <Grid container>
                                    <Grid xs={6}>
                                        <img
                                            className="img-fluid"
                                            src={pressure}
                                            alt="wind"
                                            style={{
                                                height: "5rem",
                                                width: "4rem",
                                            }}
                                        ></img>
                                    </Grid>
                                    <Grid xs={6} style={{ textAlign: "end" }}>
                                        <div className="sys">Pressure</div>
                                        <div className="value"  style={{fontSize:'1.2rem'}}>
                                            {temp.main.pressure}
                                        </div>
                                        <div className="unit">hPa</div>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper
                                className={classes.paper}
                                style={{ borderRadius: "2rem" ,padding:'2.5rem 1rem'}}
                            >
                                <Grid container>
                                    <Grid xs={6}>
                                        <img
                                            className="img-fluid"
                                            src={humidity}
                                            alt="wind"
                                            style={{
                                                height: "5rem",
                                                width: "4rem",
                                            }}
                                        ></img>
                                    </Grid>
                                    <Grid xs={6} style={{ textAlign: "end" }}>
                                        <div className="sys">Humidity</div>
                                        <div className="value"  style={{fontSize:'1.2rem'}}>
                                            {temp.main.humidity}
                                        </div>
                                        <div className="unit">%</div>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <Paper
                                className={classes.paper}
                                style={{ borderRadius: "2rem" ,padding:'2.5rem 1rem'}}
                            >
                                <Grid container>
                                    <Grid xs={6}>
                                        <img
                                            className="img-fluid"
                                            src={spyglass}
                                            alt="wind"
                                            style={{
                                                height: "5rem",
                                                width: "4rem",
                                            }}
                                        ></img>
                                    </Grid>
                                    <Grid xs={6} style={{ textAlign: "end" }}>
                                        <div className="sys">Visibility</div>
                                        <div className="value"  style={{fontSize:'1.2rem'}}>
                                            {(temp.visibility / 1000).toFixed(
                                                1
                                            )}
                                        </div>
                                        <div className="unit">km</div>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper
                                className={classes.paper}
                                style={{ borderRadius: "2rem",padding:'2rem 1rem' }}
                            >
                                <Grid container>
                                    <Grid xs={6}>
                                        <img
                                            className="img-fluid"
                                            src={sunrise}
                                            alt="wind"
                                            style={{
                                                height: "6rem",
                                                width: "5rem",
                                            }}
                                        ></img>
                                    </Grid>
                                    <Grid xs={6} style={{ textAlign: "end" }}>
                                        <div className="sys">Sunrise</div>
                                        <div className="value"  style={{fontSize:'1.2rem'}}>
                                            {getsunrisetime()}
                                        </div>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper
                                className={classes.paper}
                                style={{ borderRadius: "2rem" ,padding:'2rem 1rem '}}
                            >
                                <Grid container>
                                    <Grid xs={6}>
                                        <img
                                            className="img-fluid"
                                            src={sunset}
                                            alt="wind"
                                            style={{
                                                height: "6rem",
                                                width: "4rem",
                                            }}
                                        ></img>
                                    </Grid>
                                    <Grid xs={6} style={{ textAlign: "end" }}>
                                        <div className="sys">Sunset</div>
                                        <div className="value"  style={{fontSize:'1.2rem'}}>
                                            {getsunsettime()}
                                        </div>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </>
            ) : (

                <p className="error-msg"></p>

            )}
        </Grid>
    );
};

export default FlexCards;
