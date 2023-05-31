import "./search"
import SearchIcon from '@mui/icons-material/Search';
export default function Search({ handeleSerch }) {
    return (
        <div className="searchbar">
            <SearchIcon className='searchIcon' />
            <input placeholder="search for artist" className="searchInput" onChange={handeleSerch} />
        </div>
    )

}