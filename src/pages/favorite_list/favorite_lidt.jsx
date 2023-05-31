import "./favorite_list.css"
import Topbar from "../../components/top_bar/Topbar"
import Favorite from "../../components/favorites/favorite"
import Feed from "../../components/feed/Feed"
import { useEffect, useState } from "react"
//import { headers } from "../../apiCalls"
import axios from "axios"

export default function FavoriteList() {
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("token") };
    const [songs, setSongs] = useState([])
    useEffect(() => {

        const fetchSong = async () => {
            const res = await axios.get("http://localhost:3000/user/favorite", { headers })
            //console.log(headers)
            setSongs(res.data)
        }
        fetchSong()
    })
    return (
        <div>
            <Topbar />
            <Favorite />
            <Feed Data={songs} />





        </div>
    )
}