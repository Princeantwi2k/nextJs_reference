import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AllItermList from './AllItermList';
import ItermList from './ItermList';
import  styles from "../../styles/Schedule.module.css"

function Example() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3 "
      justify
    >
      <Tab eventKey="home" title="All items">
      <div className={styles.tabpanel}>
            <div className={styles.maintab}>
            <div className={styles.dropdown}>
            <div className="dropdown-div">
                 <div className={styles.Itermforms}>    
                         <select  >
                           <option>Filter</option>
                            <option>Last 20 days</option>
                            <option>Last 10 days</option>
                                  
                          </select>
                    </div>
              </div>
               </div>
        <div className={styles.Itermform}>
         <input type="text"  placeholder="Search items"   />
        <button className='btn btn-default'>
        <i className="bi bi-search"></i>
        </button>
    
      </div>
            </div>
            <div className={styles.subTab}> 
              <p ><i className="bi bi-plus-lg"></i>Add New Category</p>
               <i className="bi bi-funnel"></i>
              <i className="bi bi-list-ul"></i>
            </div>
          
        </div>
        <AllItermList />
      </Tab>
      <Tab eventKey="profile" title="Scheduled Auctions(10)">
      <div className={styles.tabpanel}>
            <div className={styles.maintab}>
            <div className={styles.dropdown}>
            <div className="dropdown-div">
                            <div className={styles.Itermforms}>
                                
                                <select  >
                                    <option>Filter</option>
                                    <option>Last 20 days</option>
                                    <option>Last 10 days</option>
                                </select>
                            </div>
                            </div>
        
            </div>
        <form className={styles.Itermform}>
         <input type="text"  placeholder="Search items"   />
        <button className='btn btn-default'>
        <i className="bi bi-search"></i>
        </button>
         </form>
            </div>
            <div className={styles.subTab}> 
              <p >  <i className="bi bi-plus-lg"></i>Add New Category</p>
               <i className="bi bi-funnel"></i>
              <i className="bi bi-list-ul"></i>

                
            </div>
          
        </div>

        
        <ItermList />
     
      </Tab>
      <Tab eventKey="longer-tab" title="Ongoing(200)">
     one
      </Tab>
      <Tab eventKey="contact" title="Cancelled Auction(3)" >
      two  
      </Tab>
    </Tabs>
  )
}

export default Example