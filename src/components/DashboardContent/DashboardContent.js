import React from 'react'
import DashboardNav from './DashboardNav'
import DashboardSummaryList from './DashboardSummaryList'
import DocumentsGrid from './DocumentsGrid'
import './DashboardContent.scss'

const DashboardContent = () => (
  <div className='DashboardContent'>
    <DashboardNav />
    <DashboardSummaryList />
    <DocumentsGrid />
  </div>
)

export default DashboardContent
