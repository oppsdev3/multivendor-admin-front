import React from 'react';
import  Button  from '@mui/material/Button';
import BannerModal from '../BannerModal/BannerModal';

const BannerAdd = () => {
     const [open, setOpen] = React.useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);
     return (
          <div>
               <Button  size='small' variant="contained" onClick={handleOpen}>
                     NEW Banner
               </Button> 
               <BannerModal open={open} handleClose={handleClose}></BannerModal>
          </div>
     );
};

export default BannerAdd;