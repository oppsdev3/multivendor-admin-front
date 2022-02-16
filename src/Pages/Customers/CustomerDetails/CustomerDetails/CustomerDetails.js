import React,{useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';

const CustomerDetails = ({customer}) => {
     let id = customer._id
     console.log(id)
     const [customers,setCustomers] = useState([])

     useEffect(()=>{
          fetch(`https://multivendorapi.herokuapp.com//api/admin/adminroute/allproduct/${id}`)
          .then(res => res.json())
          .then(data =>{
               console.log(data)
               setCustomers(data)
          })
     },[])
     return (
          <>
               <Grid container spacing={2}>
                    {/* {
                         products.map(product => )
                    } */}
               </Grid>    
          </>
     );
};

export default CustomerDetails;