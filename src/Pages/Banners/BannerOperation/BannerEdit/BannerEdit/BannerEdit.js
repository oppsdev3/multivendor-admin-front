import React from 'react';
import  Button  from '@mui/material/Button';
import EditModal from '../EditModal/EditModal';

const BannerEdit = ({banner}) => {
     const [open, setOpen] = React.useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);
     return (
          <div>
               <Button  size='small' variant="contained" onClick={handleOpen}>
                    Edit
               </Button>  
               <EditModal banner={banner} open={open} handleClose={handleClose}></EditModal>
          </div>
     );
};

export default BannerEdit;