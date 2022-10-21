import React from 'react'
import Navbar from '../component/Navbar'
import Sidebar from '../component/Sidebar'
import Content from '../component/Content/Content'

function dashboad() {
  return (
    <>
    <Navbar  />
    <Sidebar />
      <div>      
      <Content />

    </div>
    
    </>
  )
}

export default dashboad