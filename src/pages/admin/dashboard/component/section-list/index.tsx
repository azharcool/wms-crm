import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import TextField from "components/textfield";
import palette from "theme/palette";

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

  return (
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
            isSelect
            id={undefined}
            menuItems={[
              { id: 1, value: "section1" },
              { id: 2, value: "section2" },
            ]}
            name=""
            size={undefined}
            style={{ width: "250px" }}
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
              <BorderLinearProgress value={50} variant="determinate" />
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
              <BorderLinearProgress value={50} variant="determinate" />
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
              <BorderLinearProgress value={70} variant="determinate" />
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
              <BorderLinearProgress value={40} variant="determinate" />
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
              <BorderLinearProgress value={50} variant="determinate" />
            </TableCell>
            <TableCell sx={{ fontSize: 15 }}>50%</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
}

export default SectionList;
