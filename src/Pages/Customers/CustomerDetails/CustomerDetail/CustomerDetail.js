import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const CustomerDetail = ({customers}) => {
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
                    <Paper sx={{ py: 2, textAlign: 'center',  }} elevation={3}>
                         {/* <img src={customers} alt="" /> */}
                         
                         
                         <Typography
                              sx={{ fontWeight:700 }}
                              variant="h6"
                              gutterBottom
                              component="div"
                         >
                             PHONE - {customers.phoneNo}
                         </Typography>
                    </Paper>
               </Grid>     
          </>
     );
};

export default CustomerDetail;