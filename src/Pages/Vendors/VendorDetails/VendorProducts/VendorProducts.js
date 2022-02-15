import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import VendorProduct from '../VendorProduct/VendorProduct';


const VendorProducts = ({vendor}) => {
     const products = vendor.services

     return (
          <>
                    <Typography
                         sx={{ color: 'info.main',mt:4 }}
                         variant="body1"
                         gutterBottom
                         component="div"

                    >
                         All Products
                    </Typography>       
               <Grid container spacing={2}>
                    {
                         products.map(product => <VendorProduct product={product}></VendorProduct>)
                    }
               </Grid> 
          </>
     );
};

export default VendorProducts;