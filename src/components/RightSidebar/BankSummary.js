import React from 'react'
import Condition from 'react-feather/dist/icons/activity'
import BarChart from 'react-feather/dist/icons/codepen'
import visaLogo from '../../assets/visa-logo.png'
import creditCardChip from '../../assets/credit-card-chip.png'
import './BankSummary.scss'

const BankSummary = () => (
  <div className='BankSummary'>
    <div className='visaCard'>
      <BarChart size={310} />

      <img className='visaLogo' src={visaLogo} alt='Visa Logo' />

      <img className='creditCardChip' src={creditCardChip} alt='Credit Card Chip' />

      <h4>5600 6910 6800 0202</h4>

      <div className='meta'>
        <span className='cardHolder'>
          <p>Card Holder</p>
          <h4>Ujang Soledat</h4>
        </span>

        <span className='expiry'>
          <p>Expires</p>
          <h4>12/20</h4>
        </span>
      </div>
    </div>

    <div className='summary'>
      <span>
        <p>Total Balance</p>
        <h3>$2800</h3>
      </span>

      <span>
        <p>Condition</p>

        <span className='conditionContent'>
          <Condition />
          <Condition />

          <span className='conditionPill'>
            <p>+2.8%</p>
          </span>
        </span>
      </span>
    </div>
  </div>
)

export default BankSummary
