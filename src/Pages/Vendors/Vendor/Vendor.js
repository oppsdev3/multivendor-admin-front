import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Button from '@mui/material/Button';
import VendorManage from '../VendorAdd/VendorManage/VendorManage';
import Box from '@mui/material/Box';
import './Vendor.css'
import VendorAll from '../VendorAll/VendorAll';

const Vendor = () => {
     let { url } = useRouteMatch();
     return (
          <div>
               <div className='vendor-container'>
                    <Button
                         color="inherit"
                         sx={{  color: '#059862', fontWeight: '600' }}
                         >     
                              Total Vendors
                    </Button>
                    <Link to={`${url}/profile`} style={{ textDecoration: 'none' }}>
                         <Button
                         color="inherit"
                         sx={{  color: '#059862', fontWeight: '600',mt:1 }}
                         >     
                              Pending Vendors
                         </Button>
                    </Link>
                    <Box >
                         <VendorManage></VendorManage>
                    </Box>
               </div>
               <Box sx={{mt:4}}>
                    <VendorAll></VendorAll>
               </Box>
          </div>
     );
};

export default Vendor;