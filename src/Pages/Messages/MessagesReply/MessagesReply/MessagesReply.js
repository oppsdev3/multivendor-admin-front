import React from 'react';
import  Button  from '@mui/material/Button';
import Reply from '../Reply/Reply';

const MessagesReply = ({message}) => {
     const [open, setOpen] = React.useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);
     return (
          <div>
               <Button  size='small' variant="contained" onClick={handleOpen}>
                    Reply
               </Button> 
               <Reply message={message} open={open} handleClose={handleClose}></Reply>
          </div>
     );
};

export default MessagesReply;