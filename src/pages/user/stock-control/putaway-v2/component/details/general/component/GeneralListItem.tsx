import { Box, TableCell, TableRow } from "@mui/material";
import NOImage from "assets/images/no-image.png";
import CustomBodyTableCell, {
  CustomTableText,
} from "components/table/status-table-cell/CustomBodyTableCell";
import StatusTableCell from "components/table/status-table-cell";
import "react-perfect-scrollbar/dist/css/styles.css";

interface IGeneralListItem {
  item: any;
}

function GeneralListItem(props: IGeneralListItem) {
  const { item } = props;

  return (
    <TableRow>
      <CustomBodyTableCell>
        <CustomTableText
          text={
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
          }
        />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="PO-112" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="Speaker SPEAKE-796" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="SHP" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="-" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="-" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="20" />
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
        <CustomTableText text="container" />
      </CustomBodyTableCell>
    </TableRow>
  );
}

export default GeneralListItem;
