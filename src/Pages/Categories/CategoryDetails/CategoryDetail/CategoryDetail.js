import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const CategoryDetail = () => {
     return (
          <>
              <Typography
                         sx={{ color: 'info.main',mt:4 }}
                         variant="body1"
                         gutterBottom
                         component="div"

                    >
                         All Products
                    </Typography>       
               <Grid container spacing={2}>
                   
               </Grid>   
          </>
     );
};

export default CategoryDetail;