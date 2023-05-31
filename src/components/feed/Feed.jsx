import "./feed.css"
import './feed.css'
import Song from "../song/song"
import { useEffect, useState } from "react"
import axios from "axios"
//import GridLayout from "react-grid-layout";
import Data from "../../data"

export default function Feed({ Data }) {
    console.log(Data)

    /* const [songs, setSongs] = useState([])
     useEffect(() => {
 
         const fetchSong = async () => {
             const res = await axios.get("http://localhost:3000/song")
             // console.log(res)
             setSongs(res.data)
         }
         fetchSong()
     })*/
    return (
        <div className="feed" >


            {Data.map((d) => (



                <Song key={d._id} song={d} />


            ))}




        </div>
    )

}