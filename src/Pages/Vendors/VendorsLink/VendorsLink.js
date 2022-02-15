import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import GroupIcon from '@mui/icons-material/Group';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import CategoryIcon from '@mui/icons-material/Category';

const VendorsLink = () => {
     let {  url } = useRouteMatch();
     return (
          <>
          <List sx={{mt:1}}>
               <Link exact to="/vendors" style={{ textDecoration: 'none' }}>
                    <Button color="inherit" sx={{ mb: 2, mr:2 }}>
                         <VerifiedUserIcon sx={{mr:1}}></VerifiedUserIcon>
                         Vendors
                    </Button>
               </Link>
               <Link exact to={`${url}/products`} style={{ textDecoration: 'none' }}>
                    <Button color="inherit" sx={{ mb: 2 }}>
                         <ProductionQuantityLimitsIcon sx={{mr:1}}></ProductionQuantityLimitsIcon>
                         Products
                    </Button>
               </Link>
               <Link exact to={`${url}/customer`} style={{ textDecoration: 'none' }}>
                    <Button color="inherit" sx={{ mb: 2 }}>
                         <GroupIcon sx={{mr:1}}></GroupIcon>
                         Customer
                    </Button>
               </Link>
               <Link exact to={`${url}/contact`} style={{ textDecoration: 'none' }}>
                    <Button color="inherit" sx={{ mb: 2,mr:1 }}>
                         <ContactPhoneIcon sx={{mr:1}}></ContactPhoneIcon>
                         Contact
                    </Button>
               </Link>
               <Link exact to={`${url}/services`} style={{ textDecoration: 'none' }}>
                    <Button color="inherit" sx={{ mb: 2,mr:1 }}>
                         <MiscellaneousServicesIcon sx={{mr:1}}></MiscellaneousServicesIcon>
                         Services
                    </Button>
               </Link>
               <Link exact to={`${url}/categories`} style={{ textDecoration: 'none' }}>
                    <Button color="inherit" sx={{ mb: 2,mr:1 }}>
                         <CategoryIcon sx={{mr:1}}></CategoryIcon>
                         Category
                    </Button>
               </Link>
               
          </List>
          </>
     );
};

export default VendorsLink;