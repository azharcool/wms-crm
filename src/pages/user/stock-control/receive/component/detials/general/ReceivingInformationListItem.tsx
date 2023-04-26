import {
  Box,
  Checkbox,
  LinearProgress,
  linearProgressClasses,
  styled,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CustomBodyTableCell, {
  CustomTableText,
} from "components/table/status-table-cell/CustomBodyTableCell";
import StatusTableCell from "components/table/status-table-cell";
import "react-perfect-scrollbar/dist/css/styles.css";

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
      theme.palette.mode === "light" ? "rgb(46, 52, 86)" : "#308fe8",
  },
}));

interface IReceivingInformationListItem {
  item: any;
}

function ReceivingInformationListItem(props: IReceivingInformationListItem) {
  const { item } = props;
  const theme = useTheme();


  return (
    <TableRow hover>
      <CustomBodyTableCell
        padding="checkbox"
        sxProps={{
          minWidth: 60,
          position: "sticky",
          left: 0,
          zIndex: 999,
        }}
      >
        <Checkbox
          sx={{
            color: theme.palette.primary.darkBlue,
            "&.Mui-checked": {
              color: theme.palette.primary.darkBlue,
            },
          }}
        />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <Box
          sx={{
            width: "40px",
            height: "40px",
          }}
        >
          <img
            alt="new"
            src="https://app.storfox.com/d9f5ac726db86ff29f7b.png"
            width="100%"
          />
        </Box>
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText
          text={
            <Box>
              <Typography variant="h6">Speaker</Typography>
              <Typography>SPEAKER-796</Typography>
            </Box>
          }
        />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="Default warehouse" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="March29" />
      </CustomBodyTableCell>
    </TableRow>
  );
}

export default ReceivingInformationListItem;
