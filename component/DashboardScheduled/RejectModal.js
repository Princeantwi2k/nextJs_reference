import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from "../../styles/Schedule.module.css"

 const  RejectModal=(props) =>{
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
    >
     
      <Modal.Body className={styles.Modal} >
        <h4>Rejection reason</h4>
        <p className={styles.para}>
        Enter a rejection reason for the seller
        </p>
        <input type="email"  className={styles.RejectionInput}/>
        <div className={styles.RejectBottoms}>
        <p  className={styles.Rejectionlink} >Submit</p>
        <p  className={styles.Rejectionlinks} >cancel</p>
        </div>
       
        
      </Modal.Body>
     
    </Modal>
  );
}
 
export default RejectModal;