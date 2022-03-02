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
                    <Paper sx={{ py: 1, textAlign: 'center' }} elevation={5}>
                         <img src={banner.imgUrl} style={{width:"100%"}} alt="" />
                         <Typography
                              sx={{ color: 'info.main' }}
                              variant="body1"
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