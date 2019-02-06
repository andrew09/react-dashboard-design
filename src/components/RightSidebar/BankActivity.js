import React from 'react'
import ArrowUp from 'react-feather/dist/icons/arrow-up'
import ArrowDown from 'react-feather/dist/icons/arrow-down'
import './BankActivity.scss'

const POSITIVE = 'positive'
const NEGATIVE = 'negative'
const MONTHLY_INCOME = 'Monthly Income'
const NYAGU_PROJECT = 'Nyagu Project'
const BUY_NEW_TV = 'Buy New TV'
const BOLED_PROJECT = 'Boled Project'
const BUY_SANGU = 'Buy Sangu'

const TRANSACTIONS = [
  {
    difference: POSITIVE,
    description: MONTHLY_INCOME,
    date: '10/04/2018',
    amount: '+$3500',
    key: MONTHLY_INCOME,
  },
  {
    difference: POSITIVE,
    description: NYAGU_PROJECT,
    date: '10/04/2018',
    amount: '+$1240',
    key: NYAGU_PROJECT,
  },
  {
    difference: NEGATIVE,
    description: BUY_NEW_TV,
    date: '09/04/2018',
    amount: '-$4250',
    key: BUY_NEW_TV,
  },
  {
    difference: POSITIVE,
    description: BOLED_PROJECT,
    date: '08/04/2018',
    amount: '+$4230',
    key: BOLED_PROJECT,
  },
  {
    difference: NEGATIVE,
    description: BUY_SANGU,
    date: '07/04/2018',
    amount: '-$1280',
    key: BUY_SANGU,
  },
]

const ICON_MAP = {
  [POSITIVE]: ArrowUp,
  [NEGATIVE]: ArrowDown,
}

const BankActivityTransaction = ({ description, date, amount, difference, key }) => {
  const Icon = ICON_MAP[difference]

  return (
    <li key={key}>
      <div className='difference'>
        <Icon className={difference} size={18} />
      </div>
      
      <div className='details'>
        <p>{description}</p>
        <p>{date}</p>
      </div>

      <span className={difference}>{amount}</span>
    </li>
  )
}

const BankActivity = () => (
  <div className='BankActivity'>
    <div className='heading'>
      <h3>Activity</h3>
      <span>More</span>
    </div>

    <ul>
      {
        TRANSACTIONS.map(BankActivityTransaction)
      }
    </ul>
  </div>
)

export default BankActivity
