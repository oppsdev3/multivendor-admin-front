import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import MessageIcon from '@mui/icons-material/Message';

const VendorsLink = () => {
     let {  url } = useRouteMatch();
     return (
          <>
          <List>
               <Link exact to="/vendors" style={{ textDecoration: 'none' }}>
               <Button color="inherit" sx={{ mb: 2, ml: 1 }}>
                    <VerifiedUserIcon sx={{mr:1}}></VerifiedUserIcon>
                    Vendors
               </Button>
               </Link>
               <Link exact to={`${url}/messages`} style={{ textDecoration: 'none' }}>
               <Button color="inherit" sx={{ mb: 2 }}>
                    <MessageIcon sx={{mr:1}}></MessageIcon>
                    Messages
               </Button>
               </Link>
               
          </List>
          </>
     );
};

export default VendorsLink;