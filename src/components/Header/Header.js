import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Header = () => {
    return (
        <div className="header">

            <div className="header_left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />

                <div className="header_search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>

            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar="data:image/jpeg;base64,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" title="Me" />
            </div>
        </div>
    )
}

export default Header