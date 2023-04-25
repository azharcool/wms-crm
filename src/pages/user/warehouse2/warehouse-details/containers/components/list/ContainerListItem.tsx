import { Checkbox, TableCell, TableRow } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";
import AppRoutes from "routes/appRoutes";

function ContainerListItem(props: any) {
  const { item } = props;
  const navigate = useNavigate();
  const navigateDetails = `/${AppRoutes.warehouse.warehouseLayout}/${AppRoutes.warehouse.containersDetails}`;
  return (
    <TableRow>
      <TableCell
        padding="checkbox"
        sx={{
          minWidth: 60,
          position: "sticky",
          left: 0,
          zIndex: 999,
          // background: "white",
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
          // background: "white",
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
          position: "sticky",
          // left: 169,
          // background: "white",
        }}
      >
        {/* inventory */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {/* variants count */}-
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
        {/* brand */}-
      </TableCell>

      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {/* company */}-
      </TableCell>

      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {/* company */}-
      </TableCell>

      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {/* company */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {/* tags */}-
      </TableCell>

      <TableCell
        sx={{
          minWidth: 150,
          position: "sticky",
          right: 0,
          // background: "white",
        }}
      >
        <TableActionButton onDeleteHandle={() => {}} />
      </TableCell>
    </TableRow>
  );
}

export default ContainerListItem;
