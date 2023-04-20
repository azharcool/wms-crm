import CommentIcon from "@mui/icons-material/Comment";
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
import TableActionButton from "components/table/TableActionButton";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";
import AppRoutes from "routes/appRoutes";

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

interface IReceiveListItem {
  item: any;
}

function ReceiveListItem(props: IReceiveListItem) {
  const { item } = props;

  const navigate = useNavigate();
  const {
    stockControl: {
      layout,
      recieve: { details, general },
    },
  } = AppRoutes;

  return (
    <TableRow>
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
          width: 50,
          position: "sticky",
          left: 40,
          zIndex: 999,
          cursor: "pointer",
        }}
        onClick={() => navigate(`/${layout}/${details}/1/${general}`)}
      >
        <Typography
          sx={{
            textDecoration: "underline",
            whiteSpace: "nowrap", //! Dont remove
          }}
        >
          PO-13817
        </Typography>
      </TableCell>
      <TableCell sx={{ minWidth: 170 }}>
        <Box>
          <BorderLinearProgress
            sx={{ width: "70%" }}
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
        Jarvis
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        Logan
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
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        <CommentIcon color="disabled" />
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* lastupdt */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* notes */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* notes */}
      </TableCell>
      <TableCell
        sx={{
          position: "sticky",
          right: 0,
        }}
      >
        <TableActionButton
          onDeleteHandle={() => {
            // deleteProductAsync(item.id);
          }}
        />
      </TableCell>
    </TableRow>
  );
}

export default ReceiveListItem;
