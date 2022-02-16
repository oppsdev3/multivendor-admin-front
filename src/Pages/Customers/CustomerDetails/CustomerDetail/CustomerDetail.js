import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const CustomerDetail = () => {
     return (
          <>
               <Grid
                    sx={{
                         height: 150,
                    }}
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    >
                    <Paper sx={{ py: 2, textAlign: 'center' }} elevation={3}>
                         <Typography
                              sx={{ color: 'info.main' }}
                              variant="body1"
                              gutterBottom
                              component="div"
                         >
                              {}
                         </Typography>
                         
                         <Typography
                              sx={{ color: 'red' }}
                              variant="body1"
                              gutterBottom
                              component="div"
                         >
                              {}
                         </Typography>
                    </Paper>
               </Grid>     
          </>
     );
};

export default CustomerDetail;