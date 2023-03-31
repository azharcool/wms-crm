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
import TableMessage from "components/table-message";
import CustomTableCell from "components/table/CustomTableCell";
import EnhancedTableToolbar from "components/table/enhanced-table-toolbar";
import useGetAllBundle from "hooks/querys/catalog/bundle/useGetAllBundle";
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
}

function BundleListing(props: IBundleListing) {
  const { data } = props;
  const getSelectedBundleIdsState = useSelector(getSelectedBundle);
  const dispatch = useAppDispatch();
  const bundleData = {
    pageSize: 100,
    page: 1,
  };
  const {
    data: bundles,
    refetch,
    isLoading,
    isFetching: isFetchingBundle,
  } = useGetAllBundle(bundleData);

  const selectAll = (event: any, checked: boolean) => {
    if (bundles) {
      dispatch(
        setAllBundleIds({
          ids: bundles?.data.map((i) => i.id),
          checked,
        }),
      );
    }
  };

  return (
    <PerfectScrollbar>
      <EnhancedTableToolbar />

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
                        bundles?.data.length ===
                        getSelectedBundleIdsState.length
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
                          left: isImage || isName ? (isName ? 125 : 60) : 0,
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
              {/* <TableBody>
                {data?.data?.map((item) => {
                  return (
                    <BundleItem
                      key={item.id}
                      bundle={item}
                      item={item}
                      refetch={refetch}
                    />
                  );
                })}
              </TableBody> */}
              <TableBody>
                {bundles?.data?.length === 0 ? (
                  <TableMessage colspan={6} message="No content Available" />
                ) : (
                  bundles?.data?.map((bundle: IBundle) => {
                    return <BundleItem bundle={bundle} refetch={refetch} />;
                  })
                )}
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}

export default BundleListing;
