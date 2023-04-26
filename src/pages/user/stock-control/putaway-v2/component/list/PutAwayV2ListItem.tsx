import { Checkbox, TableCell, TableRow, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import StatusTableCell from "components/table/status-table-cell";
import CustomBodyTableCell, {
  CustomTableText,
} from "components/table/status-table-cell/CustomBodyTableCell";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";
import AppRoutes from "routes/appRoutes";

function PutAwayV2ListItem(props: { item: any }) {
  const { item } = props;
  const navigate = useNavigate();
  const theme = useTheme();
  const {
    stockControl: {
      layout,
      putaway_v2: { details, general },
    },
  } = AppRoutes;

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
          checked={false}
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
        <CustomTableText text="PT-1223" link />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="PO-112" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="1" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="50" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText
          text={
            <StatusTableCell
              success={item?.status !== 2}
              title={item?.status === 2 ? "NEW" : "COMPLETED"}
            />
          }
        />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="RCV" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="Not Assigned" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="00:00:00" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="Created at" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="Updated date" />
      </CustomBodyTableCell>
    </TableRow>
  );
}

export default PutAwayV2ListItem;
