import React from 'react'
import Scheduled from '../component/DashboardScheduled/Schedule'
import Navbar from '../component/Navbar'
import Sidebar from '../component/Sidebar'

export default function ScheduledPage() {
  return (
    <div>
      <Navbar />
      <Sidebar />
        <Scheduled />
    </div>
  )
}
