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
                         mb:2
                    }}
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    >
                         <Typography
                              sx={{ fontWeight:500,textAlign: 'center',mb:3, color:"#6B8E23",mt:2  }}
                              variant="h4"
                              gutterBottom
                              component="div"
                              
                         >
                             PROFILE 
                         </Typography>
                    <Paper sx={{ py: 2, textAlign: 'center',backgroundColor:"#FFFFE0", }} elevation={4}>
                         <img src={vendors.profileImg} style={{width:'75%',borderRadius: '50%'}} alt="" />
                         <Typography
                              sx={{ fontWeight:500, color:"#6B8E23",mt:2  }}
                              variant="h6"
                              gutterBottom
                              component="div"
                         >
                             Title: {vendors.name}
                         </Typography>
                         
                         <Typography
                              sx={{ fontWeight:500, color:"#6B8E23",mt:2  }}
                              variant="h6"
                              gutterBottom
                              component="div"
                         >
                              Phone: {vendors.phoneNo}
                         </Typography>
                         {
                              vendors.address &&
                                   <Typography
                                        sx={{ fontWeight:500, color:"#6B8E23",mt:2  }}
                                        variant="h6"
                                        gutterBottom
                                        component="div"
                                   >
                                        Address: {vendors.address}
                                   </Typography>
                         }

                         {
                              vendors.active === true ?

                              <Typography
                              sx={{ fontWeight:500, color:"#6B8E23",mt:2  }}
                              variant="h6"
                              gutterBottom
                              component="div"
                              >
                                   Status: Active
                              </Typography>
                              :
                              <Typography
                              sx={{ fontWeight:500, color:"#6B8E23",mt:2  }}
                              variant="h6"
                              gutterBottom
                              component="div"
                              >
                                   Status: Inactive
                              </Typography>
                         }
                         
                    </Paper>
               </Grid>   
          </>
     );
};

export default VendorProfileView;