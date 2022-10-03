import React ,{useEffect} from 'react'
import {getProviders,getSession} from 'next-auth/react'
import BtnLogin from '../component/BtnLogin/BtnLogin';
import Router from 'next/router'
import styles from '../styles/Home.module.css'


function Login({providers,session}) {
    

    // useEffect(()=>{
    //     if(session) return Router.push('/')
    // },[session])

    if(session) return null;
  return (
    <div  className={styles.BtnLogin}>
        <div style={{maxWidth:'450px', width :'100%'}} className="border border-1 max-auto p-4 shadow">
            <h2 className='text-center fw-bolder text-uppercase' style={{color:'#555',letterSpacing:'1px'}}>
                Welcome 
            </h2>
            <p className='text-center'>Login</p>

          
            <BtnLogin 
            provider={providers.cognito}
            bgColor = '#f2573f'
            />
          
        </div>
    </div>
  )
}

Login.getInitialProps = async (context) =>{
    return {
        providers: await getProviders(context),
        session: await getSession(context)
    }
}
export default Login