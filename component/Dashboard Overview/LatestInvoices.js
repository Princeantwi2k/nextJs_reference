import React from 'react'
import Image from 'next/image'
import styles from "../../styles/Overview.module.css"
 import Img from "../Images/name.png"
 import pic from '../Images/pic.webp'
import pic1 from '../Images/pic1.webp'
import pic2 from '../Images/pic2.webp'
import pic3 from '../Images/pic3.webp'
import pic4 from '../Images/pic4.webp'
import pic5 from "../Images/th.webp"

function LatestInvoices() {
  return (

    <div className={styles.Invoices}>
        <div className={styles.InvoiceHeader}>
            <h6>Latest Invoices</h6>
            <span > <i className="bi bi-download"></i>Generate Report</span>
        </div>
     <table className="table">
  <thead>
    <tr>
      <th scope="col">ID invoice </th>
      <th scope="col">Date</th>
      <th scope="col">Recipient</th>
      <th scope="col">Amount</th>
      <th scope="col">Product ID</th>
      <th scope="col">Status</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">#0020345</th>
      <td>22/07/2022</td>
      <td><Image src={pic} alt="" height={20} width={20}  /><span> Anthony Fisher</span></td>
      <td>$10,00</td>
      <td>003124</td>
      <td><button type="button" className="btn btn-outline-info">Paid</button></td>
      <td><i className="bi bi-three-dots-vertical"></i></td>
    </tr>
    <tr>
      <th scope="row">#0020345</th>
      <td>22/07/2022</td>
      <td><Image src={pic3} alt="" height={20} width={20}  /><span> Anthony Fisher</span></td>
      <td>$10,00</td>
      <td>003124</td>
      <td><button type="button" className="btn  btn-outline-warning">Paid</button></td>
      <td><i className="bi bi-three-dots-vertical"></i></td>
    </tr>
    <tr>
      <th scope="row">#0020345</th>
      <td>22/07/2022</td>
      <td><Image src={pic5} alt="" height={20} width={20}  /><span> Anthony Fisher</span></td>
      <td>$10,00</td>
      <td>003124</td>
      <td><button type="button" className="btn btn-outline-info">Paid</button></td>
      <td><i className="bi bi-three-dots-vertical"></i></td>
    </tr>
    <tr>
      <th scope="row">#0020345</th>
      <td>22/07/2022</td>
      <td><Image src={pic4} alt="" height={20} width={20}  /><span> Anthony Fisher</span></td>
      <td>$10,00</td>
      <td>003124</td>
      <td><button type="button" className="btn btn-outline-info">Paid</button></td>
      <td><i className="bi bi-three-dots-vertical"></i></td>
    </tr>
    <tr>
      <th scope="row">#0020345</th>
      <td>22/07/2022</td>
      <td><Image src={pic1} alt="" height={20} width={20}  /><span> Anthony Fisher</span></td>
      <td>$10,00</td>
      <td>003124</td>
      <td><button type="button" className="btn btn-outline-info">Paid</button></td>
      <td><i className="bi bi-three-dots-vertical"></i></td>
    </tr>
    <tr>
      <th scope="row">#0020345</th>
      <td>22/07/2022</td>
      <td><Image src={pic2} alt="" height={20} width={20}  /><span> Anthony Fisher</span></td>
      <td>$10,00</td>
      <td>003124</td>
      <td><button type="button" className="btn btn-outline-info">Paid</button></td>
      <td><i className="bi bi-three-dots-vertical"></i></td>
    </tr>
    <tr>
      <th scope="row">#0020345</th>
      <td>22/07/2022</td>
      <td><Image src={pic} alt="" height={20} width={20}  /><span> Anthony Fisher</span></td>
      <td>$10,00</td>
      <td>003124</td>
      <td><button type="button" className="btn btn-outline-info">Paid</button></td>
      <td><i className="bi bi-three-dots-vertical"></i></td>
    </tr>
    <tr>
      <th scope="row">#0020345</th>
      <td>22/07/2022</td>
      <td><Image src={pic4} alt="" height={20} width={20}  /><span> Anthony Fisher</span></td>
      <td>$10,00</td>
      <td>003124</td>
      <td><button type="button" className="btn btn-outline-info">Paid</button></td>
      <td><i className="bi bi-three-dots-vertical"></i></td>
    </tr>
   
  </tbody>
</table>
        </div>
  )
}

export default LatestInvoices