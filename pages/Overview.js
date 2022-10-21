import React from 'react'
import OverView from '../component/Dashboard Overview/Overview'
import Navbar from '../component/Navbar'
import Sidebar from '../component/Sidebar'

function Overview() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <OverView />
    </div>
  )
}

export default Overview
