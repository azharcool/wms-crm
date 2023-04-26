import { Box, Checkbox, TableCell, TableRow } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CustomSwitch from "components/custom-switch";
import CustomBodyTableCell, {
  CustomTableText,
} from "components/table/status-table-cell/CustomBodyTableCell";
import TableActionButton from "components/table/TableActionButton";
import "react-perfect-scrollbar/dist/css/styles.css";

function ListingItem() {
  const theme = useTheme();
  return (
    <TableRow>
      <CustomBodyTableCell
        padding="checkbox"
        sxProps={{
          minWidth: 60,
          position: "sticky",
          left: 0,
          zIndex: 999,
        }}
      >
        <Checkbox
          checked={false}
          sx={{
            color: theme.palette.primary.darkBlue,
            "&.Mui-checked": {
              color: theme.palette.primary.darkBlue,
            },
          }}
          onChange={() => {}}
        />
      </CustomBodyTableCell>
      <CustomBodyTableCell
        sxProps={{
          position: "sticky",
          left: 60,
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
            src="https://app.storfox.com/d9f5ac726db86ff29f7b.png"
            width="100%"
          />
        </Box>
      </CustomBodyTableCell>

      <CustomBodyTableCell
        sxProps={{
          width: 350,
          position: "sticky",
          left: 130,
          zIndex: 999,
        }}
      >
        <CustomTableText text="sku" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="channel" />
      </CustomBodyTableCell>
      <TableCell
        sx={{
          minWidth: 200,
          // background: "white",
        }}
      >
        <CustomSwitch />
      </TableCell>
      <CustomBodyTableCell>
        <CustomTableText text="qty" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="price" />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        <CustomTableText text="M.R.P" />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        <CustomTableText text="brand" />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        <CustomTableText text="category" />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        <CustomTableText text="tags" />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        <CustomTableText text="lastUpdated" />
      </CustomBodyTableCell>

      <CustomBodyTableCell
        sxProps={{
          position: "sticky",
          right: 0,
          cursor: "pointer",
        }}
      >
        <TableActionButton />
      </CustomBodyTableCell>
    </TableRow>
  );
}

export default ListingItem;
