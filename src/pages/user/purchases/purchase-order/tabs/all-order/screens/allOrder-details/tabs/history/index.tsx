import {
    Card,
    DialogContent,
    DialogTitle,
    Divider,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
  } from "@mui/material";
  import React from "react";
  
  function History() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell component="th">Date</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>User</TableCell>
            <TableCell>Action</TableCell>        
          </TableRow>
        </TableHead>
        <TableBody>
          <TableCell component="td" scope="row">
            -
          </TableCell>
          <TableCell>-</TableCell>
          <TableCell>-</TableCell>
          <TableCell>-</TableCell>
        </TableBody>
      </Table>
    );
  }
  
  export default History;
  