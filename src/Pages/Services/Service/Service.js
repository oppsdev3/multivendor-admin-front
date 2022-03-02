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
import Typography from '@mui/material/Typography';
import ServiceDetails from '../ServiceDetails/ServiceDetails/ServiceDetails';


function Row(props) {
     const { service,index } = props;
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
                    {service.name}
               </Typography></TableCell>
          <TableCell align="center">
          <Typography
                    sx={{ fontWeight:500 }}
                    variant="body2"
                    gutterBottom
                    component="div"
               >
                   serv - {index+1}
               </Typography></TableCell>

         
          </TableRow>
          <TableRow>
               <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                         <Box sx={{ margin: 2, display:'flex' }}>
                              <ServiceDetails service={service} key={service._id}></ServiceDetails>
                         </Box>
                    </Collapse>
               </TableCell>
          </TableRow>
     </React.Fragment>
     );
     }

const Service = ({services}) => {
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
                                   SERVICE TITLE
                              </Typography></TableCell>
                         <TableCell align="center"><Typography
                                   sx={{ color: 'tomato', fontWeight:600 }}
                                   variant="h6"
                                   gutterBottom
                                   component="div"
                              >
                                   SERVICE ID
                              </Typography></TableCell>
                        
                         
                         </TableRow>
                    </TableHead>
                    <TableBody>
                         {services.map((service, index) => (
                              <Row key={service._id} index={index} service={service} />
                              ))}
                    </TableBody>
                    </Table>
               </TableContainer>  
          </>
     );
};

export default Service;