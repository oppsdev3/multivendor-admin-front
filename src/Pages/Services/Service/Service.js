import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


const Service = ({services}) => {
     return (
          <>
               <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                         <TableRow>
                         <TableCell align="center">
                              <Typography
                                   sx={{ color: 'tomato', fontWeight:900 }}
                                   variant="h6"
                                   gutterBottom
                                   component="div"
                              >
                                   TITLE
                              </Typography>
                         </TableCell>
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
                         <TableCell align="center">
                              <Typography
                                   sx={{ color: 'tomato', fontWeight:900 }}
                                   variant="h6"
                                   gutterBottom
                                   component="div"
                              >
                                   DATE
                              </Typography>
                         </TableCell>
                         
                         </TableRow>
                    </TableHead>
                    <TableBody>
                         {services.map((service) => (
                         <TableRow
                         key={service.name}
                         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                         >
                         <TableCell align="center">
                              <Typography
                                   sx={{ color: '#04AA6D', fontWeight:900 }}
                                   variant="body1"
                                   gutterBottom
                                   component="div"
                              >
                                   {service.name}
                              </Typography>
                         </TableCell>
                         <TableCell align="center">
                              <Typography
                                   sx={{ color: '#04AA6D', fontWeight:900 }}
                                   variant="body1"
                                   gutterBottom
                                   component="div"
                              >
                                   {service._id}
                              </Typography>
                         </TableCell>
                         <TableCell align="center"><Typography
                                   sx={{ color: '#04AA6D', fontWeight:900 }}
                                   variant="body1"
                                   gutterBottom
                                   component="div"
                              >
                                   {service.updatedAt}
                              </Typography></TableCell>
                         </TableRow>
                         ))}
                    </TableBody>
                    </Table>
               </TableContainer>
          </>
     );
};

export default Service;