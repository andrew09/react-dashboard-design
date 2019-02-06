import React from 'react'
import Layout from 'react-feather/dist/icons/layout'
import User from 'react-feather/dist/icons/user'
import Calendar from 'react-feather/dist/icons/calendar'
import Mail from 'react-feather/dist/icons/mail'
import Cloud from 'react-feather/dist/icons/cloud'
import Sliders from 'react-feather/dist/icons/sliders'
import Logout from 'react-feather/dist/icons/log-out'
import profilePic from '../../assets/profile-pic.png'
import './LeftSidebar.scss'

const NAV_ICONS = [
  Layout,
  User,
  Calendar,
  Mail,
  Cloud,
  Sliders,
]

const ICON_SIZE = 24

const LeftSidebar = () => (
  <div className='LeftSidebar'>
    <div className='profilePic'>
      <img src={profilePic} alt='Profile' />

      <div className='activeDot' />
    </div>

    <div className='navIcons'>
      {
        NAV_ICONS.map((Icon, index) => (
          <Icon size={ICON_SIZE} key={index} />
        ))
      }
    </div>

    <div className='logout'>
      <Logout size={ICON_SIZE} />
    </div>
  </div>
)

export default LeftSidebar
