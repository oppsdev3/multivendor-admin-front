import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const CustomerDetail = ({customers}) => {
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
                    <Paper sx={{ py: 2, textAlign: 'center', backgroundColor:"#FFFFE0",  }} elevation={4}>
                         <img src={customers.profileImg} alt={customers.name} style={{width:"50%",borderRadius:"50%"}}/>
                         
                         
                         <Typography
                              sx={{ fontWeight:500, color:"#6B8E23",mt:2  }}
                              variant="h6"
                              gutterBottom
                              component="div"
                              
                         >
                             Phone: {customers.phoneNo} 
                         </Typography>
                         {
                              customers.email && <Typography
                              sx={{ fontWeight:500,color:"#6B8E23" }}
                              variant="h6"
                              gutterBottom
                              component="div"
                         >
                             email: {customers.email}
                         </Typography>
                         }
                        
                    </Paper>
               </Grid>     
          </>
     );
};

export default CustomerDetail;