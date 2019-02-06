import React from 'react'
import Play from 'react-feather/dist/icons/play'
import BarChart from 'react-feather/dist/icons/bar-chart'
import BarChart2 from 'react-feather/dist/icons/bar-chart-2'
import Clock from 'react-feather/dist/icons/clock'
import './Mp3Card.scss'

const getWaves = () => [
  <BarChart key={0} size={20} />,
  <BarChart2 key={1} size={10} />,
  <BarChart key={2} size={15} />,
  <BarChart2 key={3} size={10} />,
  <BarChart2 key={4} size={15} />,
  <BarChart key={5} size={20} />,
  <BarChart key={6} size={20} />,
  <BarChart key={7} size={15} />,
  <BarChart key={8} size={10} />,
  <BarChart2 key={9} size={20} />,
  <BarChart key={10} size={5} />,
]

const Mp3Card = ({ length, title, time}) => {
  return (
    <div className='Mp3Card'>
      <span className='length'>{length}</span>

      <div className='audio'>
        <span className='playButton'>
          <Play size={14} fill='true' />
        </span>

        <div className='waves'>
          <div className='upperWave'>
            {getWaves()}
          </div>

          <div className='lowerWave'>
            {getWaves()}
          </div>
        </div>
      </div>

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

export default Mp3Card
