import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import VendorProduct from '../VendorProduct/VendorProduct';


const VendorProducts = ({vendor}) => {
     const products = vendor.services

     return (
          <>
               <Grid container spacing={2}>
                       
                    {
                         products.map(product => <VendorProduct key={product._id} product={product}></VendorProduct>)
                    }
               </Grid> 
          </>
     );
};

export default VendorProducts;