import EditIcon from "@mui/icons-material/Edit";
import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ToolBarButton } from "components/table-toolbar";
import CustomTableCell from "components/table/CustomTableCell";
import NoDataTableRow from "components/table/no-data-table-row/index";
import useGetAllVariantByProductId from "hooks/querys/catalog/variants/useGetAllVariantByProductId";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useParams } from "react-router-dom";
import AddVariant from "../AddVariant";
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
interface IVariantListing {
  productName: string;
}

function VariantListing(props: IVariantListing) {
  const { productName } = props;

  const [openVariant, setOpenVariant] = useState(false);
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

  const handleVariant = () => {
    setOpenVariant((s) => !s);
  };

  return (
    <>
      {variantResponse?.data.length === 0 ? (
        <Stack flexDirection="row" justifyContent="end">
          <ToolBarButton
            handleClick={() => {}}
            icon={
              <EditIcon
                sx={{
                  fontSize: 18,
                  mr: 1,
                }}
              />
            }
            title="Add variants"
          />
        </Stack>
      ) : null}

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
                  const isEnabled = item.title.includes("Enabled");

                  return (
                    <CustomTableCell
                      key={item.id}
                      isHeader
                      sxTableCell={{
                        minWidth: isImage
                          ? "50px"
                          : isEnabled
                          ? "100px"
                          : "150px",
                        position: isImage || isEnabled ? "sticky" : "static",
                        left: 0,
                        right: 0,
                      }}
                    >
                      {item.title}
                    </CustomTableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {variantResponse?.data.map((item) => {
                return <VariantItem key={item.id} item={item} />;
              })}

              {!variantResponse?.data.length ? (
                <NoDataTableRow colSize={4} title="No data found in Variant" />
              ) : null}
            </TableBody>
          </Table>
        </PerfectScrollbar>
      </TableContainer>

      {openVariant && productId && variantResponse?.data.length === 0 ? (
        <AddVariant
          handleClose={handleVariant}
          open={openVariant}
          productId={productId}
          productName={productName}
        />
      ) : null}
    </>
  );
}

export default VariantListing;
