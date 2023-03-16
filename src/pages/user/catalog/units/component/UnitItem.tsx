import { Box, Checkbox, TableCell, TableRow } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import AppRoutes from "navigation/appRoutes";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";

function UnitItem() {
    const navigate = useNavigate()
    const goToDetails = (id: string) => {
        navigate(`${AppRoutes.CATALOG.unitHistory}/${id}`);
      };
    
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
        <Checkbox checked={false} color="primary" onChange={() => {}} />
      </TableCell>
      <TableCell
        sx={{
          width: 50,
          position: "sticky",
          left: 0,
          cursor:"pointer"
        }}
        onClick={()=>goToDetails("1")}
      >
        <Box
          sx={{
            width: "40px",
            height: "40px",
          }}
        >
          <img
            alt="new"
            src="https://app.storfox.com/d9f5ac726db86ff29f7b.png"
            width="100%"
          />
        </Box>
      </TableCell>

      <TableCell
        sx={{
          width: 200,
          position: "sticky",
          left: 0,
        }}
      >
        IPHONE XR White
      </TableCell>
      <TableCell
        sx={{
          width: 200,
          position: "sticky",
          left: 0,
        }}
      >
        9734973947
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        YES
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        50
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        image
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        -
      </TableCell> <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        -
      </TableCell> <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        -
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        -
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        -
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        -
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        -
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        demo
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        STG
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        smart
      </TableCell>
      
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        March 14, 2023
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        06:34:00
      </TableCell>

      <TableCell
        sx={{
          position: "sticky",
          right: 0,
          background: "white",
        }}
      >
        <TableActionButton />
      </TableCell>
    </TableRow>
  );
}

export default UnitItem;
