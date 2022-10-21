import React ,{useEffect} from 'react'
import {useSession,signIn,signOut} from 'next-auth/react'
import BtnLogin from '../component/BtnLogin/BtnLogin';
import Router from 'next/router'
import styles from '../styles/Home.module.css'


function Login() {
    const {data:session } =useSession()

   if(session){
    return(
        <div> welcome,{session.user.email}
              <button onClick={()=> signOut()}>Sign out</button>
        </div>
    )
   }else {
    
        return (
                <div  className={styles.BtnLogin}>
                    <div style={{maxWidth:'450px', width :'100%'}} className="border border-1 max-auto p-4 shadow">
                        <h2 className='text-center fw-bolder text-uppercase' style={{color:'#555',letterSpacing:'1px'}}>
                            Welcome 
                        </h2>
                        <p className='text-center'>Login</p>
            
                      
                     <button onClick={()=>signIn()}>Sign with Google</button>
                      </div>
                    </div>
                
    )

   

}
}

export default Login