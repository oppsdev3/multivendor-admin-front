import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';


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

const EditModal = ({ open, handleClose,banner }) => {
     const token = localStorage.getItem('token')
     const [name, setName] = useState('') 
     const [image,setImage] = useState('')
     let id = banner._id
     console.log(id)

     const handleNameChange = (e) =>{
          setName(e.target.value)
          e.preventDefault()
     }
     const handleImageChange = (e) =>{
          setImage(e.target.value)
          e.preventDefault()
     }
     const handleSubmit = e => {
          const bannerInfo = {
               title: name,
               imgUrl:image,
          }
          console.log(bannerInfo)
          fetch(`https://multivendorapi.herokuapp.com/api/banner/${id}`, {
               method: 'PATCH',
               headers: {
                    'content-type': 'application/json',
                    'Authorization': token
               },
               body: JSON.stringify(bannerInfo),
               })
               .then(res => res.json())
               .then(info => {
                    console.log(info);
                    handleClose();
               });
          e.preventDefault()
     }
     return (
          <div>
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
                                        <TextField 
                                        sx={{mb:3,width:'75%'}}  
                                        required
                                        id="filled-required"
                                        label="title"
                                        onChange={handleNameChange}
                                        variant="filled"
                                        />
                                        <input 
                                        required 
                                        type="file"
                                        name ="upload"
                                        onChange={handleImageChange}
                                        />     
                                   </Box>

                                   <Box sx={{mt:2, textAlign:'center'}}>
                                        <input type="submit" />
                                   </Box>
                              </form>
                         </Box>
                    </Grid>
               </Box>
               </Modal>      
          </div>
     );
};

export default EditModal;