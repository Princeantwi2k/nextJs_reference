import React from 'react'
import Iterm from '../component/DashboardScheduled/Iterm'
import Navbar from '../component/Navbar'
import Sidebar from '../component/Sidebar'

function Item() {
  return (
    <>
    <Navbar />
    <Sidebar />
        <Iterm />
    </>
  )
}

export default Item