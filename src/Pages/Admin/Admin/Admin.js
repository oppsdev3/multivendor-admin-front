import React,{useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import AdminProfile from '../AdminProfile/AdminProfile';

const Admin = () => {
     const [adminProfile,setAdminProfile] = useState([])
     const [loading,setLoading] = useState(false)
     const token = localStorage.getItem('token')
     useEffect(()=>{
          setLoading(true)
          fetch('https://multivendorapi.herokuapp.com/api/admin/adminroute/alladmin', {
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
               setAdminProfile(data)
               setLoading(false)
          })

     },[])
     if(loading){
         return <CircularProgress />
     }
     return (
          <div>
               <AdminProfile adminProfile={adminProfile}></AdminProfile>
          </div>
     );
};

export default Admin;