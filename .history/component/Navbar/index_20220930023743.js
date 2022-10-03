
import React from 'react'
import styles from "../../styles/Navbar.module.css"
import { getProviders,getSession,signIn,signOut } from 'next-auth/react'
import Link from 'next/link'



function Navbar({providers,session}) {
  
  
  

  
  if(session){
    return(
      <>
      <div className={styles.navcontainer}>
    <div className={styles.nav}>
   <Link href="/"  ><p>logo</p></Link> 
<form className={styles.navform}>
    <input type="text"  placeholder="what are you looking for"  className={styles.navInput} />
    <button className='btn btn-default'>
    <i className="bi bi-search"></i>
    </button>
    
</form>
    </div>
   
  
<div className="dropdown">
  <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <i className="bi bi-person-circle"></i>  {session.user.email}
  </button>
 
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" onClick={()=>signOut()}> Sign out</a></li>
    
  </ul>
</div>
</div>
      </>
    )
  }

  return (
    <>
<div className={styles.navcontainer}>
    <div className={styles.nav}>
   <Link href="/"  ><p>logo</p></Link> 
<form className={styles.navform}>
    <input type="text"  placeholder="what are you looking for"  className={styles.navInput} />
    <button className='btn btn-default'>
    <i className="bi bi-search"></i>
    </button>
    
</form>
    </div>
   
  
<div className="dropdown">
  <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <i className="bi bi-person-circle"></i>  signup
  </button>
 
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" onClick={()=>signIn()}>signIn</a></li>

    
  </ul>
</div>
</div>
</>
  )
}

Navbar.getInitialProps = async (context) =>{
  return {
      providers: await getProviders(context),
      session: await getSession(context)
  }
}

export default Navbar