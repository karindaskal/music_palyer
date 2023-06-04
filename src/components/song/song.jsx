import './song.css'
import Artist from '../artist/artist'
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { AuthContext } from '../../context/AuthContext';
export default function Song({ song }) {
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("token") };
    const { user, dispatch } = useContext(AuthContext)
    const [like, setlike] = useState(user.favorites.includes(song._id))
    useEffect(() => {
        //  setlike(user.favorites.includes(song._id))

    }, [like])

    const handeleLike = async () => {
        try {
            await axios.put("http://localhost:3000/user/" + song._id + "/like", {}, { headers })
            if (like) {
                setlike(false)
                dispatch({ type: "LIKE", payload: song._id })
            }
            else {
                setlike(true)
                dispatch({ type: "UNLIKE", payload: song._id })
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
                <button onClick={handeleLike}  ><img className='like' src={like ? "asset/like.png" : "asset/unlike.png"} id={song._id} /></button>

            </div>

        </div>

    )



}   