import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';

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
     const [imgUrl,setImageUrl] = useState('')
     const [description,setDescription] = useState('')
    
     const handleChange = e => {
          setStatus(e.target.value);
        };

     const handleNameChange = (e) =>{
          setName(e.target.value)
          e.preventDefault()
     }
     const handleImageChange = async e=>{
          const file = e.target.files[0]
          console.log(file)
          const formData = new FormData()
          formData.append("file",file)
          const res = await axios.post('https://multivendorapi.herokuapp.com/api/upload', formData, {
               headers: {'content-type': 'multipart/form-data'}
           })
           console.log(res.data.url)
           setImageUrl(res.data.url)
          e.preventDefault()
     }
     const handleDescriptionChange = (e) =>{
          setDescription(e.target.value)
          e.preventDefault()
     }

    

     const handleSubmit = e => {
          const bannerInfo = {
               title: name,
               imgUrl,
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
                                             name ="file"
                                             onChange={e => handleImageChange(e)}
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







// fetch (`https://multivendorapi.herokuapp.com/api/upload`, {
//                method: 'POST',
//                headers: {
//                     'content-type': 'multipart/form-data',
//                },
//                body: JSON.stringify(formData),
//                })
//                .then(res => res.json())
//                .then(info => {
//                     setImageUrl(info);
//                     console.log(info)
//                });










