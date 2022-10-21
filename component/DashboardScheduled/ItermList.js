import React from "react"
import { Button } from "react-bootstrap"
import pic from '../images/th.webp'
import pic1 from "../images/pic1.webp"
import pic2 from "../images/pic2.webp"
import pic3 from "../images/pic3.webp"
import pic4 from "../images/pic4.webp"
import pic5 from "../images/pic5.webp"
import pic6 from "../images/pic.webp"
import Image from 'next/image'
import  styles from "../../styles/Schedule.module.css"

const ItermList = () =>{
    return (
        <table className="table">
        <thead >
          <tr className={styles.ItermTable}>
            <th scope="col">Item ID</th>
            <th scope="col">Iterm name</th>
            <th scope="col">Category</th>
            <th scope="col">Update date</th>
            <th scope="col">Description</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">000001</td>
            <td className={styles.TableImage}> <Image src={pic} alt=""  width={30} height={30} /><span>TCL Television</span></td>
            <td>Electronics</td>
            <td>20/7/2022 12:00PM</td>
            <td scope="row">Description</td>
            <td></td>
            <td> <Button className="TableButton" variant="outline-success">Approve</Button></td>
            <td><Button className="TableButton1" variant="outline-danger">Reject <i className="bi bi-chevron-down"></i></Button></td>
          </tr>
          <tr>
            <td scope="row">000001</td>
            <td className={styles.TableImage}> <Image src={pic6} alt="" width={30} height={30}   /><span>PS4 Console</span></td>
            <td>Electronics</td>
            <td>20/7/2022 12:00PM</td>
            <td scope="row">Description</td>
            <td></td>
            <td> <Button className="TableButton" variant="outline-success">Approve</Button></td>
            <td><Button className="TableButton1" variant="outline-danger">Reject <i className="bi bi-chevron-down"></i></Button></td>
          </tr>
          <tr>
            <td scope="row">000001</td>
            <td className={styles.TableImage}> <Image src={pic2} alt="" width={30} height={30}   /><span>MacBook Revamp</span></td>
            <td>Electronics</td>
            <td>20/7/2022 12:00PM</td>
            <td scope="row">Description</td>
            <td></td>
            <td> <Button className="TableButton" variant="outline-success">Approve</Button></td>
            <td><Button className="TableButton1" variant="outline-danger">Reject <i className="bi bi-chevron-down"></i></Button></td>
          </tr>
          <tr>
            <td scope="row">000001</td>
            <td className={styles.TableImage}> <Image src={pic1} alt="" width={30} height={30}  /> <span>HP desktop</span></td>
            <td>Electronics</td>
            <td>20/7/2022 12:00PM</td>
            <td scope="row">Description</td>
            <td></td>
            <td> <Button className="TableButton" variant="outline-success">Approve</Button></td>
            <td><Button className="TableButton1" variant="outline-danger">Reject <i className="bi bi-chevron-down"></i></Button></td>
          </tr>
          <tr>
            <td scope="row">000001</td>
            <td className={styles.TableImage}> <Image src={pic3} alt="" width={30} height={30}   /> <span>SSD disk</span></td>
            <td>Electronics</td>
            <td>20/7/2022 12:00PM</td>
            <td scope="row">Description</td>
            <td></td>
            <td> <Button className="TableButton" variant="outline-success">Approve</Button></td>
            <td><Button className="TableButton1" variant="outline-danger">Reject <i className="bi bi-chevron-down"></i></Button></td>
          </tr>
          <tr>
            <td scope="row">000001</td>
            <td className={styles.TableImage}> <Image src={pic5} alt="" width={30} height={30}   /> <span>Ipad</span></td>
            <td>Electronics</td>
            <td>20/7/2022 12:00PM</td>
            <td scope="row">Description</td>
            <td></td>
            <td> <Button className="TableButton" variant="outline-success">Approve</Button></td>
            <td><Button className="TableButton1" variant="outline-danger">Reject <i className="bi bi-chevron-down"></i></Button></td>
          </tr>
          <tr>
            <td scope="row">000001</td>
            <td className={styles.TableImage}> <Image src={pic} alt="" width={30} height={30}   /> <span>TCL Television</span></td>
            <td>Electronics</td>
            <td>20/7/2022 12:00PM</td>
            <td scope="row">Description</td>
            <td></td>
            <td> <Button className="TableButton" variant="outline-success">Approve</Button></td>
            <td><Button className="TableButton1" variant="outline-danger">Reject <i className="bi bi-chevron-down"></i></Button></td>
          </tr>
          
        </tbody>
      </table>
    )
}

export default ItermList