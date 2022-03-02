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
                         mb:2
                    }}
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    >
                    <Paper sx={{ py: 1, textAlign: 'center',backgroundColor:"#FFFFE0", }} elevation={4}>
                         <img src={products.images} style={{width:"100%"}}  alt="" />
                         <Typography
                               sx={{ fontWeight:500,color:"#6B8E23" }}
                              variant="h6"
                              gutterBottom
                              component="div"
                         >
                             Title: {products.title}
                         </Typography>

                         

                         <Typography
                               sx={{ fontWeight:500,color:"#6B8E23" }}
                              variant="h6"
                              gutterBottom
                              component="div"
                         >
                             Price: {products.price}
                         </Typography>
                         
                         <Typography
                              sx={{ fontWeight:500,color:"#6B8E23" }}
                              variant="h6"
                              gutterBottom
                              component="div"
                         >
                             Sold Item: {products.sold}
                         </Typography>
                    </Paper>
               </Grid>    
          </>
     );
};

export default ProductDetail;