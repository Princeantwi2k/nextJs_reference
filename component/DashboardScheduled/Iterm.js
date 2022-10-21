import React from "react";
import  styles from "../../styles/Schedule.module.css"
import Example from "./Example";
import BasicTabs from "./ItermTabs";

const Iterm = () => {
    return(  <>
     <div className={styles.ItermHeader}>
        <div className={styles.Header}>
        <h4>Iterm Management</h4>
        <p>Iterm list</p>
        </div>
       <div className={styles.ItermBody}>
        {/* <BasicTabs /> */}
        <Example />
       </div>
     </div>
    </>
    )
}

export default Iterm