// @ts-nocheck
import { useEffect, useState } from "react"
import main_styles from "./main_styles"
import CircularProgress from "@material-ui/core/CircularProgress";
import 'bootstrap/dist/css/bootstrap.css';


const API_KEY = "AIzaSyBdx37TZxfQRdIA18NvGn8c4RyjG0UEFkE"
const playlistId = "PLFsfg2xP7cbKQaXpO69E1-RBU3-5av05G"
const Youtube_API = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=10&key=${API_KEY}`

const Main = () => {

    const [youtubedata, setYoutubeData] = useState()
    const classes = main_styles()


    useEffect(async () => {
        const res = await fetch(Youtube_API)
        const data = await res.json()
        console.log(data)
        setYoutubeData(data)
    }, [])

    return (
        <>
            <section className={classes.mainWrapper}>
                <div className={classes.mainContainer}>
                    {
                        (youtubedata) ? (youtubedata.items.map((item) => {
                            const { id, snippet } = item
                            const { title, thumbnails } = snippet
                            const { medium } = thumbnails
                            console.log(item)
                            return (
                                <>

                                    <div className="card" style={{ width: '25rem', margin: '10px' }}>
                                        <img className="card-img-top" src={medium.url} />
                                        <div className="card-body">
                                            <h5 className={classes.title}>{title}</h5>
                                        </div>
                                    </div>
                                </>
                            )
                        })) : (<CircularProgress />)
                    }
                </div>
            </section>
        </>
    )
}


export default Main


