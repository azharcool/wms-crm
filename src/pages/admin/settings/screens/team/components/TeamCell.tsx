import { TableCell, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

interface Props {
  children: React.ReactNode;
}

function TeamCell(props: Props) {
  return (
    <TableCell>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
        }}
      >
        <Typography color="textPrimary" variant="body1">
          {props?.children}
        </Typography>
      </Box>
    </TableCell>
  );
}

export default TeamCell;
