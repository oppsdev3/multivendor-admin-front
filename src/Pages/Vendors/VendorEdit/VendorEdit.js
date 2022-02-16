import React from 'react';
import VendorsPending from '../VendorsPending/VendorsPending';
import  Button  from '@mui/material/Button';
import VendorRole from '../VendorRole/VendorRole';

const VendorEdit = ({vendor}) => {
     const [open, setOpen] = React.useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);
     return (
          <>
              
          <Button  size='small' variant="contained" onClick={handleOpen}>
               Edit 
          </Button> 
          {/* <Button sx={{ml:2}} size='small' variant="contained" onClick={handleOpen}>
               Edit Status
          </Button>  */}
          <VendorsPending vendor={vendor} open={open} handleClose={handleClose}></VendorsPending>
          {/* <VendorRole vendor={vendor} open={open} handleClose={handleClose}></VendorRole> */}
          </>
     );
};

export default VendorEdit;