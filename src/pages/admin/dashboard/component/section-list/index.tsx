import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Tooltip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import palette from "theme/palette";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import TextField from "components/textfield";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

function SectionList() {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor:
        theme.palette.mode === "light" ? palette.box.dark : "#308fe8",
    },
  }));

  const newtheme = useSelector((state: any) => state.theme);

  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={newtheme.isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            p: 1,
          }}
        >
          <Typography sx={{ m: 1, fontSize: 20 }} variant="h4">
            List of sections
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
        <Table>
          <TableBody>
            <TableRow hover>
              <TableCell>
                <Typography sx={{ fontSize: 15 }} variant="h4">
                  Sections 001{" "}
                </Typography>
              </TableCell>
              <TableCell sx={{ fontSize: 15 }}>28/09/2023</TableCell>
              <TableCell sx={{ display: "felx", flexDirection: "row" }}>
                <Typography sx={{ fontSize: 15 }}>Used</Typography>
                <BorderLinearProgress variant="determinate" value={50} />
              </TableCell>
              <TableCell sx={{ fontSize: 15 }}>20%</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>
                <Typography sx={{ fontSize: 15 }} variant="h4">
                  Sections 001{" "}
                </Typography>
              </TableCell>
              <TableCell sx={{ fontSize: 15 }}>28/09/2023</TableCell>
              <TableCell sx={{ display: "felx", flexDirection: "row" }}>
                <Typography sx={{ fontSize: 15 }}>Used</Typography>
                <BorderLinearProgress variant="determinate" value={50} />
              </TableCell>
              <TableCell sx={{ fontSize: 15 }}>50%</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>
                <Typography sx={{ fontSize: 15 }} variant="h4">
                  Sections 002{" "}
                </Typography>
              </TableCell>
              <TableCell sx={{ fontSize: 15 }}>28/09/2023</TableCell>
              <TableCell sx={{ display: "felx", flexDirection: "row" }}>
                <Typography sx={{ fontSize: 15 }}>Used</Typography>
                <BorderLinearProgress variant="determinate" value={70} />
              </TableCell>
              <TableCell sx={{ fontSize: 15 }}>70%</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>
                <Typography sx={{ fontSize: 15 }} variant="h4">
                  Sections 003{" "}
                </Typography>
              </TableCell>
              <TableCell sx={{ fontSize: 15 }}>28/09/2023</TableCell>
              <TableCell sx={{ display: "felx", flexDirection: "row" }}>
                <Typography sx={{ fontSize: 15 }}>Used</Typography>
                <BorderLinearProgress variant="determinate" value={40} />
              </TableCell>
              <TableCell sx={{ fontSize: 15 }}>40%</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>
                <Typography sx={{ fontSize: 15 }} variant="h4">
                  Sections 004{" "}
                </Typography>
              </TableCell>
              <TableCell sx={{ fontSize: 15 }}>28/09/2023</TableCell>
              <TableCell sx={{ display: "felx", flexDirection: "row" }}>
                <Typography sx={{ fontSize: 15 }}>Used</Typography>
                <BorderLinearProgress variant="determinate" value={50} />
              </TableCell>
              <TableCell sx={{ fontSize: 15 }}>50%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </ThemeProvider>
  );
}

export default SectionList;
