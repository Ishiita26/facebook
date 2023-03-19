import React from 'react'
import "./rightbar.scss"
import RightBarHome from '../rightbarhome/RightBarHome'

const Rightbar = () => {
  return (
    <div className='rightbar '>
        <div className='rightbarWrapper'>
          <RightBarHome />
        </div>
    </div>
  )
}

export default Rightbar
