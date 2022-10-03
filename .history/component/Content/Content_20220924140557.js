import React from 'react'
import styles from "../../styles/Home.module.css"
import Card from 'react-bootstrap/Card';

function Content() {
  return (
  <>
  <div className={styles.contentName}>
  <h3>Dashboard</h3>
  </div>

<div className={styles.contentContainer}>
  <div className={styles.Content}>
  <Card className={styles.card1}>
      <Card.Body>
        <Card.Title><i class="bi bi-house-door"></i></Card.Title>
        <Card.Subtitle className="mb-2 ">Welcome Admin</Card.Subtitle>
        <Card.Text>
          Get familiar with the dashboard, here are some Ways to get started
        </Card.Text>
        <Card.Title>Get started</Card.Title>
      </Card.Body>
    </Card>
  <Card className={styles.card}>
      <Card.Body>
        <Card.Title><i class="bi bi-arrow-clockwise"></i></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Reset password</Card.Subtitle>
        <Card.Text>
         Need to reset your password? No Problem! just click the button below and you'ill be on your way
        </Card.Text>
        <Card.Link href="#"  className={styles.link}><p className={styles.cardlink}>Click to reset</p></Card.Link>
        
      </Card.Body>
    </Card>
  </div>

</div>
<div className={styles.contentCard}>
  <div className={styles.Content}>
  <Card className={styles.card2}>
      <Card.Body>
        <Card.Title><i class="bi bi-box-arrow-in-right"></i></Card.Title>
        <Card.Subtitle className="mb-2 ">API Management</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Description</Card.Subtitle>
        <Card.Text>
        Very long description for an API key
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">Description</Card.Subtitle>
        <input type="text" className={styles.cardInput}  /> <i class="bi bi-compass"></i>
        <Card.Subtitle className="mb-2 ">Manage access key</Card.Subtitle>
      </Card.Body>
    </Card>
  <Card className={styles.card}>
  <Card.Body>

        <Card.Title><i class="bi bi-arrow-clockwise"></i></Card.Title>
        <Card.Subtitle className="mb-2 ">Manage item categories</Card.Subtitle>
        <Card.Text>
         Need to reset your password? No Problem! just click the button below and you'ill be on your way
        </Card.Text>
        <Card.Link href="#"  className={styles.link}><p className={styles.cardlink}><i class="bi bi-plus"></i>Add categories</p></Card.Link>
        
      </Card.Body>
    </Card>
  </div>
 

</div>
   
</>
  )
}

export default Content