import { Box, TableCell, TableRow } from "@mui/material";
import NOImage from "assets/images/no-image.png";
import StatusTableCell from "components/table/status-table-cell";
import "react-perfect-scrollbar/dist/css/styles.css";

interface IGeneralListItem {
  item: any;
}

function GeneralListItem(props: IGeneralListItem) {
  const { item } = props;

  return (
    <TableRow>
      <TableCell
        sx={{
          width: 50,
          cursor: "pointer",
        }}
        // onClick={() => navigate(`/${layout}/${details}/1/${general}`)}
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
      <TableCell>PO-13817</TableCell>
      <TableCell>Speaker SPEAKE-796</TableCell>
      <TableCell>SHP</TableCell>
      <TableCell>-</TableCell>
      <TableCell>-</TableCell>
      <TableCell>20</TableCell>
      <TableCell>
        <StatusTableCell
          success={item?.status !== 2}
          title={item?.status === 2 ? "NEW" : "COMPLETED"}
        />
      </TableCell>
      <TableCell>container</TableCell>
    </TableRow>
  );
}

export default GeneralListItem;
