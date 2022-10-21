import React from 'react'
import Image from 'next/image'
import styles from "../../styles/Overview.module.css"
import pic from '../Images/pic.webp'
import pic1 from '../Images/pic1.webp'
import pic2 from '../Images/pic2.webp'
import pic3 from '../Images/pic3.webp'
import pic4 from '../Images/pic4.webp'
import pic5 from "../Images/th.webp"
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
        <p className={styles.TabImg}><spna><Image src={pic} alt=""  width={25} height={25}/></spna></p>
        <p className={styles.TabContent}>Galaxy Book2 pro 360 <br /> <span>10:20AM 30th Jun 22</span></p>
        <p className={styles.TabPrice}>$90,000 <br /> <span>starting off</span></p>
     </div>
     <div className={styles.TabInfo}>
     <p className={styles.TabImg}><spna><Image src={pic5} alt=""  width={25} height={25}/></spna></p>
        <p className={styles.TabContent}>Galaxy Book2 pro 360 <br /> <span>10:20AM 30th Jun 22</span></p>
        <p className={styles.TabPrice}>$90,000 <br /> <span>starting off</span></p>
     </div>
     <div className={styles.TabInfo}>
     <p className={styles.TabImg}><spna><Image src={pic1} alt=""  width={25} height={25}/></spna></p>
        <p className={styles.TabContent}>Galaxy Book2 pro 360 <br /> <span>10:20AM 30th Jun 22</span></p>
        <p className={styles.TabPrice}>$90,000 <br /> <span>starting off</span></p>
     </div>
     <div className={styles.TabInfo}>
     <p className={styles.TabImg}><spna><Image src={pic3} alt=""  width={25} height={25}/></spna></p>
        <p className={styles.TabContent}>Galaxy Book2 pro 360 <br /> <span>10:20AM 30th Jun 22</span></p>
        <p className={styles.TabPrice}>$90,000 <br /> <span>starting off</span></p>
     </div>
     <div className={styles.TabInfo}>
     <p className={styles.TabImg}><spna><Image src={pic4} alt=""  width={25} height={25}/></spna></p>
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
        <p className={styles.TabImg}><spna><Image src={pic2} alt=""  width={25} height={25}/></spna></p>
        <p className={styles.TabContent}>Galaxy Book2 pro 360 <br /> <span>10:20AM 30th Jun 22</span></p>
        <p className={styles.TabPrice}>$90,000 <br /> <span>Bought</span></p>
     </div>
     <div className={styles.TabInfo}>
     <p className={styles.TabImg}><spna><Image src={pic1} alt=""  width={25} height={25}/></spna></p>
        <p className={styles.TabContent}>Galaxy Book2 pro 360 <br /> <span>10:20AM 30th Jun 22</span></p>
        <p className={styles.TabPrice}>$90,000 <br /> <span>Bought</span></p>
     </div>
     <div className={styles.TabInfo}>
     <p className={styles.TabImg}><spna><Image src={pic3} alt=""  width={25} height={25}/></spna></p>
        <p className={styles.TabContent}>Galaxy Book2 pro 360 <br /> <span>10:20AM 30th Jun 22</span></p>
        <p className={styles.TabPrice}>$90,000 <br /> <span>Bought</span></p>
     </div>
     <div className={styles.TabInfo}>
     <p className={styles.TabImg}><spna><Image src={pic4} alt=""  width={25} height={25}/></spna></p>
        <p className={styles.TabContent}>Galaxy Book2 pro 360 <br /> <span>10:20AM 30th Jun 22</span></p>
        <p className={styles.TabPrice}>$90,000 <br /> <span>Bought</span></p>
     </div>
     <div className={styles.TabInfo}>
     <p className={styles.TabImg}><spna><Image src={pic5} alt=""  width={25} height={25}/></spna></p>
        <p className={styles.TabContent}>Galaxy Book2 pro 360 <br /> <span>10:20AM 30th Jun 22</span></p>
        <p className={styles.TabPrice}>$90,000 <br /> <span>Bought</span></p>
     </div>
    </div>
    </div>
    </>
  )
}

export default OverViewTable