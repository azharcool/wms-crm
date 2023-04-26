import {
  Box,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import TableMessage from "components/table-message";
import CustomTableCell from "components/table/CustomTableCell";
import EnhancedTableToolbar from "components/table/enhanced-table-toolbar";
import CustomHeadTableCell from "components/table/status-table-cell/CustomHeadTableCell";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { getSelectedBundle } from "redux/catalog/bundleSelector";
import { setAllBundleIds } from "redux/catalog/bundleSlice";
import { useAppDispatch } from "redux/store";
import {
  IBundle,
  IGetBundleResponseRoot,
} from "types/catalog/bundles/getBundleResponse";
import theme from "theme/newTheme";
import BundleItem from "./BundleItem";

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
    title: "Retail price",
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
    title: "Last created",
  },
  {
    id: crypto.randomUUID(),
    title: "Last updated",
  },
];

interface IBundleListing {
  data?: IGetBundleResponseRoot;
  bundlePagination: {
    pageSize: number;
    page: number;
  };
  handlePagination: (name: string, page: number) => void;
}

function BundleListing(props: IBundleListing) {
  const { data, bundlePagination, handlePagination } = props;
  const getSelectedBundleIdsState = useSelector(getSelectedBundle);
  const dispatch = useAppDispatch();

  const selectAll = (event: any, checked: boolean) => {
    if (data) {
      dispatch(
        setAllBundleIds({
          ids: data?.data.map((i) => i.id),
          checked,
        }),
      );
    }
  };

  const csvData = data?.data.map((item) => ({
    image: "",
    name: item.name,
    retailprice: "",
    category: item.categoryName,
    brand: item.brandName,
    company: "",
    tags: item.tag,
    lastcreated: item.createdOn,
    lastupdated: item.updatedOn,
  }));

  const csvHeaders = tableTitle.map((item) => ({
    label: item.title,
    key: item.title.replace(" ", "").toLowerCase(),
  }));

  return (
    <PerfectScrollbar>
      <EnhancedTableToolbar
        csvData={csvData}
        csvHeader={csvHeaders}
        csvTitle="Bundles"
        moreList={[
          {
            id: crypto.randomUUID(),
            title: "Density",
            onClick: () => {},
          },
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
                  <CustomHeadTableCell
                    padding="checkbox"
                    sxProps={{
                      zIndex: 999,
                      position: "sticky",
                      left: 0,
                      minWidth: "60px",
                    }}
                  >
                    <Checkbox
                      checked={
                        data?.data.length === getSelectedBundleIdsState.length
                      }
                      color="primary"
                      onChange={selectAll}
                      sx={{
                        color: theme.palette.common.white,
                      }}
                    />
                  </CustomHeadTableCell>
                  {tableTitle.map((item) => {
                    const isImage = item.title.includes("Image");
                    const isName = item.title.includes("Name");
                    return (
                      <CustomHeadTableCell
                        key={item.id}
                        sxProps={{
                          minWidth: isImage ? 50 : 150,
                          position: isImage || isName ? "sticky" : "static",
                          left: isImage || isName ? (isName ? 125 : 60) : 0,
                        }}
                      >
                        {item.title}
                      </CustomHeadTableCell>
                    );
                  })}
                  <CustomHeadTableCell
                    sxProps={{
                      position: "sticky",
                      right: 0,
                    }}
                  >
                    Actions
                  </CustomHeadTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.data?.length === 0 ? (
                  <TableMessage colspan={6} message="No content Available" />
                ) : (
                  data?.data?.map((bundle: IBundle) => {
                    return <BundleItem bundle={bundle} />;
                  })
                )}
              </TableBody>
            </Table>
          </PerfectScrollbar>
          <TablePagination
            component="div"
            count={data?.totalDocs || 0}
            page={bundlePagination.page}
            rowsPerPage={bundlePagination.pageSize}
            rowsPerPageOptions={[5, 10, 25]}
            onPageChange={(_, pageNo) => {
              handlePagination("page", pageNo);
            }}
            onRowsPerPageChange={(e) => {
              handlePagination("pageSize", Number(e.target.value));
            }}
          />
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}

export default BundleListing;
