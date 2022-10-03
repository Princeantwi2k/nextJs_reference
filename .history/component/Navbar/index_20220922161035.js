import Image from 'next/image'
import React from 'react'
import styles from "../../styles/Home.module.css"



function Navbar() {
  return (
    <>
<div className={styles.navContainer}>
    <div className={styles.nav}>
    <p>logo</p>
<form className={styles.navform}>
    <input type="text"  placeholder="what are you looking for"  className={styles.navInput} />
    <button className='btn btn-default'>
    <i className="bi bi-search"></i>
    </button>
    
</form>


    </div>

<div className="dropdown">
  <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <i className="bi bi-person-circle"></i>  Admin
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="/login">Login</a></li>
    <li><a className="dropdown-item" href="#">Logout</a></li>
    
  </ul>
</div>
</div>
</>
  )
}

export default Navbar