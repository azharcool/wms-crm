import { Box, Checkbox, TableCell, TableRow } from "@mui/material";
import NOImage from "assets/images/no-image.png";
import StatusTableCell from "components/table/status-table-cell";
import TableActionButton from "components/table/TableActionButton";
import TextField from "components/textfield";
import AppRoutes from "navigation/appRoutes";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import palette from "theme/palette";

const conditionCode = [
  {
    id: "STG",
    value: "STG",
  },
  {
    id: "STG-DST-A-1-1-1",
    value: "STG-DST-A-1-1-1",
  },
  {
    id: "STG-DST",
    value: "STG-DST",
  },
];

function PutAwayV1ListItem(props: { item: any }) {
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
          width: 50,
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
          width: 60,
          position: "sticky",
          left: 50,
          zIndex: 999,
          background: newtheme.isDarkMode
            ? "#26263D"
            : palette.background.default,
          cursor: "pointer",
        }}
      >
        <Box
          sx={{
            width: "40px",
            height: "40px",
          }}
        >
          <img
            alt="new"
            src={NOImage}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
        </Box>
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        PT-82061
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        Protein Powder PROTEIPOWDER-899
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
        50
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        <TextField
          disabled
          isSelect
          id="categorys"
          menuItems={conditionCode}
          name="conditionCode"
          size="small"
          value={conditionCode[0].value}
          onSelectHandler={(e) => {}}
        />
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        <TextField
          disabled
          isSelect
          id="categorys"
          menuItems={conditionCode}
          name="conditionCode"
          size="small"
          value={conditionCode[1].value}
          onSelectHandler={(e) => {}}
        />
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        from location
        {/* lastupdt */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        duration
        {/* notes */}
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

export default PutAwayV1ListItem;
