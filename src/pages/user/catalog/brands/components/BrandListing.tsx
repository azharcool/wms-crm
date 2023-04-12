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
import { IGetBrandResponseRoot } from "types/catalog/brands/getBrandResponse";
import BrandItem from "./BrandItem";

// const tabs = [
//   {
//     id: crypto.randomUUID(),
//     title: "New",
//   },
//   {
//     id: crypto.randomUUID(),
//     title: "Pick",
//   },
//   {
//     id: crypto.randomUUID(),
//     title: "Close",
//   },
// ];

const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "Image",
  },
  {
    id: crypto.randomUUID(),
    title: "Name",
  },
];

interface IPaginationData {
  pageSize: number;
  page: number;
}
interface IBrandListing {
  data?: IGetBrandResponseRoot;
  total: number;
  paginationData: IPaginationData;
  setCurrentPage: (page: number) => void;
  setPageLimit: (limit: number) => void;
}

function BrandListing(props: IBrandListing) {
  const { data, total, setCurrentPage, setPageLimit, paginationData } = props;

  const handleLimitChange = (event: any) => {
    setPageLimit(event.target.value);
  };
  const handlePageChange = (event: any, newPage: any) => {
    setCurrentPage(newPage);
  };

  const csvData = data?.data.map((item) => ({
    image: "",
    name: item.name
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
        csvTitle="Brands"
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
                    // isSticky
                    // customStyle={{
                    //   zIndex: 999,
                    // }}
                    // leftValue={0}
                  >
                    <Checkbox
                      checked={false}
                      color="primary"
                      onChange={() => {}}
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
                          // position: isImage || isName ? "sticky" : "static",
                          // left: isImage || isName ? (isName ? 130 : 60) : 0,
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
                {data?.data.map((item) => {
                  return <BrandItem item={item} />;
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

export default BrandListing;
