import React from 'react'
import Image from 'next/image'
import styles from "../../styles/Overview.module.css"
 import Img from "../Images/name.png"

function LatestInvoices() {
  return (

    <div className={styles.Invoices}>
        <div className={styles.InvoiceHeader}>
            <h6>Latest Invoices</h6>
            <p>Generate Report</p>
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
      <td><Image src={Img} alt="" height={20} width={20}  /><span> Anthony Fisher</span></td>
      <td>$10,00</td>
      <td>003124</td>
      <td><button type="button" className="btn btn-outline-info">Paid</button></td>
      <td><i className="bi bi-three-dots-vertical"></i></td>
    </tr>
    <tr>
      <th scope="row">#0020345</th>
      <td>22/07/2022</td>
      <td><Image src={Img} alt="" height={20} width={20}  /><span> Anthony Fisher</span></td>
      <td>$10,00</td>
      <td>003124</td>
      <td><button type="button" className="btn  btn-outline-warning">Paid</button></td>
      <td><i className="bi bi-three-dots-vertical"></i></td>
    </tr>
    <tr>
      <th scope="row">#0020345</th>
      <td>22/07/2022</td>
      <td><Image src={Img} alt="" height={20} width={20}  /><span> Anthony Fisher</span></td>
      <td>$10,00</td>
      <td>003124</td>
      <td><button type="button" className="btn btn-outline-info">Paid</button></td>
      <td><i className="bi bi-three-dots-vertical"></i></td>
    </tr>
    <tr>
      <th scope="row">#0020345</th>
      <td>22/07/2022</td>
      <td><Image src={Img} alt="" height={20} width={20}  /><span> Anthony Fisher</span></td>
      <td>$10,00</td>
      <td>003124</td>
      <td><button type="button" className="btn btn-outline-info">Paid</button></td>
      <td><i className="bi bi-three-dots-vertical"></i></td>
    </tr>
    <tr>
      <th scope="row">#0020345</th>
      <td>22/07/2022</td>
      <td><Image src={Img} alt="" height={20} width={20}  /><span> Anthony Fisher</span></td>
      <td>$10,00</td>
      <td>003124</td>
      <td><button type="button" className="btn btn-outline-info">Paid</button></td>
      <td><i className="bi bi-three-dots-vertical"></i></td>
    </tr>
    <tr>
      <th scope="row">#0020345</th>
      <td>22/07/2022</td>
      <td><Image src={Img} alt="" height={20} width={20}  /><span> Anthony Fisher</span></td>
      <td>$10,00</td>
      <td>003124</td>
      <td><button type="button" className="btn btn-outline-info">Paid</button></td>
      <td><i className="bi bi-three-dots-vertical"></i></td>
    </tr>
    <tr>
      <th scope="row">#0020345</th>
      <td>22/07/2022</td>
      <td><Image src={Img} alt="" height={20} width={20}  /><span> Anthony Fisher</span></td>
      <td>$10,00</td>
      <td>003124</td>
      <td><button type="button" className="btn btn-outline-info">Paid</button></td>
      <td><i className="bi bi-three-dots-vertical"></i></td>
    </tr>
    <tr>
      <th scope="row">#0020345</th>
      <td>22/07/2022</td>
      <td><Image src={Img} alt="" height={20} width={20}  /><span> Anthony Fisher</span></td>
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