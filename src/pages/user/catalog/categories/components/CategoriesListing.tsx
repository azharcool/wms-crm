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

interface ICategoriesListing {
  data?: IGetCategoriesResponseRoot;
  categoriesPagination: {
    pageSize: number;
    page: number;
  };
  handlePagination: (name: string, page: number) => void;
}

type IChangeEvent = React.ChangeEvent<HTMLInputElement>;

function CategoriesListing(props: ICategoriesListing) {
  const { data, categoriesPagination, handlePagination } = props;
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

  const csvData = data?.data.map((item) => ({
    image: "",
    name: item.name,
    position: "",
    parentcategory: item.categoryName,
    status: item.brandName,
    lastcreated: item.createdOn,
    tags: "",
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
        csvTitle="Categories"
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
            count={data?.totalDocs || 0}
            page={categoriesPagination.page}
            rowsPerPage={categoriesPagination.pageSize}
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

export default CategoriesListing;
