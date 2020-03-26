import React from 'react';
import './Header.css'
import {Link} from "react-router-dom";
import { useTranslation } from 'react-i18next'

const Header = (props) => {
    const [link, setLink] = React.useState("data");
    const [t, i18n] = useTranslation();

    const changeLang = () => {
        if (props.lang === "en") {
            i18n.changeLanguage("zh")
            props.handleLangChange("zh")
        } else {
            i18n.changeLanguage("en")
            props.handleLangChange("en")
        }
    } 
    return (
        <div className="header">
            <div className="logo">
                <div className="header-title">{t('title.label')}</div>
                <div className="header-title">{t('subtitle.label')}</div>
                <div >
                    <div className="updated">{t('update.label')}: {props.updateAt}</div>
                    <button className="lang-button" onClick={changeLang}>{props.lang === "en" ? "中文" : "English"}</button>
                </div>
            </div>
            <ul className="nav-links">
                <li>
                   <Link to="/" className={(link === "data" ? "link-active" : "")} onClick={() => setLink("data")}>{t('data.label')}</Link>
                </li>
                <li>
                    <Link to="/news" className={(link === "news" ? "link-active" : "")} onClick={() => setLink("news")}>{t('news.label')}</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;