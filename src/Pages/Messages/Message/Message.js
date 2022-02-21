import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Message = ({messages}) => {
     return (
          <>
               <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                         <TableRow>
                         <TableCell align="center">
                              <Typography
                                   sx={{ color: 'tomato', fontWeight:700 }}
                                   variant="h6"
                                   gutterBottom
                                   component="div"
                              >
                                  Text
                              </Typography>
                         </TableCell>
                         <TableCell align="center">
                              <Typography
                                   sx={{ color: 'tomato', fontWeight:700 }}
                                   variant="h6"
                                   gutterBottom
                                   component="div"
                              >
                                  
                                   Receiver Phone
                              </Typography>
                         </TableCell>
                         <TableCell align="center">
                              <Typography
                                   sx={{ color: 'tomato', fontWeight:700 }}
                                   variant="h6"
                                   gutterBottom
                                   component="div"
                              >
                                 Sender Phone
                              </Typography>
                         </TableCell>
                         
                         </TableRow>
                    </TableHead>
                    <TableBody>
                         {messages.map((message,index) => (
                         <TableRow
                         key={message._id}
                         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                         >
                         <TableCell align="center">
                              <Typography
                                   sx={{ color: '#04AA6D', fontWeight:700 }}
                                   variant="body1"
                                   gutterBottom
                                   component="div"
                              >
                                   {message.text}
                              </Typography>
                         </TableCell>
                         <TableCell align="center">
                              <Typography
                                   sx={{ color: '#04AA6D', fontWeight:700 }}
                                   variant="body1"
                                   gutterBottom
                                   component="div"
                              >
                                   {message.receiver.phoneNo}
                              </Typography>
                         </TableCell>
                         <TableCell align="center"><Typography
                                   sx={{ color: '#04AA6D', fontWeight:700 }}
                                   variant="body1"
                                   gutterBottom
                                   component="div"
                              >
                                   {message.sender.phoneNo}
                              </Typography></TableCell>
                         </TableRow>
                         ))}
                    </TableBody>
                    </Table>
               </TableContainer> 
          </>
     );
};

export default Message;