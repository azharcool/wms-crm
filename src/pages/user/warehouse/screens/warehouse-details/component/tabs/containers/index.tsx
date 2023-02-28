import React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";

function Containers() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <Card>
          <CardContent sx={{ paddingTop: 0 }}>Containers</CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default Containers;
