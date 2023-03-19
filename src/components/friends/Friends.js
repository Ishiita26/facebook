import React from 'react'
import "./friends.scss"
import Friend1 from "../../assets/person/friend1.jpg"
import Friend2 from "../../assets/person/friend2.jpg"
import Friend3 from "../../assets/person/friend3.jpg"
import Friend4 from "../../assets/person/friend4.jpg"

const Friends = () => {
  return (
    <div>
      <li className="sidebarFriend">
            <img src={Friend1} className="sidebarFriendImg"/>
            <span className="sidebarFriendName">Rashi_1999</span>
        </li>
        <li className="sidebarFriend">
            <img src={Friend2} className="sidebarFriendImg"/>
            <span className="sidebarFriendName">Aparana Mishra</span>
        </li>
        <li className="sidebarFriend">
            <img src={Friend3} className="sidebarFriendImg"/>
            <span className="sidebarFriendName">Jannie23</span>
        </li>
        <li className="sidebarFriend">
            <img src={Friend4} className="sidebarFriendImg"/>
            <span className="sidebarFriendName">Amber_Thomas32</span>
        </li>
    </div>
  )
}

export default Friends
