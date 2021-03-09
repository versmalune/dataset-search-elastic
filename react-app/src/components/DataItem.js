import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export default function DataItem({item}) {
  return(
    <>
      <TableRow>  
        <TableCell onClick={(e) => {
          e.preventDefault();
          window.location.href=item[2];
        }}>{item[0]}</TableCell>
      </TableRow>
    </>
  );
}