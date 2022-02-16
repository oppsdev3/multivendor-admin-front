import React from 'react';
import  Button  from '@mui/material/Button';
import ContactModal from '../ContactModal/ContactModal';

const ContactUpdate = ({contact}) => {
     const [open, setOpen] = React.useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);
     return (
          <>
               <Button
                    onClick={handleOpen}
                    variant="contained"
                    sx={{mx:2}}
                    color="success"
                    size='small'
                    >
                    Edit
               </Button> 
               <ContactModal contact={contact} open={open} handleClose={handleClose}></ContactModal>
          </>
     );
};

export default ContactUpdate;