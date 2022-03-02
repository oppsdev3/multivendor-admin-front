import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const BannerDetails = ({banner}) => {
     console.log(banner)
     return (
               <Grid container spacing={2}>
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
                    <Paper sx={{ py: 1, textAlign: 'center',backgroundColor:"#FFFFE0", }} elevation={4}>
                         <img src={banner.imgUrl} style={{width:"100%"}} alt="" />
                         <Typography
                              sx={{ fontWeight:500,color:"#6B8E23",mt:1 }}
                              variant="h6"
                              gutterBottom
                              component="div"
                         >
                             Title: {banner.title}
                         </Typography>
                    </Paper>
               </Grid> 
               </Grid>    
     );
};

export default BannerDetails;