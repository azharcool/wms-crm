import React, { useState } from "react";
import { Card, CardContent, Container } from "@mui/material";
import ZoneListing from "./component/ZoneListing";


function Zones() {
  return (
    <Container maxWidth={false}>
      <Card>
        <CardContent sx={{ paddingTop: 0 }}>
          <ZoneListing />
        </CardContent>
      </Card>
    </Container>
  );
}

export default Zones;
