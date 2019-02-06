import React from 'react'
import BankSummary from './BankSummary'
import BankActivity from './BankActivity'
import AutoPay from './AutoPay'
import './RightSidebar.scss'

const RightSidebar = () => (
  <div className='RightSidebar'>
    <BankSummary />
    <BankActivity />
    <AutoPay />
  </div>
)

export default RightSidebar
