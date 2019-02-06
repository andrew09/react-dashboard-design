import React from 'react'
import './DashboardSummaryListItem.scss'

const DashboardSummaryListItem = ({
  label = '',
  aggregate = true,
  count,
  img = false,
  imgSrc,
  text = '',
  key,
}) => (
  <li className='DashboardSummaryListItem' key={key}>
    <p>{label}</p>

    <span>
      {
        aggregate && (typeof count !== 'undefined') && (
          <h2>{count}</h2>
        )
      }

      {
        img && imgSrc && (
          <img src={imgSrc} alt={text} />
        )
      }

      <h3>{text}</h3>
    </span>
  </li>
)

export default DashboardSummaryListItem
