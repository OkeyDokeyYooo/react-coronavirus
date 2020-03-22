import React from 'react';
import './Header.css'
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <div className="header">
            <div className="logo">
                <div className="title">COVID - 19</div>
                <div className="title">GLOBAL UPDATE</div>
                <div className="updated">Last Updated: {props.updateAt}</div>
            </div>
            <ul className="nav-links">
                <li>
                   <Link to="/" >Data</Link>
                </li>
                <li>
                    <Link to="/news">News</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;