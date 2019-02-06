import React from 'react'
import LeftSidebar from './components/LeftSidebar/LeftSidebar'
import DashboardContent from './components/DashboardContent/DashboardContent'
import RightSidebar from './components/RightSidebar/RightSidebar'
import './App.scss'

const App = () => (
  <div className='App'>
    <LeftSidebar />
    <DashboardContent />
    <RightSidebar />
  </div>
)

export default App
