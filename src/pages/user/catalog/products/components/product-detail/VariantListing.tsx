import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import CustomTableCell from "components/table/CustomTableCell";
import useGetAllVariantByProductId from "hooks/querys/catalog/variants/useGetAllVariantByProductId";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useParams } from "react-router-dom";
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
  const [variantPagination, setVariantPagination] = useState({
    pageSize: 10,
    page: 1,
  });
  const { productId } = useParams();
  const { data: variantResponse } = useGetAllVariantByProductId({
    page: 1,
    pageSize: 10,
    productId: Number(productId),
  });

  return (
    <TableContainer component={Paper}>
      <PerfectScrollbar>
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
            {variantResponse?.data.map((item) => {
              return <VariantItem key={item.id} isTrue={isTrue} item={item} />;
            })}
          </TableBody>
        </Table>
      </PerfectScrollbar>
    </TableContainer>
  );
}

export default VariantListing;
