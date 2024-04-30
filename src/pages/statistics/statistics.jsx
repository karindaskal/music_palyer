
import Topbar from "../../components/top_bar/Topbar"
import { getfavoriteSongs } from "../../apiCalls"
import { useEffect, useState } from "react"
export default function statistics() {
    const [songs, setSongs] = useState([])
    useEffect(() => {

        const fetchSong = async () => {
            const res = await getfavoriteSongs()

            setSongs(res.data)

        }
        fetchSong()
    })
    return (
        <div>
            <Topbar />

        </div>
    )
}
