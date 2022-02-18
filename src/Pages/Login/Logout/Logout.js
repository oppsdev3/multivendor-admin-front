import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { useHistory } from 'react-router-dom';
import  {Button}  from '@mui/material';

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
          <div>
               <Button onClick={handleLogout} sx={{color:'white'}}>
               <LogoutIcon></LogoutIcon>
               </Button>
          </div>
     );
};

export default Logout;