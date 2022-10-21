import React from "react"
import { Button } from "react-bootstrap"
import Table from 'react-bootstrap/Table';
import pic from '../Images/th.webp'
import pic1 from "../Images/pic1.webp"
import pic2 from "../Images/pic2.webp"
import pic3 from "../Images/pic3.webp"
import pic4 from "../Images/pic4.webp"
import pic5 from "../Images/pic5.webp"
import Image from 'next/image'
import  styles from "../../styles/Schedule.module.css"


const AllItermList = () =>{
    return (
      <>
        <Table className="table">
        <thead >
          <tr className={styles.ItermTable}>
            <th scope="col">Item ID</th>
            <th scope="col">Iterm name</th>
            <th scope="col">Category</th>
            <th scope="col">Update date</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col"> Status</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">000001</td>
            <td className={styles.TableImage}> <Image src={pic} alt="" width={30} height={30}  />TCL Television</td>
            <td>Electronics</td>
            <td>20/7/2022 12:00PM</td>
            <td>$20.000</td>
            <td scope="row">Description</td>
            
            <td> <button type="button" className="btn btn-success TableButtonAll">completed</button></td>
            <td><i className="bi bi-three-dots-vertical"></i></td>
          </tr>
          <tr>
            <td scope="row">000001</td>
            <td> <Image src={pic3} alt="" width={30} height={30}  />SSD disk</td>
            <td>Electronics</td>
            <td>20/7/2022 12:00PM</td>
            <td>$20.000</td>
            <td scope="row">Description</td>
            
            <td> <button type="button" className="btn btn-warning TableButtonAll">pending</button></td>
            <td><i className="bi bi-three-dots-vertical"></i></td>
          </tr>
          <tr>
            <td scope="row">000001</td>
            <td> <Image src={pic1} alt="" width={30} height={30}  />HP desktop</td>
            <td>Electronics</td>
            <td>20/7/2022 12:00PM</td>
            <td>$20.000</td>
            <td scope="row">Description</td>
            
            <td> <button type="button" className="btn btn-success TableButtonAll">completed</button></td>
            <td><i className="bi bi-three-dots-vertical"></i></td>
          </tr>
          <tr>
            <td scope="row">000001</td>
            <td> <Image src={pic} alt="" width={30} height={30}   />TCL Television</td>
            <td>Electronics</td>
            <td>20/7/2022 12:00PM</td>
            <td>$20.000</td>
            <td scope="row">Description</td>
            
            <td> <button type="button" className="btn btn-success TableButtonAll">completed</button></td>
            <td><i className="bi bi-three-dots-vertical"></i></td>
          </tr>
          <tr>
            <td scope="row">000001</td>
            <td> <Image src={pic2} alt="" width={30} height={30}   />MacBook Revamp</td>
            <td>Electronics</td>
            <td>20/7/2022 12:00PM</td>
            <td>$20.000</td>
            <td scope="row">Description</td>
            
            <td> <button type="button" className="btn btn-secondary TableButtonAll">failed</button></td>
            <td><i className="bi bi-three-dots-vertical"></i></td>
          </tr>
          <tr>
            <td scope="row">000001</td>
            <td> <Image src={pic4} alt="" width={30} height={30}  />Iphone</td>
            <td>Electronics</td>
            <td>20/7/2022 12:00PM</td>
            <td>$20.000</td>
            <td scope="row">Description</td>
            
              
            <td> <button type="button" className="btn btn-success TableButtonAll">completed</button></td>
            <td><i className="bi bi-three-dots-vertical"></i></td>
          </tr>
          <tr>
            <td scope="row">000001</td>
            <td> <Image src={pic5} alt="" width={30} height={30} />Ipad</td>
            <td>Electronics</td>
            <td>20/7/2022 12:00PM</td>
            <td>$20.000</td>
            <td scope="row">Description</td>
            
              
            <td> <button type="button" className="btn btn-success TableButtonAll">completed</button></td>
            <td><i className="bi bi-three-dots-vertical"></i></td>
          </tr>
         
          
        </tbody>
      </Table>
      </>
    )
}

export default AllItermList