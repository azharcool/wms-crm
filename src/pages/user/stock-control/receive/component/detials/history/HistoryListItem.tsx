import HistoryIcon from "@mui/icons-material/History";
import {
  IconButton,
  LinearProgress,
  linearProgressClasses,
  styled,
  TableCell,
  TableRow,
} from "@mui/material";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
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

function HistoryListItem(props: { item: any }) {
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
    <TableRow hover>
      <TableCell
        sx={{
          minWidth: 170,
          // background: "white",
        }}
      >
        29/02/2023 03:12:33
      </TableCell>

      <TableCell
        sx={{
          minWidth: 170,
          // background: "white",
        }}
      >
        description
      </TableCell>

      <TableCell
        sx={{
          minWidth: 170,
          // background: "white",
        }}
      >
        Aasif sheikh
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
          // background: "white",
        }}
      >
        <IconButton>
          <HistoryIcon sx={{ fontSize: 25, color: "#333" }} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default HistoryListItem;
