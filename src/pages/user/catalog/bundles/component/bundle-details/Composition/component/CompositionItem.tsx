import { Box, Checkbox, TableCell, TableRow } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import PercentIcon from "@mui/icons-material/Percent";
import TextField from "components/textfield";
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

interface ICompositionItem {
    isTrue:boolean
}
function CompositionItem(props:ICompositionItem) {
    const {isTrue} = props
  const navigate = useNavigate();
  const goToDetails = (id: string) => {
    navigate(`${AppRoutes.CATALOG.bundleDetails}/${id}`);
  };

  return (
    <TableRow>
      <TableCell
        sx={{
          width: 60,
          position: "sticky",
          left: 0,
          zIndex: 999,
          background: "white",
        }}
        onClick={() => goToDetails("1")}
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
          left: 60,
          zIndex: 999,
          background: "white",
        }}
      >
        lenovo ssd, adroid, WIRELESS
      </TableCell>
      <TableCell
        sx={{
          width: 200,
          position: "sticky",
          left: 0,
        }}
      >
        INR 0.00
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        <TextField
          isSelect
          disabled={isTrue}
          id="categorys"
          menuItems={conditionCode}
          name="categorys"
          size="small"
          value={conditionCode[0].id}
          onSelectHandler={() => {}}
        />
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        <TextField
          iconEnd
          icon={<PercentIcon />}
          disabled={isTrue}
          id="discount"
          name="discount"
          size="small"
          onChange={() => {}}
          onClickIcon={() => {
            console.log("clicked....");
          }}
        />
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
          <TextField
          id="quantity"
          name="quantity"
          disabled={isTrue}
          size="small"
          value={0}
          onChange={() => {}}
          onClickIcon={() => {
            console.log("clicked....");
          }}
        />
      </TableCell>

      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        INR 0.00
      </TableCell>
      {!isTrue && 
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        <DeleteIcon sx={{fontSize:"1.2rem"}}/>
      </TableCell >
}
    </TableRow>
  );
}

export default CompositionItem;
