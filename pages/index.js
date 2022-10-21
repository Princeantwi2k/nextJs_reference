import Head from 'next/head'
import React,{useState} from 'react'
import Content from '../component/Content/Content'
import Sidebar from '../component/Sidebar'
import styles from "../styles/Login.module.css"
import LoginPic from "../component/Images/login.png"
import Login from "../component/Images/loginimage.png"
import Image from 'next/image'


export default function Home() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");


    const handleSubmit = (e) => {
      e.preventDefault();
     
    
    };
  return (


    <div className={styles.login}>
<div className={styles.left}>
  <Image src={LoginPic} alt="" width={700}  height={500} />
  <h3>Manage all categories</h3>
  <p>Add products,customer trnsactions, daily auctions and biddings report on customers etc</p>
</div>
   <div className={styles.right}>
    <form onSubmit={handleSubmit} >
      <h3>Welcome!</h3>
      <label>Username</label><br />
      <input type="text"  placeholder="Adimin kojo" onChange={(e) => setUserName(e.target.value)} /><br />
      
      <label>Password</label><br />
      <input type="password"  placeholder="********" onChange={(e) => setPassword(e.target.value)} /> <br />
       <p>Forgot password?</p>
      <button>Login</button>

    </form>
   </div>
    </div>
  )
}
