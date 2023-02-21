import { Box, Typography } from "@mui/material";
import React from "react";

interface IContactItem {
  icon: React.ReactElement;
  name: string;
}

function ContactItem(props: IContactItem) {
  const { icon, name } = props;
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        fontSize: "0.8rem",
      }}
    >
      <Box sx={{ mr: 1, fontSize: "inherit" }}>{icon}</Box>
      <Box>
        <Typography
          color="textPrimary"
          sx={{ fontSize: "inherit" }}
          variant="body1"
        >
          {name}
        </Typography>
      </Box>
    </Box>
  );
}

export default ContactItem;
