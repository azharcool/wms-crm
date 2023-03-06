import React from 'react'
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
  } from "@mui/material";
import { Box, Container } from "@mui/system";
import TextField from "components/textfield";
import palette from "theme/palette";
import SectionBox from './component/sections-box';


function Section() {
  return (
    <Box>
    <Box
    sx={{
      alignItems: "center",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
    //   p: 1,
    }}
  >
    <Typography
      sx={{ m: 1, color: palette.text.secondary, fontSize: 20 }}
      variant="h4"
    >
      Warehouse Logistics
    </Typography>
    <Box sx={{ m: 1 }}>
      <TextField
        style={{ width: "250px" }}
        isSelect
        menuItems={[
          { id: 1, value: "section1" },
          { id: 2, value: "section2" },
        ]}
      />
    </Box>
    </Box>
    <SectionBox />
  </Box>  
  )
}

export default Section