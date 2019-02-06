import React from 'react'
import Clock from 'react-feather/dist/icons/clock'
import './PhotoCard.scss'

const PhotoCard = ({ size, title, time}) => {
  return (
    <div className='PhotoCard'>
      <span>{size}</span>

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

export default PhotoCard
