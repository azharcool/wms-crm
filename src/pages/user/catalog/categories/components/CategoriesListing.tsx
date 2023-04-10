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
import CustomTableCell from "components/table/CustomTableCell";
import EnhancedTableToolbar from "components/table/enhanced-table-toolbar";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "redux/catalog/categorySelector";
import { setAllCategoryIds } from "redux/catalog/categorySlice";
import { useAppDispatch } from "redux/store";
import { IGetCategoriesResponseRoot } from "types/catalog/catagories/getCategoriesResponse";
import CategoriesItem from "./CategoriesItem";

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
    title: "Position",
  },
  {
    id: crypto.randomUUID(),
    title: "Parent Category",
  },
  {
    id: crypto.randomUUID(),
    title: "Status",
  },
  {
    id: crypto.randomUUID(),
    title: "Last Updated",
  },
  {
    id: crypto.randomUUID(),
    title: "Tags",
  },
];

interface IPaginationData {
  pageSize: number;
  page: number;
}

interface ICategoriesListing {
  data?: IGetCategoriesResponseRoot;
  total: number;
  paginationData: IPaginationData;
  setCurrentPage: (page: number) => void;
  setPageLimit: (limit: number) => void;
}

type IChangeEvent = React.ChangeEvent<HTMLInputElement>;

function CategoriesListing(props: ICategoriesListing) {
  const { data, total, setCurrentPage, setPageLimit, paginationData } = props;
  const getSelectedCategoryIdsState = useSelector(getSelectedCategory);
  const dispatch = useAppDispatch();

  const selectAll = (event: IChangeEvent, checked: boolean) => {
    if (data) {
      dispatch(
        setAllCategoryIds({
          ids: data?.data.map((i) => i.id),
          checked,
        }),
      );
    }
  };

  const handleLimitChange = (event: any) => {
    setPageLimit(event.target.value);
  };

  const handlePageChange = (event: any, newPage: any) => {
    setCurrentPage(newPage);
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
                        data?.data.length === getSelectedCategoryIdsState.length
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
                  return <CategoriesItem key={item.id} item={item} />;
                })}
              </TableBody>
            </Table>
          </PerfectScrollbar>
          <TablePagination
            component="div"
            count={total}
            page={paginationData.page}
            rowsPerPage={paginationData.pageSize}
            rowsPerPageOptions={[5, 10, 25]}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleLimitChange}
          />
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}

export default CategoriesListing;
