import React from 'react'
import "./rightbarhome.scss";
import { Usersonline } from "../../data";
import BirthdayImg from "../../assets/birthdaygifts/gift.png"
import Online from '../online/Online';


const RightBarHome = () => {
  return (
    <div className='rightbarhome'>
      <div className='birthdayContainer'>
        <img src={BirthdayImg}
            className="birthdayImg"
        />
        <span className="birthdayText">
          <b>Sarah Dane</b> and <b>other friends</b> have a birthday today
        </span>
      </div>
      <img src="/assets/ads/adv.jpg" alt="" className="rightbarAdvert" />

      <span className="rightbarTitle">Online Friends</span>
      <Online />
      
    </div>
  )
}

export default RightBarHome
