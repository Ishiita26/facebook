import React from "react";
import "./sidebar.scss";
import MenuLink from "../menulink/MenuLink";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import VideocamIcon from '@mui/icons-material/Videocam';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EventIcon from '@mui/icons-material/Event';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LogoutIcon from '@mui/icons-material/Logout';
import Friends from "../friends/Friends";



const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
      <MenuLink Icon={<RssFeedIcon/>} text="Feed"/>
      <MenuLink Icon={<ChatIcon/>} text="Chats"/>
      <MenuLink Icon={<VideocamIcon/>} text="Videos"/>
      <MenuLink Icon={<GroupIcon/>} text="Friends"/>
      <MenuLink Icon={<BookmarkIcon/>} text="Bookamrks"/>
      <MenuLink Icon={<ShoppingCartIcon/>} text="Marketplace"/>
      <MenuLink Icon={<EventIcon/>} text="Events"/>
      <MenuLink Icon={<DarkModeIcon/>} text="Theme"/>
      <MenuLink Icon={<LogoutIcon/>} text="Logout( Aashi )"/>
      
      <button className="sidebarButton">Show More</button>
      <hr className="sidebarHr"/>
      <ul className="sidebarFriendList">
        <Friends />
      </ul>
       

        {/* <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedIcon className="sidebarIcon" />
            <span className="sideListItemText">Feed</span>
          </li>

          <li className="sidebarListItem">
            <ChatIcon className="sidebarIcon" />
            <span className="sideListItemText">Chat</span>
          </li>

          <li className="sidebarListItem">
            <VideocamIcon className="sidebarIcon" />
            <span className="sideListItemText">Videos</span>
          </li>

          <li className="sidebarListItem">
            <GroupIcon className="sidebarIcon" />
            <span className="sideListItemText">Friends</span>
          </li>

          <li className="sidebarListItem">
            <BookmarkIcon className="sidebarIcon" />
            <span className="sideListItemText">Bookmarks</span>
          </li>

          <li className="sidebarListItem">
            <ShoppingCartIcon className="sidebarIcon" />
            <span className="sideListItemText">Marketplace</span>
          </li>

          <li className="sidebarListItem">
            <EventIcon className="sidebarIcon" />
            <span className="sideListItemText">Events</span>
          </li>

          <li className="sidebarListItem">
            <DarkModeIcon className="sidebarIcon" />
            <span className="sideListItemText">Theme</span>
          </li>

          <li className="sidebarListItem">
            <LogoutIcon className="sidebarIcon" />
            <span className="sideListItemText">Logout( Aashi )</span>
          </li>
          
        </ul> */}
      </div>
    </div>
  );
};

export default Sidebar;
