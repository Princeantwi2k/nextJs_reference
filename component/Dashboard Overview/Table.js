import React from 'react'
import Image from 'next/image'
import styles from "../../styles/Overview.module.css"

 import Img from "../Images/name.png"

function OverViewTable() {
  return (
    <>
    <div className={styles.Tables}>
    <div className={styles.TableContainer}>
     <div className={styles.TabHeader}>
        <h6>Scheduled Auctions</h6>
        <p>See All</p>
     </div>
     <div className={styles.TabInfo}>
        <p className={styles.TabImg}><spna><Image src={Img} alt=""  width={25} height={25}/></spna></p>
        <p className={styles.TabContent}>Galaxy Book2 pro 360 <br /> <span>10:20AM 30th Jun 22</span></p>
        <p className={styles.TabPrice}>$90,000 <br /> <span>starting off</span></p>
     </div>
     <div className={styles.TabInfo}>
     <p className={styles.TabImg}><spna><Image src={Img} alt=""  width={25} height={25}/></spna></p>
        <p className={styles.TabContent}>Galaxy Book2 pro 360 <br /> <span>10:20AM 30th Jun 22</span></p>
        <p className={styles.TabPrice}>$90,000 <br /> <span>starting off</span></p>
     </div>
     <div className={styles.TabInfo}>
     <p className={styles.TabImg}><spna><Image src={Img} alt=""  width={25} height={25}/></spna></p>
        <p className={styles.TabContent}>Galaxy Book2 pro 360 <br /> <span>10:20AM 30th Jun 22</span></p>
        <p className={styles.TabPrice}>$90,000 <br /> <span>starting off</span></p>
     </div>
     <div className={styles.TabInfo}>
     <p className={styles.TabImg}><spna><Image src={Img} alt=""  width={25} height={25}/></spna></p>
        <p className={styles.TabContent}>Galaxy Book2 pro 360 <br /> <span>10:20AM 30th Jun 22</span></p>
        <p className={styles.TabPrice}>$90,000 <br /> <span>starting off</span></p>
     </div>
     <div className={styles.TabInfo}>
     <p className={styles.TabImg}><spna><Image src={Img} alt=""  width={25} height={25}/></spna></p>
        <p className={styles.TabContent}>Galaxy Book2 pro 360 <br /> <span>10:20AM 30th Jun 22</span></p>
        <p className={styles.TabPrice}>$90,000 <br /> <span>starting off</span></p>
     </div>
    </div>
    {/* Recent activities */}
    <div className={styles.TableContainer}>
     <div className={styles.TabHeader}>
        <h6>Recent Activities</h6>
        <p>See All</p>
     </div>
     <div className={styles.TabInfo}>
        <p className={styles.TabImg}><spna><Image src={Img} alt=""  width={25} height={25}/></spna></p>
        <p className={styles.TabContent}>Galaxy Book2 pro 360 <br /> <span>10:20AM 30th Jun 22</span></p>
        <p className={styles.TabPrice}>$90,000 <br /> <span>Bought</span></p>
     </div>
     <div className={styles.TabInfo}>
     <p className={styles.TabImg}><spna><Image src={Img} alt=""  width={25} height={25}/></spna></p>
        <p className={styles.TabContent}>Galaxy Book2 pro 360 <br /> <span>10:20AM 30th Jun 22</span></p>
        <p className={styles.TabPrice}>$90,000 <br /> <span>Bought</span></p>
     </div>
     <div className={styles.TabInfo}>
     <p className={styles.TabImg}><spna><Image src={Img} alt=""  width={25} height={25}/></spna></p>
        <p className={styles.TabContent}>Galaxy Book2 pro 360 <br /> <span>10:20AM 30th Jun 22</span></p>
        <p className={styles.TabPrice}>$90,000 <br /> <span>Bought</span></p>
     </div>
     <div className={styles.TabInfo}>
     <p className={styles.TabImg}><spna><Image src={Img} alt=""  width={25} height={25}/></spna></p>
        <p className={styles.TabContent}>Galaxy Book2 pro 360 <br /> <span>10:20AM 30th Jun 22</span></p>
        <p className={styles.TabPrice}>$90,000 <br /> <span>Bought</span></p>
     </div>
     <div className={styles.TabInfo}>
     <p className={styles.TabImg}><spna><Image src={Img} alt=""  width={25} height={25}/></spna></p>
        <p className={styles.TabContent}>Galaxy Book2 pro 360 <br /> <span>10:20AM 30th Jun 22</span></p>
        <p className={styles.TabPrice}>$90,000 <br /> <span>Bought</span></p>
     </div>
    </div>
    </div>
    </>
  )
}

export default OverViewTable