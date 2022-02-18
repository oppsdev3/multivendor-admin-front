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
import Typography from '@mui/material/Typography';

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
          <TableCell align="center"><Typography
                    sx={{ color: '#04AA6D', fontWeight:900 }}
                    variant="body1"
                    gutterBottom
                    component="div"
               >
                    {admin._id}
               </Typography></TableCell>
          <TableCell align="center"><Typography
                    sx={{ color: '#04AA6D', fontWeight:900 }}
                    variant="body1"
                    gutterBottom
                    component="div"
               >
                    {admin.name}
               </Typography></TableCell>
          <TableCell align="center"><Typography
                    sx={{ color: '#04AA6D', fontWeight:900 }}
                    variant="body1"
                    gutterBottom
                    component="div"
               >
                    {admin.phoneNo}
               </Typography></TableCell>
          <TableCell align="center"><Typography
                    sx={{ color: '#04AA6D', fontWeight:900 }}
                    variant="body1"
                    gutterBottom
                    component="div"
               >
                    {admin.email}
               </Typography></TableCell>
          <TableCell align="center"><Typography
                    sx={{ color: '#04AA6D', fontWeight:900 }}
                    variant="body1"
                    gutterBottom
                    component="div"
               >
                    {admin.address}
               </Typography></TableCell>
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
                         <TableCell align="center">
                              <Typography
                                   sx={{ color: 'tomato', fontWeight:900 }}
                                   variant="h6"
                                   gutterBottom
                                   component="div"
                              >
                                   ID
                              </Typography>
                         </TableCell>
                         <TableCell align="center"><Typography
                                   sx={{ color: 'tomato', fontWeight:900 }}
                                   variant="h6"
                                   gutterBottom
                                   component="div"
                              >
                                   NAME
                              </Typography></TableCell>
                         <TableCell align="center"><Typography
                                   sx={{ color: 'tomato', fontWeight:900 }}
                                   variant="h6"
                                   gutterBottom
                                   component="div"
                              >
                                   PHONE
                              </Typography></TableCell>
                         <TableCell align="center"><Typography
                                   sx={{ color: 'tomato', fontWeight:900 }}
                                   variant="h6"
                                   gutterBottom
                                   component="div"
                              >
                                   EMAIL
                              </Typography></TableCell>
                         <TableCell align="center"><Typography
                                   sx={{ color: 'tomato', fontWeight:900 }}
                                   variant="h6"
                                   gutterBottom
                                   component="div"
                              >
                                   ADDRESS
                              </Typography></TableCell>
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