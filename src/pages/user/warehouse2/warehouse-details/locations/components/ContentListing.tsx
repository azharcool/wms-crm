import {
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
// import VariantItem from "./VariantItem";
import ContentItem from "./ContentItem";

const tableTitle = [
  //   {
  //     id: crypto.randomUUID(),
  //     title: "Image",
  //   },

  {
    id: crypto.randomUUID(),
    title: "Variant",
  },

  {
    id: crypto.randomUUID(),
    title: "Unit number",
  },
  {
    id: crypto.randomUUID(),
    title: "Quantity",
  },
  {
    id: crypto.randomUUID(),
    title: "Container",
  },
];

interface IVariantLIsting {
  isTrue?: boolean;
}

function ContentListing(props: IVariantLIsting) {
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
    <TableContainer>
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
            <ContentItem />;
          </TableBody>
        </Table>
      </PerfectScrollbar>
    </TableContainer>
  );
}

export default ContentListing;
