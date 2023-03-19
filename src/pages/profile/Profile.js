import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import "./profile.scss";
import Feed from "./../../components/feed/Feed";
import Rightbar from "./../../components/rightbar/Rightbar";
import Navbar from "../../components/navbar/Navbar";
import ProfileCover from "../../assets/profileCover/profilecover.jpg"
import Person from "../../assets/person/user.JPG";

const Profile = () => {
  return (
    <div className="profile">
    <Navbar />
    <div className="profileWrapper">
      <Sidebar />
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img
              src={ProfileCover}
              alt=""
              className="profileCoverImg"
            />
            <img
              src={Person}
              alt=""
              className="profileUserImg"
            />
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">Amber Logan</h4>
            <span className="profileInfoDesc">Hi Friends!</span>
          </div>
        </div>
        <div className="profileRightBottom">
          <Feed />
          <Rightbar profile />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Profile
