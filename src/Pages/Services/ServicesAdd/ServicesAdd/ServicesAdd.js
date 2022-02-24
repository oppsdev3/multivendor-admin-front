import React from 'react';
import  Button  from '@mui/material/Button';
import ServicesModal from '../ServicesModal/ServicesModal';

const ServicesAdd = () => {
     const [open, setOpen] = React.useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);
     return (
          <div>
               <Button  size='small' variant="contained" onClick={handleOpen}>
                    New Service
               </Button> 
               <ServicesModal open={open} handleClose={handleClose}></ServicesModal>
          </div>
     );
};

export default ServicesAdd;