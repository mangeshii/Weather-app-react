import { makeStyles } from "@material-ui/core/styles";
import smoke from "../src/Images/bonfire.png";
import clear_sky from "../src/Images/clouds-and-sun.png";
import cloudy from "../src/Images/cloudy.png";
import dust from "../src/Images/dust.png";
import haze from "../src/Images/haze.png";
import mist from "../src/Images/mist.png";
import sunny from "../src/Images/sunny.png";
import thunder_storm from "../src/Images/scattered-thunderstorms.png"

const styles = makeStyles((theme) => ({

    sunny: {
        background:{sunny},
        height: "10rem",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
    },
    smoke: {
        background:{smoke},
        height: "10rem",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
    },
    clear_sky: {
        background:{clear_sky},
        height: "10rem",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
    },
    cloudy: {
        background:{cloudy},
        height: "10rem",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
    },
    dust: {
        background:{dust},
        height: "10rem",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
    },
    haze: {
        background:{haze},
        height: "10rem",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
    },
    mist: {
        background:{mist},
        height: "10rem",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
    },
    thunder_storm: {
        background:{thunder_storm},
        height: "10rem",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
    },



}))

export default styles