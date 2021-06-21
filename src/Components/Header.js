import React, { useState } from 'react'
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {

    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className="header">
            <div className="header__logo">
                <MenuIcon />
                <Link to="/">
                    <img className="header__logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJF7SUTRrMxFZ_umQeGvLBQrqA4VI_pRrTQ&usqp=CAU" alt="" />
                </Link>
            </div>

            <div className="header__input">
                <form >
                    <input onChange={e => setInputSearch(e.target.value)} type="text" className="header__searchField" placeholder="Search" value={inputSearch} />
                    <Link to={`/search/${inputSearch}`}>
                        <button type="submit" className="hiddenButton"> </button>
                        <SearchIcon className="header__inputButton" />
                    </Link>
                </form>
            </div>

            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar
                    alt="Rick"
                    src="https://wallpapercave.com/wp/wp9306886.jpg"
                />
            </div>
        </div>
    );
}

export default Header
