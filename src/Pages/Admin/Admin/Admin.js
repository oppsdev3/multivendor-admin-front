import React,{useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import AdminProfile from '../AdminProfile/AdminProfile';
import AdminEmail from '../AdminEmail/AdminEmail';
import AdminPassword from '../AdminPassword/AdminPassword';
import  Box  from '@mui/material/Box';

const Admin = () => {   
     return (
          <Box sx={{display:'flex',mx:5,mt:2}}>
               {/* <AdminProfile adminProfile={adminProfile}></AdminProfile> */}
               <AdminEmail></AdminEmail>
               <AdminPassword></AdminPassword>
          </Box>
     );
};

export default Admin;