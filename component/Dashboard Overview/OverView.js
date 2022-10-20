import React from 'react'
import styles from "../../styles/Overview.module.css"
import Chart from './Chart'
import Table from './Table'
import LatestInvoices from "./LatestInvoices"


function OverView() {
    
   const data =[
        {
            icon:<i className="bi bi-three-dots"></i>,
            name: <p className={styles.icons}><i className="bi bi-house-door"></i></p>,
            contents:"ongoin Auction(150)",
             comment:"view details",
             id:"1"
          },
        {

            icon:<i className="bi bi-three-dots"></i>,
            name:<p className={styles.icons}><i className="bi bi-house-door"></i></p>,
            contents:"Active User(200)",
             comment:"view details",
             id:"1"
          },
        {
            icon:<i className="bi bi-three-dots"></i>,
            name:<p className={styles.icons}><i className="bi bi-house-door"></i></p>,
            contents:"Unverified users(160)",
             comment:"view details",
             id:"1"
          },
        {
            icon:<i className="bi bi-three-dots"></i>,
            name: <p className={styles.icons}><i className="bi bi-house-door"></i></p>,
            contents:"Total Revenue($150)",
             comment:"view details",
             id:"1"
          },
          
        
      
    ]
  return (
    <>
    <div className={styles.Overview}>
    {
       data.map((data,index)=>(
           <div key={index} className={styles.OverviewData}>
               <span className={styles.Data}>{data.name}<span>{data.icon}</span></span>
             <span className={styles.DataFirst}>{data.contents}</span>
             <p className={styles.DataLast}>{data.comment}</p>
           </div>
       ))
    }
       </div>
        <div className={styles.OverChart}>
       <Chart />
       <Table />
       </div>
       
     <div className={styles.OverInvoices}>
        <LatestInvoices />
     </div>

       </>
  )
}

export default OverView