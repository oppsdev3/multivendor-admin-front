import React from 'react';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import MessageIcon from '@mui/icons-material/Message';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { Link, useRouteMatch } from 'react-router-dom';

const VendorsLink = () => {
     let { url } = useRouteMatch();
     return (
          <>
          <List sx={{ mt: 1 }}>
               <Link to="/vendors" style={{ textDecoration: 'none' }}>
                    <Button color="inherit" sx={{ color: '#059862', fontWeight: '600' }}>
                         <VerifiedUserIcon sx={{mx:1}}></VerifiedUserIcon>
                         Vendors
                    </Button>
               </Link>
               <Link to={`${url}/messages`} style={{ textDecoration: 'none' }}>
                    <Button
                    color="inherit"
                    sx={{  color: '#059862', fontWeight: '600' }}
                    >
                         <MessageIcon sx={{mx:1}}></MessageIcon>
                         Messages
                    </Button>
               </Link>
               <Link to={`${url}/profile`} style={{ textDecoration: 'none' }}>
                    <Button
                    color="inherit"
                    sx={{  color: '#059862', fontWeight: '600' }}
                    >
                         <AccountCircleIcon sx={{mx:1}}></AccountCircleIcon>
                         Profile
                    </Button>
               </Link>
               
               
          </List>
          </>
     );
};

export default VendorsLink;