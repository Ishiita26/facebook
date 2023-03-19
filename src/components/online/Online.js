import React from "react";
import "../sidebar/sidebar.scss";
import "../friends/friends.scss";
import Person6 from "../../assets/person/person6.jpg";
import Person7 from "../../assets/person/person7.jpg";
import Person8 from "../../assets/person/person8.jpg";
import Person4 from "../../assets/person/person4.jpg";
import Friend4 from "../../assets/person/friend4.jpg";
import Friend5 from "../../assets/person/friend5.jpg";
import Friend6 from "../../assets/person/friend6.jpg";
import Friend7 from "../../assets/person/friend7.jpg";
import Friend12 from "../../assets/person/friend32.jpg";
import Person5 from "../../assets/person/person5.jpg";
import online from "../../assets/person/online.png";

const Online = () => {
  const styles = {
    fontSize: "10px",
    margin: "10px",
  };
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarFriendList">
          {/* <Friends /> */}
          <div>
            <li className="sidebarFriend">
              <img src={Friend5} className="sidebarFriendImg" />
              <span className="sidebarFriendName">Rashi_1999</span>
              <img
                src={online}
                alt=""
                className="storyadd"
                style={{ height: "20px", width: "20px" }}
              />
            </li>
            <li className="sidebarFriend">
              <img src={Friend4} className="sidebarFriendImg" />
              <span className="sidebarFriendName">
                Aparana Mishra
                <span style={styles}> 23mins ago</span>
              </span>
            </li>
            <li className="sidebarFriend">
              <img src={Friend6} className="sidebarFriendImg" />
              <span className="sidebarFriendName">Jannie23</span>
              <img
                src={online}
                alt=""
                className="storyadd"
                style={{ height: "20px", width: "20px" }}
              />
            </li>
            <li className="sidebarFriend">
              <img src={Friend7} className="sidebarFriendImg" />
              <span className="sidebarFriendName">
                Amber_Thomas32
                <span style={styles}> Just Now</span>
              </span>
            </li>
            <li className="sidebarFriend">
              <img src={Friend12} className="sidebarFriendImg" />
              <span className="sidebarFriendName">Rishab Tiwari</span>
              <img
                src={online}
                alt=""
                className="storyadd"
                style={{ height: "20px", width: "20px" }}
              />
            </li>
            <li className="sidebarFriend">
              <img src={Person4} className="sidebarFriendImg" />
              <span className="sidebarFriendName">
                Ishani Saxena
                <span style={styles}> 2mins ago</span>{" "}
              </span>
            </li>
            <li className="sidebarFriend">
              <img src={Person6} className="sidebarFriendImg" />
              <span className="sidebarFriendName">
                Ashiya Rathore
                <span style={styles}> 45mins ago</span>
              </span>
            </li>
            <li className="sidebarFriend">
              <img src={Person7} className="sidebarFriendImg" />
              <span className="sidebarFriendName">
                Vivek Jaiswal
                <span style={styles}> Just Now</span>
              </span>
            </li>
            <li className="sidebarFriend">
              <img src={Person8} className="sidebarFriendImg" />
              <span className="sidebarFriendName">
               Shruti Samera
                <span style={styles}> 1mins ago</span>
              </span>
            </li>
            <li className="sidebarFriend">
              <img src={Friend6} className="sidebarFriendImg" />
              <span className="sidebarFriendName">
                Vrushi Singh
                <img
                  src={online}
                  alt=""
                  className="storyadd"
                  style={{ height: "20px", width: "20px" }}
                />
              </span>
            </li>
            <li className="sidebarFriend">
              <img src={Person6} className="sidebarFriendImg" />
              <span className="sidebarFriendName">
                Ananta Sama
                <span style={styles}> 13mins ago</span>
              </span>
            </li>
            <li className="sidebarFriend">
              <img src={Friend4} className="sidebarFriendImg" />
              <span className="sidebarFriendName">Ritika Jain</span>
              <img
                src={online}
                alt=""
                className="storyadd"
                style={{ height: "20px", width: "20px" }}
              />
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Online;
