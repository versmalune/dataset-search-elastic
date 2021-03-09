import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export default function DataItem({item}) {
  return(
    <>
      <TableRow>  
        <TableCell onClick={(e) => {
          e.preventDefault();
          window.location.href=item[3];
        }}>{item[0]}</TableCell>
        <TableCell onClick={(e) => {
          e.preventDefault();
          window.location.href=item[3];
        }}>{item[1]}</TableCell>
        <TableCell onClick={(e) => {
          e.preventDefault();
          window.location.href=item[3];
        }}>{item[2]}</TableCell>
        <TableCell onClick={(e) => {
          e.preventDefault();
          window.location.href=item[3];
        }}>{item[3]}</TableCell>
      </TableRow>
    </>
  );
}