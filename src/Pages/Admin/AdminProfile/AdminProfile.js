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
import AdminDetails from '../AdminDetails/AdminDetails/AdminDetails';


function Row(props) {
     const { admin } = props;
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
          <TableCell align="center">{admin._id}</TableCell>
          <TableCell align="center">{admin.name}</TableCell>
          <TableCell align="center">{admin.phoneNo}</TableCell>
          <TableCell align="center">{admin.email}</TableCell>
          <TableCell align="center">{admin.address}</TableCell>
          </TableRow>
          <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
               <Collapse in={open} timeout="auto" unmountOnExit>
               <Box sx={{ margin: 2, display:'flex' }}>
                   <AdminDetails admin={admin}></AdminDetails> 
               </Box>
               
               </Collapse>
          </TableCell>
          </TableRow>
     </React.Fragment>
     );
     }
const AdminProfile = ({adminProfile}) => {
     return (
          <>
              <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                    <TableHead>
                         <TableRow>
                         <TableCell />
                         <TableCell align="center">ID</TableCell>
                         <TableCell align="center">Name</TableCell>
                         <TableCell align="center">Phone</TableCell>
                         <TableCell align="center">Email</TableCell>
                         <TableCell align="center">Address</TableCell>
                         </TableRow>
                    </TableHead>
                    <TableBody>
                         {adminProfile.map((admin) => (
                              <Row key={admin._id} admin={admin} />
                              ))}
                    </TableBody>
                    </Table>
               </TableContainer> 
          </>
     );
};

export default AdminProfile;