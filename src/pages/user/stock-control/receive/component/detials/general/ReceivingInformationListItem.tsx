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

  return (
    <TableRow hover>
      <TableCell
        padding="checkbox"
        sx={{
          width: 60,
          position: "sticky",
          left: 0,
          zIndex: 999,
        }}
      >
        <Checkbox
          // checked={}
          color="primary"
          // onChange={}
        />
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        <StatusTableCell
          success={item?.status !== 2}
          title={item?.status === 2 ? "NEW" : "COMPLETED"}
        />
      </TableCell>
      <TableCell sx={{ minWidth: 170 }}>
        <Box>
          <BorderLinearProgress
            sx={{ width: "50%" }}
            value={100}
            variant="determinate"
          />
          <Typography>10/10</Typography>
        </Box>
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        Default Warehouse(Demo)
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        Mar 29
      </TableCell>
    </TableRow>
  );
}

export default ReceivingInformationListItem;
