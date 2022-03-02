import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CategoryDetails from '../CategoryDetails/CategoryDetails/CategoryDetails';
import CategoryAdd from '../CategoryAdd/CategoryAdd/CategoryAdd';
import CategoryDelete from '../CategoryDelete/CategoryDelete';
import Typography from '@mui/material/Typography';

function Row(props) {
     const { category,index } = props;
     const [open, setOpen] = React.useState(false);

     return (
     <React.Fragment>
          <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
               <IconButton
               aria-label="expand row"
               size="small"
               onClick={() => setOpen(!open)}
               >
               {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
               </IconButton>
          </TableCell>
          <TableCell align="center">
          <Typography
                    sx={{  fontWeight:500 }}
                    variant="body2"
                    gutterBottom
                    component="div"
               >
                    {category.name}
               </Typography></TableCell>
          <TableCell align="center">
          <Typography
                    sx={{ fontWeight:500 }}
                    variant="body2"
                    gutterBottom
                    component="div"
               >
                   cat - {index+1}
               </Typography></TableCell>
          <TableCell align="center">
              
          </TableCell>
          <TableCell align="center">
               <CategoryDelete category={category}></CategoryDelete>
          </TableCell>

         
          </TableRow>
          <TableRow>
               <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 2, display:'flex' }}>
                         {/* <CategoryAdd></CategoryAdd> */}
                         
                    </Box>
                         <CategoryDetails category={category}></CategoryDetails> 
                    </Collapse>
               </TableCell>
          </TableRow>
     </React.Fragment>
     );
     }

const Category = ({categories}) => {
     console.log(categories)
     return (
          <>
              <TableContainer sx={{mt:1}} component={Paper}>
                    <Table aria-label="collapsible table">
                    <TableHead>
                         <TableRow>
                         <TableCell />
                         <TableCell align="center">
                              <Typography
                                   sx={{ color: 'tomato', fontWeight:600 }}
                                   variant="h6"
                                   gutterBottom
                                   component="div"
                              >
                                   CATEGORY TITLE
                              </Typography></TableCell>
                         <TableCell align="center"><Typography
                                   sx={{ color: 'tomato', fontWeight:600 }}
                                   variant="h6"
                                   gutterBottom
                                   component="div"
                              >
                                   CATEGORY ID
                              </Typography></TableCell>
                         <TableCell align="center"><Typography
                                   sx={{ color: 'tomato', fontWeight:600 }}
                                   variant="h6"
                                   gutterBottom
                                   component="div"
                              >
                                   TOTAL CATEGORY
                              </Typography></TableCell>
                        
                         
                         </TableRow>
                    </TableHead>
                    <TableBody>
                         {categories.map((category, index) => (
                              <Row key={category._id} index={index} category={category} />
                              ))}
                    </TableBody>
                    </Table>
               </TableContainer>  
          </>
     );
};

export default Category;