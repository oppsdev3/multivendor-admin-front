import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Message from '../Message/Message';
import  Box  from '@mui/material/Box';

const Messages = () => {
     const [messages,setMessages] = useState([])
     const [loading,setLoading] = useState(false)
     const token = localStorage.getItem('token')
     useEffect(()=>{
          setLoading(true)
          fetch('https://multivendorapi.herokuapp.com/api/firebasemessage', {
               method: 'GET',
               headers: {
               'content-type': 'application/json',
               'Authorization': token
               },
               body: JSON.stringify(),

          })
          .then(res => res.json())
          .then(data => {
               console.log(data)
               setMessages(data)
               setLoading(false)
          })

     },[])
     if(loading){
         return <CircularProgress />
     }
     return (
          <Box sx={{mt:2}}>
               <Message messages={messages}></Message>
          </Box>
     );
};

export default Messages;