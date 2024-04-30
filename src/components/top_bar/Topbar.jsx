import './topbar.css'
import { Link } from "react-router-dom"

import SearchIcon from '@mui/icons-material/Search';
export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/">
                    <span className="logo">music</span>
                </Link >
            </div>

            <div className="topbarCenter">

            </div>
            <div className="topbarRight">
                <Link to="/statistics">
                    <span className="topbarLink">statistics</span>
                </Link>
                <Link to="/favorite">
                    <span className="topbarLink">favorites</span>
                </Link>
            </div>
        </div>
    )

}