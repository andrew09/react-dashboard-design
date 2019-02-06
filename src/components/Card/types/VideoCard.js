import React from 'react'
import Play from 'react-feather/dist/icons/play'
import Clock from 'react-feather/dist/icons/clock'
import './VideoCard.scss'

const VideoCard = ({ length, title, time}) => {
  return (
    <div className='VideoCard'>
      <span className='length'>{length}</span>

      <span className='playButton'>
        <Play size={24} fill='true' />
      </span>

      <div className='data'>
        <h3>{title}</h3>

        <div className='time'>
          <Clock size={20} />

          <span>{time}</span>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
