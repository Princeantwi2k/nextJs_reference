import React,{useState} from "react"
import { Button } from "react-bootstrap"
import pic from '../images/pic.webp'
import pic1 from '../images/pic1.webp'
import pic2 from '../images/pic2.webp'
import pic3 from '../images/pic3.webp'
import pic4 from '../images/pic4.webp'
import pic5 from "../images/th.webp"
import Image from 'next/image'
import  styles from "../../styles/Schedule.module.css"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Tooltip from 'react-bootstrap/Tooltip';
import RejectModal from "./RejectModal"


const Scheduled = () => {

  const [modalShow, setModalShow] = useState(false);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {/* <ul className={styles.TooltipList}>
        <li>item does not meet description</li>
        <li>boy</li>
        <li>good</li>
      </ul> */}
      <p>Item does not meet description</p>
      <p>Item does not match category</p>
      <p>others</p>
    </Tooltip>
  )
  
    return(
        <>
        <RejectModal 
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <div className={styles.Scheduled}>
          <div className={styles.ScheduledHeader}>
            <h4> Item Managemen </h4>
            <p>Scheduled Item</p>
          </div>
          <div className={styles.ScheduledBody}>
              <div className={styles.ScheduledName}>
                TCL Television 44 inches
                <button type="button" className="btn btn-warning TableButtonScheduled">pending</button>
              </div>
              <div className={styles.ScheduledButton}>
   
              <button type="button" className="btn btn-success TableButtonScheduled1">completed</button>
              {/* <Button className="TableButtonScheduled1" variant="outline-danger">Reject <i className="bi bi-chevron-down"></i></Button> */}
              <OverlayTrigger
                placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                 overlay={renderTooltip}
                >
           <Button variant="outline-danger" onClick={() => setModalShow(true)}> Reject <i className="bi bi-chevron-down"></i></Button>
              </OverlayTrigger>
              </div>
             </div>
             <div className={styles.ScheduledMainBody}>
              <ul>
                <li>General information</li>
                <li>Iterm Category</li>
                <li>Iterm Category</li>
              </ul>
             </div>
             <div className={styles.ScheduledForm}>
             <form>
                <h5 className={styles.ScheduledInputsTittle}>General information</h5>
               <div className={styles.ScheduledInputs} >
                <label>Seller name <br/> <span><input type="text" placeholder="" className={styles.input} /> <br /></span> </label>
                <label>Type of Business <br /> <span> <input type="text" placeholder=""  className={styles.input}/> <br /></span> </label><br/>
               </div>
               <div className={styles.ScheduledInputs}>
                <label>Email <br/> <span><input type="text" placeholder="" className={styles.input} /> <br /></span> </label>
                <label>Mobile number <br /> <span> <input type="text" placeholder="" className={styles.input} /> <br /></span> </label><br/>
               </div>
               <h5 className={styles.ScheduledInputsTittle}>Item Category</h5>
               <div className={styles.ScheduledInput} >
                <label>item name<br/> <span><input type="text" placeholder="" className={styles.input1} /> <br /></span> </label>
                 <label> Category<br/><input type="text" placeholder=""  className={styles.input2}/> <br /></label> 
               </div>
               <div className={styles.ScheduledInputsDescription}  >
               <label>Description <br/> <span>   <textarea type="text"  className={styles.textarea}/></span></label>
               </div>
               <div className={styles.ScheduledInputs} >
                <label>Market Value <br/> <span><input type="text" placeholder="" className={styles.inputs}/> <br /></span> </label>
                <label>Starting price <br /> <span> <input type="text" placeholder="" className={styles.inputs} /> <br /></span> </label><br/>
               </div>
               <div className={styles.ScheduledInputs} >
                <label>Bid increment <br/> <span><input type="text" placeholder="" className={styles.inputs}/> <br /></span> </label>
                <label>Reserved price <br /> <span> <input type="text" placeholder="" className={styles.inputs} /> <br /></span> </label><br/>
               </div>
               <div className={styles.ScheduledInputsDescription}  >
               <label>Scheduled Date/Time <br/> <span>   <textarea type="text"  className={styles.textarea1}/></span></label>
               </div>
               <h5 className={styles.ScheduledInputsTittle}>Item Gallery</h5>
                <div className={styles.ScheduledInputs}>
                  <Image src={pic} alt="" className={styles.ScheduledPic} />
                  <Image src={pic1} alt=""className={styles.ScheduledPic} />
                  <Image src={pic2} alt="" className={styles.ScheduledPic} />
                  <Image src={pic3} alt="" className={styles.ScheduledPic} />
                </div>
                <div className={styles.ScheduledInputsDescription}  >
               <label>Iterm retrieval <br/> <span>   <textarea type="text" placeholder=" iterm will be delivered" className={styles.textarea1}/></span></label>
               </div>
             </form>
             </div>
             <div className={styles.ScheduledIterm}>
              <div className={styles.Iterm}>
              <Image src={pic4} alt="" className={styles.ItermPic} />
             <button type="button" className={styles.ItermButton}>completed</button>
              </div>

             </div>
          </div>

        </>
    )

}

export default Scheduled