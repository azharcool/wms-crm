import { Checkbox, TableCell, TableRow, Typography } from "@mui/material";
import StatusTableCell from "components/table/status-table-cell";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";
import AppRoutes from "routes/appRoutes";

function PutAwayV2ListItem(props: { item: any }) {
  const { item } = props;
  const navigate = useNavigate();
  const {
    stockControl: {
      layout,
      putaway_v2: { details, general },
    },
  } = AppRoutes;

  return (
    <TableRow>
      <TableCell
        padding="checkbox"
        sx={{
          width: 50,
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
          width: 170,
          position: "sticky",
          left: 50,
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
          PT-82061
        </Typography>
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        PO-13786
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        1
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        50
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
        RCV
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        Not Assigned
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        00:00:00
        {/* lastupdt */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        created date
        {/* notes */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        updated date
        {/* notes */}
      </TableCell>
    </TableRow>
  );
}

export default PutAwayV2ListItem;
