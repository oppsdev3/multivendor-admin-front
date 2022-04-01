import React,{useState,useEffect} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const ServiceDetails = ({service}) => {
     console.log(service)
          const [services,setServices] = useState([])
          const [loading,setLoading] = useState(false)
          const token = localStorage.getItem('token')
          let id = service._id
          useEffect(()=>{
               setLoading(true)
               fetch(`https://multivendorapex.herokuapp.com/api/admin/adminroute/allservice/${id}`, {
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
                    setServices(data)
                    setLoading(false)
               })
     
          },[])
          if(loading){
              return <CircularProgress />
          }
     return (
          <>
               <Grid  container spacing={2}>
                  <ServiceDetail services={services} key={services._id}></ServiceDetail>  
               </Grid>  
          </>
     );
};

export default ServiceDetails;