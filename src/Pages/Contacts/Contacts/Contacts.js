import React,{useState,useEffect} from 'react';
import {Container} from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Contacts = () => {
     const [contactVendor, setContactVendor] = useState({});
     useEffect(()=>{
          fetch('https://multivendorapi.herokuapp.com//api/admin/adminroute/allvendorcontact')
          .then(res => res.json())
          .then(info => {
            console.log(info);
          });
     },[])

     return (
          <>
               
          </>
     );
};

export default Contacts;