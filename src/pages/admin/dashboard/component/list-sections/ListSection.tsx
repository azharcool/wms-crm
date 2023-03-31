import CustomCardContent from "components/card/CustomCardContent";

import {
  Card,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import palette from "theme/palette";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

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

function ListSection() {
  return (
    <Stack flex="auto">
      <Card>
        <CustomCardContent title="Section List">
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
        </CustomCardContent>
      </Card>
    </Stack>
  );
}

export default ListSection;
