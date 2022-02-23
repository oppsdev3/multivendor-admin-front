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
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CustomerUpdate from '../CustomerUpdate/CustomerUpdate';
import CustomerDelete from './../CustomerDelete/CustomerDelete';
import CustomerDetails from '../CustomerDetails/CustomerDetails/CustomerDetails';



function Row(props) {
     const { customer,index } = props;
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
                    sx={{ color: '#04AA6D', fontWeight:700 }}
                    variant="body1"
                    gutterBottom
                    component="div"
               >
                    {customer.phoneNo}
               </Typography>
          </TableCell>
          <TableCell align="center">
               {
                    customer.status == "active" ? 
                    <Typography
                         sx={{ color: '#04AA6D', fontWeight:700 }}
                         variant="body1"
                         gutterBottom
                         component="div"
                    >
                    {customer.status}
                    </Typography>
                    :
                    <Typography
                         sx={{ color: 'red', fontWeight:700 }}
                         variant="body1"
                         gutterBottom
                         component="div"
                    >
                    {customer.status}
                    </Typography>
               }
               
          </TableCell>
          <TableCell align="center"><Typography
                         sx={{ color: '#04AA6D', fontWeight:700 }}
                         variant="body1"
                         gutterBottom
                         component="div"
                    >
                    cus - {index+1}
                    </Typography></TableCell>
          <TableCell align="center"><Typography
                         sx={{ color: '#04AA6D', fontWeight:700 }}
                         variant="body1"
                         gutterBottom
                         component="div"
                    >
                    <CustomerUpdate customer={customer}></CustomerUpdate>
                    </Typography></TableCell>
          </TableRow>
          <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
               <Collapse in={open} timeout="auto" unmountOnExit>
               <Box sx={{ margin: 2, display:'flex' }}>
                    
                    {/* <CustomerDelete customer={customer}></CustomerDelete> */}
                    
               </Box>
               <CustomerDetails customer={customer}></CustomerDetails>
               </Collapse>
          </TableCell>
          </TableRow>
     </React.Fragment>
     );
     }
     
const Customer = ({customers}) => {
     console.log(customers)
     return (
          <>
               <TableContainer sx={{mt:2}} component={Paper}>
                    <Table aria-label="collapsible table">
                    <TableHead>
                         <TableRow>
                         <TableCell />
                         <TableCell align="center">
                              <Typography
                                   sx={{ color: 'tomato', fontWeight:700 }}
                                   variant="h5"
                                   gutterBottom
                                   component="div"
                              >
                              Customer Phone
                              </Typography>
                         </TableCell>
                         <TableCell align="center">
                              <Typography
                                   sx={{ color: 'tomato', fontWeight:700 }}
                                   variant="h5"
                                   gutterBottom
                                   component="div"
                              >
                                   Customer Status
                              </Typography>
                              </TableCell>
                         <TableCell align="center">
                              <Typography
                                   sx={{ color: 'tomato', fontWeight:700 }}
                                   variant="h5"
                                   gutterBottom
                                   component="div"
                              >
                                   Customer ID
                              </Typography>
                              
                         </TableCell>
                         </TableRow>
                    </TableHead>
                    <TableBody>
                         {customers.map((customer,index) => (
                              <Row key={customer._id} index={index} customer={customer} />
                              ))}
                    </TableBody>
                    </Table>
               </TableContainer>   
          </>
     );
};

export default Customer;