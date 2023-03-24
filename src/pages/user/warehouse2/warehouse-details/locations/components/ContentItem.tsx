import { TableCell, TableRow } from "@mui/material";
import AppRoutes from "navigation/appRoutes";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";

const conditionCode = [
  {
    id: crypto.randomUUID(),
    value: "New",
  },
  {
    id: crypto.randomUUID(),
    value: "Old",
  },
];

function ContentItem() {
  //   const { isTrue, item } = props;

  const navigate = useNavigate();
  const goToDetails = (id: string) => {
    navigate(`${AppRoutes.CATALOG.bundleDetails}/${id}`);
  };

  return (
    <>
      <TableRow>
        <TableCell
          sx={{
            minWidth: 150,
            // background: "white",
          }}
        >
          cotent 1
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
      </TableRow>
    </>
  );
}

export default ContentItem;
