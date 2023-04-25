import { Box, Checkbox, TableCell, TableRow } from "@mui/material";
import NOImage from "assets/images/no-image.png";
import StatusTableCell from "components/table/status-table-cell";
import TextField from "components/textfield";
import "react-perfect-scrollbar/dist/css/styles.css";

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
interface IPutAwayV1ListItem {
  item: any;
}

function PutAwayV1ListItem(props: IPutAwayV1ListItem) {
  const { item } = props;

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
          width: 60,
          position: "sticky",
          left: 50,
          zIndex: 999,
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
    </TableRow>
  );
}

export default PutAwayV1ListItem;
