import React from 'react'
import styles from "../../styles/Home.module.css"
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'



function Layout({children}) {
  return (
    <>
  <Navbar />
 
    <div className={styles.container}>
        <main className={styles.main}></main>{children}
    </div>
    </>
  )
}

export default Layout