import React from 'react';
import './Header.css'
import {Link} from "react-router-dom";

const Header = (props) => {
    const [link, setLink] = React.useState("data")

    return (
        <div className="header">
            <div className="logo">
                <div className="header-title">COVID - 19</div>
                <div className="header-title">GLOBAL UPDATE</div>
                <div className="updated">Last Updated: {props.updateAt}</div>
            </div>
            <ul className="nav-links">
                <li>
                   <Link to="/" className={(link === "data" ? "link-active" : "")} onClick={() => setLink("data")}>Data</Link>
                </li>
                <li>
                    <Link to="/news" className={(link === "news" ? "link-active" : "")} onClick={() => setLink("news")}>News</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;