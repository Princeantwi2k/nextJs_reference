import React from 'react'
import styles from "../../styles/Home.module.css"
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'



function Layout({children}) {
  return (
    <>
  <Navbar />
 <Sidebar />
    <div className={styles.container}>
        <main className={styles.main}></main>{children}
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossOrigin="anonymous" ></script>
    </>
  )
}

export default Layout