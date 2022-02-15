import React from 'react';
import VendorsPending from '../VendorsPending/VendorsPending';
import  Button  from '@mui/material/Button';

const VendorEdit = ({vendor}) => {
     const [open, setOpen] = React.useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);
     return (
          <>
              
          <Button size='small' variant="contained" onClick={handleOpen}>
               Edit
          </Button> 
          <VendorsPending vendor={vendor} open={open} handleClose={handleClose}></VendorsPending>
          </>
     );
};

export default VendorEdit;