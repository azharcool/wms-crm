import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Slider from "components/layouts/popup-modals/Slider";
import CustomTableCell from "components/table/CustomTableCell";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

interface IShowScanedItems {
  open: boolean;
  handleClose: () => void;
}

function ShowScanedItems(props: IShowScanedItems) {
  const { open, handleClose } = props;

  return (
    <Slider
      buttonText="save"
      handleChange={() => {
        // handleSubmit();
      }}
      handleClose={handleClose}
      //   isSubmitting={isSubmitting}
      open={open}
      size="md"
      title="Scanned Items"
    >
      <Grid item xs={12}>
        <LineItems />
      </Grid>
    </Slider>
  );
}

export default ShowScanedItems;

const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "Image",
  },

  {
    id: crypto.randomUUID(),
    title: "Product",
  },

  {
    id: crypto.randomUUID(),
    title: "Container",
  },
  {
    id: crypto.randomUUID(),
    title: "Qty",
  },
  {
    id: crypto.randomUUID(),
    title: "Unit Number",
  },
  {
    id: crypto.randomUUID(),
    title: "Serial Number",
  },
];

function LineItems() {
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
                      position: isImage ? "sticky" : "static",
                      left: isImage ? 0 : 50,
                      padding: "10px",
                    }}
                    minWt={120}
                  >
                    {item.title}
                  </CustomTableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                sx={{
                  width: 50,
                  position: "sticky",
                  left: 0,
                  zIndex: 999,
                }}
              >
                <Box
                  sx={{
                    width: "40px",
                    height: "40px",
                  }}
                >
                  <img
                    alt="new"
                    src="https://app.storfox.com/d9f5ac726db86ff29f7b.png"
                    width="100%"
                  />
                </Box>
              </TableCell>
              <TableCell
                sx={{
                  minWidth: 170,
                }}
              >
                product
              </TableCell>
              <TableCell
                sx={{
                  minWidth: 170,
                  // background: "white",
                }}
              >
                {/* inventory */}-
              </TableCell>
              <TableCell
                sx={{
                  minWidth: 170,
                  // background: "white",
                }}
              >
                -
              </TableCell>
              <TableCell
                sx={{
                  minWidth: 170,
                  // background: "white",
                }}
              >
                -
              </TableCell>
              <TableCell
                sx={{
                  minWidth: 170,
                  // background: "white",
                }}
              >
                -
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </PerfectScrollbar>
    </TableContainer>
  );
}
