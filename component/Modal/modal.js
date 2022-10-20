import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from "../../styles/Home.module.css"

 const  MyVerticallyCenteredModal=(props) =>{
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
    >
     
      <Modal.Body className={styles.Modal} >
        <h4>Reset passwoad</h4>
        <p className={styles.para}>
         Need to reset your password? No problem input your email below
        </p>
        <input type="email"  className={styles.modalInput}/>
        <p  className={styles.modallink}  onClick={() => setModalShow(true)}>Click to reset</p>
      </Modal.Body>
     
    </Modal>
  );
}
 
export default MyVerticallyCenteredModal;
