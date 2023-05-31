import './song.css'
import Artist from '../artist/artist'
import { useEffect, useState } from "react"
import axios from "axios"


export default function Song({ song }) {
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("token") };
    const [like, setlike] = useState(false)
    const handeleLike = async () => {
        try {
            console.log("http://localhost:3000/user/" + song._id + "/like")
            console.log(headers)
            //await axios.put("http://localhost:3000/user/", {}, { headers: headers })

            // const res = await axios.get("http://localhost:3000/user/favorite", { headers })
            const res = await axios.put("http://localhost:3000/user/" + song._id + "/like", {}, { headers })

            if (like) {

                console.log("unlike")
                setlike(false)
                document.getElementById(song._id).src = "asset/unlike.png"
            }
            else {
                console.log("like")
                setlike(true)
                document.getElementById(song._id).src = "asset/like.png"

            }


        }
        catch (err) {
            console.log(err)
        }

    }


    return (

        <div className='song'>
            <div className="headline">
                <span className='nameSong'>{song.song_title}</span>
            </div>
            <div className="detsils">
                <span className='detsil'>id: {song._id}</span>
                <br />
                <span className='detsil'>duration: {song.duration}</span>
                <br />
                <span className='detsil'>releaseYear:{song.release_year}</span>
                <Artist className='detsil' artist={song.artist_Id} />

            </div>
            <div className="botton"  >
                <button onClick={handeleLike} src="asset/unlike.png"  ><img className='like' src="asset/unlike.png" id={song._id} /></button>

            </div>

        </div>

    )



}   