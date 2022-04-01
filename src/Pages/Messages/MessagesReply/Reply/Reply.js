import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';




const style = {
     position: 'absolute',
     top: '50%',
     left: '50%',
     transform: 'translate(-50%, -50%)',
     width: 400,
     bgcolor: 'background.paper',
     border: '2px solid #000',
     boxShadow: 24,
     p: 4,
   };

const Reply = ({ open, handleClose,message }) => {
     const token = localStorage.getItem('token')
     let id = message._id
     const [textReply, setTextReply] = useState('') 

     const handleNameChange = (e) =>{
          setTextReply(e.target.value)
          e.preventDefault()
     }
     const handleSubmit = e => {
          const replyMessage = {
               reply : textReply,
          }
          console.log(replyMessage)
          fetch(`https://multivendorapex.herokuapp.com/api/firebasemessage/${id}`, {
               method: 'PATCH',
               headers: {
                    'content-type': 'application/json',
                    'Authorization': token
               },
               body: JSON.stringify(replyMessage),
               })
               .then(res => res.json())
               .then(info => {
                    console.log(info);
                    handleClose();
               });
          e.preventDefault()
     }
     return (
          <>
               <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
               >
               <Box sx={style}>
                    <Grid>
                         <Box> 
                              <form onSubmit={handleSubmit}>
                                   <Box sx={{textAlign:'center'}}>
                                        <textarea onChange={handleNameChange} rows="4" cols="40">
                                        </textarea>
                                   </Box>

                                   <Box sx={{ textAlign:'center'}}>
                                        <input type="submit" />
                                   </Box>
                              </form>
                         </Box>
                    </Grid>
               </Box>
               </Modal>      
          </>
     );
};

export default Reply;