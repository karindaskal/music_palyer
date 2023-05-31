import './artist.css'
export default function Artist({ artist }) {
    return (
        <div className="artist">
            <span className='detsil'>artist Name: {artist.artis_name}</span>
            <br />
            <span className='detsil'>artist id: {artist._id}</span>

        </div>

    )
}