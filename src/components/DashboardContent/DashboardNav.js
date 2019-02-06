import React from 'react'
import More from 'react-feather/dist/icons/more-horizontal'
import Search from 'react-feather/dist/icons/search'
import Bell from 'react-feather/dist/icons/bell'
import './DashboardNav.scss'

const NAV_ITEMS = [
  {
    label: 'General',
    active: false,
  },
  {
    label: 'Documents',
    active: true,
  },
  {
    label: 'Notes',
    active: false,
  },
]

const ICON_SIZE = 24
const LARGE_ICON_SIZE = 28

const DashboardNav = () => (
  <div className='DashboardNav'>
    <h2>Dashboard</h2>

    {
      NAV_ITEMS.map(({ label, active }) => {
        const className = active ? 'active' : ''

        return <p className={className} key={label}>{label}</p>
      })
    }

    <More size={LARGE_ICON_SIZE} />

    <div className='endIcons'>
      <Search size={ICON_SIZE} />

      <Bell size={ICON_SIZE} />

      <div className='alertDot' />
    </div>
  </div>
)

export default DashboardNav
