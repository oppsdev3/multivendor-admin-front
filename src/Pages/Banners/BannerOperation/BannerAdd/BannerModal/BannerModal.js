import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

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

   const bannerStatus = [
     {
       value: 'true',
       label: 'true',
     },
     {
       value: 'false',
       label: 'false',
     },
   ];

const BannerModal = ({ open, handleClose }) => {
     const token = localStorage.getItem('token')
     const [status, setStatus] = useState('');
     const [name, setName] = useState('') 
     const [image,setImage] = useState('')
     const [description,setDescription] = useState('')

     const handleChange = e => {
          setStatus(e.target.value);
        };

     const handleNameChange = (e) =>{
          setName(e.target.value)
          e.preventDefault()
     }
     const handleImageChange = (e) =>{
          setImage(e.target.files[0].name)
          e.preventDefault()
     }
     const handleDescriptionChange = (e) =>{
          setDescription(e.target.value)
          e.preventDefault()
     }

    

     const handleSubmit = e => {
          const bannerInfo = {
               title: name,
               imgUrl:image,
               description: description,
               displayStatus:Boolean(status)
          }
          console.log(bannerInfo)
          fetch(`https://multivendorapi.herokuapp.com/api/banner`, {
               method: 'POST',
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
                                        <TextField 
                                        sx={{mb:3,width:'75%'}}  
                                        required
                                        id="filled-required"
                                        label="description"
                                        onChange={handleDescriptionChange}
                                        variant="filled"
                                        />
                                         <TextField
                                             id="filled-required"
                                             select
                                             required
                                             label="Status"
                                             sx={{mb:3,width:'75%'}}
                                             name="status"
                                             
                                             value={status}
                                             onChange={handleChange}
                                             size="small"
                                             defaultValue="true"
                                             variant="filled"
                                             >
                                             {bannerStatus.map(option => (
                                                  <MenuItem key={option.value} value={option.value}>
                                                  {option.label}
                                                  </MenuItem>
                                             ))}
                                             </TextField>

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

export default BannerModal;