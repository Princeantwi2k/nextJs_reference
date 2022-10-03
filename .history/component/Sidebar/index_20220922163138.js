import React from 'react'
import styles from "../../styles/Sidebar.module.css"

import Link from 'next/link';


function Sidebar() {
  return (
    <nav className={styles.navcontainer} >
    
      <div className={styles.wrapper}>
				<ul>
					<li>
					<Link href="/">
						Dashboard
						</Link>
					</li>
					<li>	
					<Link href="/user">	User Profile</Link>
					</li>
					<li>
					 <Link href='/table'>Table List</Link>	
					</li>
					<li>
					 <Link href="/icon">Icons</Link>	
					</li>
					<li>
						<Link href="/maps">
                            Maps
                            </Link>
					</li>
					<li>
					<Link href="/notification"> Notifications</Link>
					</li>
					<li>
					
					  <Link href="/logout">Logout</Link>	
					</li>
				</ul>
      </div>
	
    </nav>
  )
}

export default Sidebar;