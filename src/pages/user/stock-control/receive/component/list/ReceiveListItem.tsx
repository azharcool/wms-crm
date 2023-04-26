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
import { useTheme } from "@mui/material/styles";
import StatusTableCell from "components/table/status-table-cell";
import CustomBodyTableCell, {
  CustomTableText,
} from "components/table/status-table-cell/CustomBodyTableCell";
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
  const theme = useTheme();

  return (
    <TableRow>
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
          // checked={}
          // onChange={}
          sx={{
            color: theme.palette.primary.darkBlue,
            "&.Mui-checked": {
              color: theme.palette.primary.darkBlue,
            },
          }}
        />
      </CustomBodyTableCell>
      <CustomBodyTableCell
        sxProps={{
          position: "sticky",
          left: 60,
          zIndex: 999,
          cursor: "pointer",
        }}
        onClick={() => navigate(`/${layout}/${details}/1/${general}`)}
      >
        <CustomTableText text="PO-12345" link />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText
          text={
            <Box>
              <BorderLinearProgress
                sx={{ width: "70%" }}
                value={100}
                variant="determinate"
              />
              <Typography>10/10</Typography>
            </Box>
          }
        />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="PO-12345" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="Jarvis" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="Logan" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <StatusTableCell
          success={item?.status !== 2}
          title={item?.status === 2 ? "NEW" : "COMPLETED"}
        />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CommentIcon color="disabled" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="123" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="notes" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="Logan" />
      </CustomBodyTableCell>
      <CustomBodyTableCell
        sxProps={{
          position: "sticky",
          right: 0,
          cursor: "pointer",
        }}
      >
        <TableActionButton
          onDeleteHandle={() => {
            // deleteProductAsync(item.id);
          }}
        />
      </CustomBodyTableCell>
    </TableRow>
  );
}

export default ReceiveListItem;
