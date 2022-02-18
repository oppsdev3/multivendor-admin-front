import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const ProductDetail = ({products}) => {
     return (
          <>
               <Grid
                    sx={{
                         height: 'auto',
                    }}
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    >
                    <Paper sx={{ py: 2, textAlign: 'center' }} elevation={3}>
                         <img src={products.images} style={{width:"50%"}} alt="" />
                         <Typography
                              sx={{ color: 'info.main' }}
                              variant="body1"
                              gutterBottom
                              component="div"
                         >
                             Title: {products.title}
                         </Typography>
                         
                         <Typography
                              sx={{ color: 'red' }}
                              variant="body1"
                              gutterBottom
                              component="div"
                         >
                              {products.availstatus}
                         </Typography>

                         <Typography
                              sx={{ color: 'red' }}
                              variant="body1"
                              gutterBottom
                              component="div"
                         >
                              {products.content}
                         </Typography>

                         <Typography
                              sx={{ color: 'red' }}
                              variant="body1"
                              gutterBottom
                              component="div"
                         >
                             Price: {products.price}
                         </Typography>
                         
                         <Typography
                              sx={{ color: 'red' }}
                              variant="body1"
                              gutterBottom
                              component="div"
                         >
                             Sold: {products.sold}
                         </Typography>
                    </Paper>
               </Grid>    
          </>
     );
};

export default ProductDetail;