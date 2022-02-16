import React,{useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import CustomerDetail from './../CustomerDetail/CustomerDetail';

const CustomerDetails = ({customer}) => {
     let id = customer._id
     console.log(id)
     const [customers,setCustomers] = useState([])
     const token = localStorage.getItem('token')
     useEffect(()=>{
          fetch(`https://multivendorapi.herokuapp.com/api/admin/adminroute/allCustomer/${id}`, {
               method: 'GET',
               headers: {
               'content-type': 'application/json',
               'Authorization': token
               },
               body: JSON.stringify(),

          })
          .then(res => res.json())
          .then(data =>{
               console.log(data)
               setCustomers(data)
          })
     },[])
     return (
          <>
               <Grid sx={{mt:3}} container spacing={2}>
                    <CustomerDetail customers={customers}></CustomerDetail>
               </Grid>    
          </>
     );
};

export default CustomerDetails;