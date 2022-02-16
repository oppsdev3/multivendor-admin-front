import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


const CategoryDetail = ({categories}) => {
     return (
          <>
              {/* <Typography
                         sx={{ color: 'info.main',mt:4 }}
                         variant="body1"
                         gutterBottom
                         component="div"

                    >
                         All Products
                    </Typography>        */}
                
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
                              {categories.name}
                         </Typography>
                         
                         <Typography
                              sx={{ color: 'red' }}
                              variant="body1"
                              gutterBottom
                              component="div"
                         >
                              {categories._id}
                         </Typography>
                    </Paper>
               </Grid>    
          </>
     );
};

export default CategoryDetail;