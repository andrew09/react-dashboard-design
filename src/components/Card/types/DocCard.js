import React from 'react'
import Clock from 'react-feather/dist/icons/clock'
import { MICROSOFT_WORD, PDF } from '../Card'
import './DocCard.scss'

const DocCard = ({ type, title, content, time}) => {
  const docCardClassName = `DocCard ${type}`

  return (
    <div className={docCardClassName}>
      <h3>{title}</h3>

      <p>{content}</p>

      <div className='time'>
        <Clock size={20} />

        <span>{time}</span>
      </div>

      <div className='logo'>
        {
          type === MICROSOFT_WORD && 'W'
        }

        {
          type === PDF && 'PDF'
        }
      </div>
    </div>
  )
}

export default DocCard
