import { Checkbox, TableCell, TableRow } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import AppRoutes from "navigation/appRoutes";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";

function AreaListItem(props: any) {
  const { item } = props;
  const navigate = useNavigate();
  const {
    warehouse: { warehouseLayout, areasDetails },
  } = AppRoutes;

  const navigateDetails = `/${warehouseLayout}/${areasDetails}/1`;
  return (
    <TableRow>
      <TableCell
        padding="checkbox"
        sx={{
          minWidth: 60,
          position: "sticky",
          left: 0,
          zIndex: 999,
          background: "white",
        }}
      >
        <Checkbox checked={false} />
      </TableCell>

      <TableCell
        sx={{
          minWidth: 150,
          position: "sticky",
          left: 60,
          zIndex: 999,
          background: "white",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate(navigateDetails);
        }}
      >
        {item.name}azhar
      </TableCell>

      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {/* category */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {/* category */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {/* category */}-
      </TableCell>

      <TableCell
        sx={{
          minWidth: 150,
          position: "sticky",
          right: 0,
          background: "white",
        }}
      >
        <TableActionButton onDeleteHandle={() => {}} />
      </TableCell>
    </TableRow>
  );
}

export default AreaListItem;
