import React,{useEffect} from 'react';
import  Button  from '@mui/material/Button';

const CategoryDelete = ({category}) => {
     const token = localStorage.getItem('token')
     let id = category._id
     const handleClick = e =>{
               fetch(`https://multivendorapi.herokuapp.com/api/admin/adminroute/allcategory/${id}`, {
                    method: 'DELETE',
                    headers: {
                    'content-type': 'application/json',
                    'Authorization': token
                    },
                    body: JSON.stringify(),
     
               })
               .then(res => res.json())
               .then(data => {
                    console.log(data)
                    if(data.msg =="Deleted your this customer"){
                         alert ("Category deleted successfully")
                    }else{
                         alert("Category not deleted")
                    }
               })
               e.preventDefault()
     }
   
     return (
          <div>
               <Button
                    color="error"
                    variant="contained"
                    size='small'
                    sx={{ml:2}}
                    onClick={handleClick}
                    >
                    Delete
               </Button>
          </div>
     );
};

export default CategoryDelete;