import React, { useEffect, useState }  from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import VendorProfileView from '../VendorsProfileView/VendorProfileView';
import { CircularProgress } from '@mui/material';

const VendorProfile = ({vendor}) => {
     const token = localStorage.getItem('token')
     let id = vendor._id
     const [vendors,setVendors] = useState([])
     const [loading,setLoading] = useState(false)
     useEffect(()=>{
          setLoading(true)
          fetch(`https://multivendorapex.herokuapp.com/api/admin/adminroute/allvendor/${id}`, {
               method: 'GET',
               headers: {
               'content-type': 'application/json',
               'Authorization': token
               },
               body: JSON.stringify(),

          })
          .then(res => res.json())
          .then(data => {
               console.log(data)
               setVendors(data)
               setLoading(false)
          })
     },[])

     if(loading){
          return <CircularProgress></CircularProgress>
     }
     return (
          <>
                    
               <Grid  container spacing={2}>
                   <VendorProfileView key={vendors._id} vendors={vendors}></VendorProfileView>
               </Grid>  
          </>
     );
};

export default VendorProfile;