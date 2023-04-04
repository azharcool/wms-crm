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
import AppRoutes from "navigation/appRoutes";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import palette from "theme/palette";

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

function ReceiveListItem(props: { item: any }) {
  const { item } = props;
  const newtheme = useSelector((state: any) => state.theme);
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
          background: newtheme.isDarkMode
            ? "#26263D"
            : palette.background.default,
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
          background: newtheme.isDarkMode
            ? "#26263D"
            : palette.background.default,
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
          background: newtheme.isDarkMode
            ? "#26263D"
            : palette.background.default,
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
