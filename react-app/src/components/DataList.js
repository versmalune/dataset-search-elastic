import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';

import DataItem from './DataItem';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function DataList() {
  const classes = useStyles();
  const datas = useSelector(state => state.datas);
  console.log("HERE!!", datas)

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((data) => {
            console.log("HERE!!", data)
            return(
              <DataItem key = {data[0]} item={data}/>
            );
          })}
        </TableBody>
      </Table>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((data) => {
            return(
              <DataItem key = {data[2]} item={data}/>
            );
          })}
        </TableBody>
      </Table>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>URL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((data) => {
            return(
              <DataItem key = {data[3]} item={data}/>
            );
          })}
        </TableBody>
      </Table><Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Keywords</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((data) => {
            return(
              <DataItem key = {data[4]} item={data}/>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}