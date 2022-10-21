import * as React from 'react';
import PropTypes from 'prop-types';
import AllItermList from './AllItermList';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import  styles from "../../styles/Schedule.module.css"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: 500 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
   
        <TabPanel value={value} index={0} dir={theme.direction}>
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
              <div ><i className="bi bi-plus-lg"></i>Add New Category</div>
               <i className="bi bi-funnel"></i>
              <i className="bi bi-list-ul"></i>
            </div>
          
        </div>
        <AllItermList />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
     
    </Box>
  );
}