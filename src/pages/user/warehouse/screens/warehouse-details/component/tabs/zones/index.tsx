import React,{useState} from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import ZoanTable from "./component/component/ZoanTable";
import zone from "./__mock__/Zones.json";

function Zones() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteZone= async (id: number) => {
    // await deletePermission(id);
  };
  return (
      <Container maxWidth={false}>
        <Card>
          <CardContent sx={{ paddingTop: 0 }}>
            <ZoanTable handleDeletePermission={handleDeleteZone}
                  openModal={handleOpen} 
                  zones={zone} 
                  total={0}  />
          </CardContent>
        </Card>
      </Container>
  );
}

export default Zones;
