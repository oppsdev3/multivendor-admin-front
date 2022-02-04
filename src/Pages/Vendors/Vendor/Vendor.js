import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Button from '@mui/material/Button';
import VendorView from './../VendorView/VendorView';
import VendorManage from '../VendorAdd/VendorManage/VendorManage';
import './Vendor.css'

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
                    <VendorManage></VendorManage>
               </div>
               <VendorView></VendorView>
          </div>
     );
};

export default Vendor;