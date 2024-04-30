import React from "react";
import Topbar from "../../components/top_bar/Topbar";
import Feed from "../../components/feed/Feed";
import Search from "../../components/search/search";
import { useEffect, useState } from "react"
import axios from "axios"

export default function Home() {
    const [songs, setSongs] = useState([])
    const [searchfield, setSearchfield] = useState(" ");
    useEffect(() => {

        const fetchSong = async () => {
            //  const res = await axios.get("http://localhost:3000/song")
            const res = await axios.get(`http://localhost:3000/song?artisname=${searchfield}`);

            setSongs(res.data)
        }
        fetchSong()
    }, [searchfield])
    const handeleSerch = async (event) => {
        // console.log(event.target.value)
        // const res = await axios.get(`http://localhost:3000/song?artisname=${event.target.value}`);
        //setSongs(rea.data)
        setSearchfield(event.target.value)


    }
    // const filteredData = (async () => {
    //     return await axios.get(`http://localhost:3000/song?artisname=${searchfield}`);

    // })

    return (
        <div className="home">
            <>

                <Topbar />
                <Search handeleSerch={handeleSerch} />

                <Feed Data={songs} />
            </>
        </div>



    );
} 