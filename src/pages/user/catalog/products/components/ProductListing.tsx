import {
  Box,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import CustomTableCell from "components/table/CustomTableCell";
import EnhancedTableToolbar from "components/table/enhanced-table-toolbar";
import NoDataTableRow from "components/table/no-data-table-row/index";
import AppRoutes from "navigation/appRoutes";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSelectedProduct } from "redux/catalog/productSelector";
import { setAllProductIds } from "redux/catalog/productSlice";
import { useAppDispatch } from "redux/store";
import { IGetProductResponseRoot } from "types/catalog/products/getProductResponse";
import ProductItem from "./ProductItem";

const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "Image",
  },

  {
    id: crypto.randomUUID(),
    title: "Name",
  },

  {
    id: crypto.randomUUID(),
    title: "Inventory",
  },
  {
    id: crypto.randomUUID(),
    title: "Variants",
  },
  {
    id: crypto.randomUUID(),
    title: "Category",
  },
  {
    id: crypto.randomUUID(),
    title: "Brand",
  },
  {
    id: crypto.randomUUID(),
    title: "Company",
  },
  {
    id: crypto.randomUUID(),
    title: "Tags",
  },
  {
    id: crypto.randomUUID(),
    title: "Track SN",
  },
  {
    id: crypto.randomUUID(),
    title: "Track expiry",
  },
  {
    id: crypto.randomUUID(),
    title: "Last updated",
  },
];

interface IProductListing {
  data?: IGetProductResponseRoot;
}

type IChangeEvent = React.ChangeEvent<HTMLInputElement>;

function ProductListing(props: IProductListing) {
  const { data } = props;

  const getSelectedProductIdsState = useSelector(getSelectedProduct);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { catalog, bulkUpload, products } = AppRoutes.CATALOG;

  const selectAll = (event: IChangeEvent, checked: boolean) => {
    if (data) {
      dispatch(
        setAllProductIds({
          ids: data?.data.map((i) => i.id),
          checked,
        }),
      );
    }
  };

  const bulkUploadHandler = () => {
    const url = `/${catalog}/${products}/${bulkUpload}`;
    navigate(url);
  };

  return (
    <PerfectScrollbar>
      <EnhancedTableToolbar
        moreList={[
          {
            id: crypto.randomUUID(),
            title: "Bulk Upload",
            onClick: bulkUploadHandler,
          },
          { id: crypto.randomUUID(), title: "Bulk Update", onClick: () => {} },
          { id: crypto.randomUUID(), title: "Export", onClick: () => {} },
        ]}
      />

      <Box sx={{ minWidth: 1050, minHeight: 500 }}>
        <TableContainer component={Paper}>
          <PerfectScrollbar>
            <Table
              sx={{
                height: "100%",
              }}
            >
              <TableHead>
                <TableRow>
                  <CustomTableCell
                    isCheck
                    isHeader
                    isSticky
                    customStyle={{
                      zIndex: 999,
                    }}
                    leftValue={0}
                  >
                    <Checkbox
                      checked={
                        data?.data.length === getSelectedProductIdsState.length
                      }
                      color="primary"
                      onChange={selectAll}
                    />
                  </CustomTableCell>
                  {tableTitle.map((item) => {
                    const isImage = item.title.includes("Image");
                    const isName = item.title.includes("Name");

                    return (
                      <CustomTableCell
                        key={item.id}
                        isHeader
                        customStyle={{
                          minWidth: isImage ? 50 : 150,
                          position: isImage || isName ? "sticky" : "static",
                          left: isImage || isName ? (isName ? 130 : 60) : 0,
                        }}
                      >
                        {item.title}
                      </CustomTableCell>
                    );
                  })}
                  <CustomTableCell isHeader isSticky rightValue={0}>
                    Actions
                  </CustomTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.data?.map((item) => {
                  return <ProductItem key={item.id} item={item} />;
                })}

                {!data?.data.length ? (
                  <NoDataTableRow
                    colSize={4}
                    title="No data found in Variant"
                  />
                ) : null}
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}

export default ProductListing;
