import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Customer from '../Customer/Customer';

const Customers = () => {
     const [customers,setCustomers] = useState([])
     const [loading,setLoading] = useState(false)
     useEffect(()=>{
          setLoading(true)
          fetch('https://multivendorapi.herokuapp.com/api/products')
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
          {
               customers[1] ? 
               <Customer customers={customers}></Customer>
               :
               <h2>No Customer Available</h2>
          }
               
          </>
     );
};

export default Customers;