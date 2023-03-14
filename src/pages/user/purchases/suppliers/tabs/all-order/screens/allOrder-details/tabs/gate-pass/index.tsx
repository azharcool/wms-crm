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

function GatePass() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell component="th">Number</TableCell>
          <TableCell>Created At</TableCell>
          <TableCell>Number Plate</TableCell>
          <TableCell>Invoice Number</TableCell>
          <TableCell>File Url</TableCell>
          <TableCell>Receive</TableCell>
      
        </TableRow>
      </TableHead>
      <TableBody>
        <TableCell component="td" scope="row">
          -
        </TableCell>
        <TableCell>-</TableCell>
        <TableCell>-</TableCell>
        <TableCell>-</TableCell>
        <TableCell>-</TableCell>
        <TableCell>-</TableCell>

      </TableBody>
    </Table>
  );
}

export default GatePass;
