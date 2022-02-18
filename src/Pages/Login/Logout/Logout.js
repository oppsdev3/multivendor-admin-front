import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { useHistory } from 'react-router-dom';
import  {Button}  from '@mui/material';
import  Box  from '@mui/material/Box';

const Logout = () => {
     const history = useHistory();
     
     const handleLogout = (e) =>{
          console.log('click')
          const destination = '/login';
          history.replace(destination);
          localStorage.clear()
          e.preventDefault()
     }
     return (
          <Box>
               <Button  onClick={handleLogout} sx={{color:'white',}}>
                    <LogoutIcon></LogoutIcon>
               </Button>
          </Box>
     );
};

export default Logout;