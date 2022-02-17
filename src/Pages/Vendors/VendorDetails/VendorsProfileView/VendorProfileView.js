import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const VendorProfileView = ({vendors}) => {
     return (
          <>
              <Grid
                    sx={{
                         height: 'auto',
                    }}
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    >
                    <Paper sx={{ py: 2, textAlign: 'center' }} elevation={3}>
                         <img src={vendors.profileImg} style={{width:'25%',borderRadius: '50%'}} alt="" />
                         <Typography
                              sx={{ color: 'info.main' }}
                              variant="body1"
                              gutterBottom
                              component="div"
                         >
                             Title: {vendors.name}
                         </Typography>
                         
                         <Typography
                              sx={{ color: 'info.main' }}
                              variant="body1"
                              gutterBottom
                              component="div"
                         >
                              {vendors.phoneNo}
                         </Typography>
                         <Typography
                         
                         sx={{ color: 'info.main' }}
                              variant="body1"
                              gutterBottom
                              component="div"
                         >
                             Address: {vendors.address}
                         </Typography>

                         {
                              vendors.active === true ?

                              <Typography
                              sx={{ color: 'info.main' }}
                              variant="body1"
                              gutterBottom
                              component="div"
                              >
                                   Status: Active
                              </Typography>
                              :
                              <Typography
                              sx={{ color: 'info.main' }}
                              variant="body1"
                              gutterBottom
                              component="div"
                              >
                                   Statusp: Inactive
                              </Typography>
                         }
                         
                    </Paper>
               </Grid>   
          </>
     );
};

export default VendorProfileView;