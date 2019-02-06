import React from 'react'
import DocCard from './types/DocCard'
import PhotoCard from './types/PhotoCard'
import VideoCard from './types/VideoCard'
import Mp3Card from './types/Mp3Card'
import './Card.scss'

export const DOC = 'doc'
export const PHOTO = 'photo'
export const VIDEO = 'video'
export const MP3 = 'mp3'
export const MICROSOFT_WORD = 'microsoftWord'
export const PDF = 'pdf'

const COMPONENT_MAP = {
  [DOC]: DocCard,
  [PHOTO]: PhotoCard,
  [VIDEO]: VideoCard,
  [MP3]: Mp3Card,
}

const Card = ({ type, key, props }) => {
  const CardType = COMPONENT_MAP[type]

  return (
    <div className='Card' key={key}>
      <CardType {...props} />
    </div>
  )
}

export default Card
