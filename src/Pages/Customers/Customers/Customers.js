import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Customer from '../Customer/Customer';

const Customers = () => {
     const [customers,setCustomers] = useState([])
     const [loading,setLoading] = useState(false)
     useEffect(()=>{
          setLoading(true)
          fetch('https://multivendorapi.herokuapp.com//api/admin/adminroute/allcustomer')
          .then(res => res.json())
          .then(data => {
               console.log(data)
               setCustomers(data)
               setLoading(false)
          })

     },[])
     if(loading){
         return <CircularProgress />
     }
     return (
          <>   
               <Customer customers={customers}></Customer> 
          </>
     );
};

export default Customers;