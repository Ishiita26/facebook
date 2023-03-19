import React from "react";
import "./share.scss";
import Person from "../../assets/person/user.JPG";
import CollectionsIcon from '@mui/icons-material/Collections';
import { EmojiEmotions, VideoCameraFront } from "@mui/icons-material";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src={Person} className="shareProfileImg" />
          <input
            type="text"
            placeholder="What's on your mind Aashi ?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <VideoCameraFront className="shareIcon" 
                style={{ color : "#bb0000f2"}}
              />
              <span className="shareOptionText">Live Video</span>
            </div>
            <div className="shareOption">
              <CollectionsIcon className="shareIcon" 
                 style={{ color : "blue"}}
              />
              <span className="shareOptionText">Photo/Video</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions className="shareIcon"
               style={{ color : "#bfc600ec"}} />
              <span className="shareOptionText">Feeling/Activity</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
