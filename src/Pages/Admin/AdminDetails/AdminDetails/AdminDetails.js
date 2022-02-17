import React, { useState,useEffect } from 'react';
import Grid from '@mui/material/Grid';
import AdminDetail from '../AdminDetail/AdminDetail';
import { CircularProgress } from '@mui/material';

const AdminDetails = ({admin}) => {
     const [loading,setLoading] = useState(false)
     let id = admin._id
     console.log(id)
     const [adminView,setAdminView] = useState([])
     const token = localStorage.getItem('token')
     useEffect(()=>{
          setLoading(true)
          fetch(`https://multivendorapi.herokuapp.com/api/admin/adminroute/alladmin/${id}`, {
               method: 'GET',
               headers: {
               'content-type': 'application/json',
               'Authorization': token
               },
               body: JSON.stringify(),

          })
          .then(res => res.json())
          .then(data =>{
               console.log(data)
               setAdminView(data)
               setLoading(false)
          })
     },[])

     if(loading){
          return <CircularProgress></CircularProgress>
     }

     return (
          <div>
               <Grid sx={{mt:1}} container spacing={2}>
                    <AdminDetail key={adminView._id} adminView={adminView}></AdminDetail>
               </Grid>  
          </div>
     );
};

export default AdminDetails;