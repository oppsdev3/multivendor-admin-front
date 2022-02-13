import React, { useEffect, useState }  from 'react';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import VendorView from '../VendorView/VendorView';

const VendorAll = () => {
     const [vendors,setVendors] = useState([])
     const [loading,setLoading] = useState(false)
     useEffect(()=>{
          setLoading(true)
          fetch('https://multivendorapi.herokuapp.com/api/vendor/allvendors')
          .then(res => res.json())
          .then(data => {
               console.log(data)
               setVendors(data)
               setLoading(false)
          })
     },[])
     if(loading){
          return <CircularProgress />
      }
     return (
          <>
               <Grid container spacing={2}>
                    <VendorView vendors={vendors}></VendorView>
               </Grid>  
          </>
     );
};

export default VendorAll;