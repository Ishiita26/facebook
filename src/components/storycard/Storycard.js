import React from 'react'
import "./storycard.scss"


const Storycard = ({ user }) => {
  return (
    <div className='storycard'>
      
      <img src={user.profilepicture} className="storyProfile"/>
      <img src={user.profilepicture} className="storybackground"/>
      <span className='text'>{user.username}</span>
    
    </div>
  )
}

export default Storycard
