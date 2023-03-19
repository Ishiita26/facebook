import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Person from "../../assets/person/user.JPG";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <span className="logo">SocioMeet</span>
      </div>
      <div className="navbarCenter">
        <div className="searchBar">
          <SearchIcon className="searchIcon" />
          <input
            type="text"
            placeholder="Search for friends post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="navbarRight">
        <div className="navbarLinks">
          <span className="navbarLink">HomePage</span>
          <span className="navbarLink">Timeline</span>
        </div>
        <div className="navbarIcons">
          <div className="navbatIconItem">
            <PersonIcon />
            <span className="navbarIconBadge">2</span>
          </div>
          <div className="navbatIconItem">
            <ChatBubbleIcon />
            <span className="navbarIconBadge">8</span>
          </div>
          <div className="navbatIconItem">
            <NotificationsIcon />
            <span className="navbarIconBadge">10</span>
          </div>
        </div>
        <img src={Person} className="navbarImg"/>
      </div>
    </div>
  );
};

export default Navbar;
