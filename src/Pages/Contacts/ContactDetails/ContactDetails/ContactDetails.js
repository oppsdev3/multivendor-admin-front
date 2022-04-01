import React,{useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';

const ContactDetails = ({contact}) => {
     let id = contact._id
     console.log(id)
     const [contacts,setContacts] = useState([])

     useEffect(()=>{
          fetch(`https://multivendorapex.herokuapp.com//api/admin/adminroute/allvendorcontact/${id}`)
          .then(res => res.json())
          .then(data =>{
               console.log(data)
               setContacts(data)
          })
     },[])
     return (
          <>
               <Grid container spacing={2}>
                    {/* {
                         products.map(product => )
                    } */}
               </Grid>      
          </>
     );
};

export default ContactDetails;