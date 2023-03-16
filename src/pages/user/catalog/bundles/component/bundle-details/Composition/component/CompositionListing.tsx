import {
  Box,
  Checkbox,
  DialogTitle,
  Grid,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import CustomTableCell from "components/table/CustomTableCell";
import EnhancedTableToolbar from "components/table/enhanced-table-toolbar";
import TextField from "components/textfield";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import CompositionItem from "./CompositionItem";

const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "Image",
  },

  {
    id: crypto.randomUUID(),
    title: "Product",
  },

  {
    id: crypto.randomUUID(),
    title: "Unit price",
  },
  {
    id: crypto.randomUUID(),
    title: "Condition code",
  },
  {
    id: crypto.randomUUID(),
    title: "Discount",
  },
  {
    id: crypto.randomUUID(),
    title: "Qty",
  },
  {
    id: crypto.randomUUID(),
    title: "Total",
  },
];
interface IComposition {
  isTrue: boolean;
}

function CompositionListing(props: IComposition) {
  const { isTrue } = props;
  return (
    // <PerfectScrollbar>
    <Box sx={{ minWidth: 850, minHeight: 500 }}>
      <DialogTitle variant="subtitle1">
        {isTrue ? "Line Items" : "Units"}
      </DialogTitle>
      {!isTrue && (
        <Grid xs={12}>
          <TextField
            isSelect
            disabled={isTrue}
            id="categorys"
            //   menuItems={conditionCode}
            name="categorys"
            size="small"
            //   value={conditionCode[0].id}
            onSelectHandler={() => {}}
          />
        </Grid>
      )}
      <TableContainer component={Paper}>
        <Table
          sx={{
            height: "100%",
          }}
        >
          <TableHead>
            <TableRow>
              {tableTitle.map((item) => {
                const isImage = item.title.includes("Image");
                const isProduct = item.title.includes("Product");
                return (
                  <CustomTableCell
                    key={item.id}
                    isHeader
                    customStyle={{
                      minWidth: isImage ? 50 : 200,
                      position: isImage || isProduct ? "sticky" : "static",
                      left: isImage || isProduct ? (isProduct ? 60 : 0) : 0,
                    }}
                  >
                    {item.title}
                  </CustomTableCell>
                );
              })}
              {!isTrue && (
                <CustomTableCell isHeader isSticky rightValue={0}>
                  Actions
                </CustomTableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            <CompositionItem isTrue={isTrue} />
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    // </PerfectScrollbar>
  );
}

export default CompositionListing;
