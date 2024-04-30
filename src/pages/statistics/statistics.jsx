import Topbar from "../../components/top_bar/Topbar";
import Grap from "../../components/grap/grap";
import { Chart as chartJs } from "chart.js/auto"

import { getfavoriteSongs } from "../../apiCalls";
import { useEffect, useState } from "react";

export default function Statistics() {
    const [songs, setSongs] = useState([]);
    const [artist, setSArtist] = useState([]);
    const [songLabels, setSongLabels] = useState([]);
    const [songCount, setSongCount] = useState([]);

    useEffect(() => {
        const fetchSongs = async () => {
            const res = await getfavoriteSongs();
            setSongs(res.data);
        };

        fetchSongs();
    }, []);


    useEffect(() => {
        const getLabels = async () => {
            let labels = [];
            let count = []
            songs.forEach((s) => {
                labels.push(s.song[0].song_title);
                count.push(s.count)
            });
            setSongLabels(labels);
            setSongCount(count)
        };

        getLabels();
    }, [songs]);

    return (
        <div>
            <Topbar />
            <div className="headline">most favorite song</div>
            {songLabels.length > 0 && <Grap labels={songLabels} count={songCount} />}

        </div>
    );
}
