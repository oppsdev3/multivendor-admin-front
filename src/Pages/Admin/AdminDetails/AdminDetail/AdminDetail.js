import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const AdminDetail = ({adminView}) => {
     return (
          <>
             <Grid
                    sx={{
                         height: 'auto',
                    }}
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    >
                    <Paper sx={{ py: 2, textAlign: 'center' }} elevation={4}>
                         <img src={adminView.profileImg} alt="" style={{width:'50%',borderRadius: '50%'}} />
                         <Typography
                              sx={{ color: 'info.main' }}
                              variant="body1"
                              gutterBottom
                              component="div"
                         >
                             Title: {adminView.title}
                         </Typography>
                         
                         <Typography
                              sx={{ color: 'red' }}
                              variant="body1"
                              gutterBottom
                              component="div"
                         >
                              Role: {adminView.role}
                         </Typography>

                         <Typography
                              sx={{ color: 'red' }}
                              variant="body1"
                              gutterBottom
                              component="div"
                         >
                             Status: {adminView.status}
                         </Typography>
                    </Paper>
               </Grid>      
          </>
     );
};

export default AdminDetail;