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
import CustomerUpdate from '../CustomerUpdate/CustomerUpdate';
import CustomerDelete from './../CustomerDelete/CustomerDelete';



function Row(props) {
     const { customer } = props;
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
          <TableCell align="center">{customer.title}</TableCell>
          <TableCell align="center">{customer.price}</TableCell>
          <TableCell align="center">{customer.sold}</TableCell>
          <TableCell align="center">{customer.description}</TableCell>
          <TableCell align="center">{customer.views}</TableCell>
          </TableRow>
          <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
               <Collapse in={open} timeout="auto" unmountOnExit>
               <Box sx={{ margin: 2, display:'flex' }}>
                    <CustomerUpdate customer={customer}></CustomerUpdate>
                    <CustomerDelete></CustomerDelete>
               </Box>
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
               <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                    <TableHead>
                         <TableRow>
                         <TableCell />
                         <TableCell align="center">Title</TableCell>
                         <TableCell align="center">Price</TableCell>
                         <TableCell align="center">Sold</TableCell>
                         <TableCell align="center">Description</TableCell>
                         <TableCell align="center">Views</TableCell>
                         </TableRow>
                    </TableHead>
                    <TableBody>
                         {customers.map((customer) => (
                              <Row key={customer._id} customer={customer} />
                              ))}
                    </TableBody>
                    </Table>
               </TableContainer>   
          </>
     );
};

export default Customer;