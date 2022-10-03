import React from 'react'
import styles from "../../styles/Home.module.css"
import Card from 'react-bootstrap/Card';

function Content() {

  const content = [
    {
      icon: <i className="bi bi-house-door"></i>,
      name: "Welcome Admin",
      contents:"Get familiar with the dashboard, here are some Ways to get started",
       comment:"Get started",
       id:"1"
    },
    {
      icon:<i className="bi bi-arrow-clockwise"></i>,
      name: "Reset password",
      contents: "Need to reset your password? No Problem! just click the button below and you'ill be on your way",
       comment:<p  className={styles.cardlink} >Click to reset</p>,
       id:"2"
    },
    {
      icon: <i className="bi bi-box-arrow-in-right"></i>,
      name: "API Management",
      Subtitle: "Description",
      contents:"Very long description for an API key",
       comment:"Manage access key ",
       input:  <input type="text" className={styles.cardInput}  />,
       inputIcon:<i className="bi bi-compass"></i>,
       id:"3"
    },
 
    {
      icon: <i className="bi bi-arrow-clockwise"></i>,
      name: "Manage item categories",
      contents:"Need to reset your password? No Problem! just click the button below and you'ill be on your way",
       comment:<p className={styles.cardlink}><i className="bi bi-plus"></i>Add categories</p>,
       id:"5"
    }
  ]

  return (
  <>
  <div className={styles.contentName}>
  <h3>Dashboard</h3>
  </div>

<div className={styles.contentContainer}>
 

</div>
   
</>
  )
}

export default Content