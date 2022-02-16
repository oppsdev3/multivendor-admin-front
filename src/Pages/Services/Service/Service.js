import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const Service = ({services}) => {
     return (
          <>
               <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                         <TableRow>
                         <TableCell align="center">Name</TableCell>
                         <TableCell align="center">ID</TableCell>
                         <TableCell align="center">Date</TableCell>
                         
                         </TableRow>
                    </TableHead>
                    <TableBody>
                         {services.map((service) => (
                         <TableRow
                         key={service.name}
                         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                         >
                         <TableCell align="center">{service.name}</TableCell>
                         <TableCell align="center">{service._id}</TableCell>
                         <TableCell align="center">{service.updatedAt}</TableCell>
                         </TableRow>
                         ))}
                    </TableBody>
                    </Table>
               </TableContainer>
          </>
     );
};

export default Service;