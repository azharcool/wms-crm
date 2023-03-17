import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import CustomTableCell from "components/table/CustomTableCell";
import "react-perfect-scrollbar/dist/css/styles.css";
import VariantItem from "./VariantItem";

const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "Image",
  },

  {
    id: crypto.randomUUID(),
    title: "Variant",
  },

  {
    id: crypto.randomUUID(),
    title: "SKU",
  },
  {
    id: crypto.randomUUID(),
    title: "Barcode",
  },
  {
    id: crypto.randomUUID(),
    title: "Supply Price",
  },
  {
    id: crypto.randomUUID(),
    title: "M.R.P",
  },
  {
    id: crypto.randomUUID(),
    title: "Retail Price",
  },
  {
    id: crypto.randomUUID(),
    title: "Cross docking",
  },
  {
    id: crypto.randomUUID(),
    title: "Enabled",
  },
];

interface IVariantLIsting {
  isTrue?: boolean;
}

function VariantListing(props: IVariantLIsting) {
  const { isTrue } = props;
  return (
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
              return (
                <CustomTableCell
                  key={item.id}
                  isHeader
                  customStyle={{
                    minWidth: isImage ? 50 : 200,
                  }}
                >
                  {item.title}
                </CustomTableCell>
              );
            })}
            {/* {!isTrue && <CustomTableCell isHeader>Actions</CustomTableCell>} */}
          </TableRow>
        </TableHead>
        <TableBody>
          <VariantItem isTrue={isTrue} />
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default VariantListing;
