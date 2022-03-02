import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const VendorProduct = ({product}) => {
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
                    md={6}
                    lg={6}
                    >
                         
                    <Paper sx={{ py: 2, textAlign: 'center',backgroundColor:"#FFFFE0", }} elevation={4}>
                    <img src={product.imgUrl} alt={product.name} style={{width:"50%",borderRadius:"50%"}}/>
                         <Typography
                              sx={{ fontWeight:500, color:"#6B8E23",mt:2  }}
                              variant="h6"
                              gutterBottom
                              component="div"
                         >
                              Name: {product.name}
                         </Typography>
                         
                         <Typography
                              sx={{ fontWeight:500, color:"#6B8E23",mt:2  }}
                              variant="body1"
                              gutterBottom
                              component="div"
                         >
                              ID: {product._id}
                         </Typography>
                    </Paper>
               </Grid>  
          </>
     );
};

export default VendorProduct;