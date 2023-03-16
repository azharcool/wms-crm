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
  import PerfectScrollbar from "react-perfect-scrollbar";
  import "react-perfect-scrollbar/dist/css/styles.css";
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
    }
  ];
  
  function BundleListing() {
    return (
      <PerfectScrollbar>
        <EnhancedTableToolbar/>
  
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
                    <CustomTableCell isCheck isHeader isSticky leftValue={0}>
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
                            minWidth: isImage ? 50 : 200,
                            position: isImage || isName ? "sticky" : "static",
                            // left: isImage || isName ? (isName ? 125 : 60) : 0,
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
                  <BundleItem />
                  <BundleItem />
                  <BundleItem />
                  <BundleItem />
                </TableBody>
              </Table>
            </PerfectScrollbar>
          </TableContainer>
        </Box>
      </PerfectScrollbar>
    );
  }
  
  export default BundleListing;
  