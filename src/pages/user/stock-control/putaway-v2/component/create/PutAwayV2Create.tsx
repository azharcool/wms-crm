import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import {
  Box,
  Card,
  Container,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";
import CustomToolButton from "components/custom-tool-button/CustomToolButton";
import TableToolbar from "components/table-toolbar";
import CustomTableCell from "components/table/CustomTableCell";
import TextField from "components/textfield";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import AppRoutes from "routes/appRoutes";
import ShowItems from "./ShowItems";
import ShowScanedItems from "./ShowScanedItems";

function PutAwayV2Create() {
  const [showItems, setShowItems] = useState(false);
  const [showScanedItems, setShowScanedItems] = useState(false);

  const handleshowItems = () => {
    setShowItems((s) => !s);
  };

  const handleshowScanedItems = () => {
    setShowScanedItems((s) => !s);
  };

  const rightActionsData = [
    {
      id: crypto.randomUUID(),
      title: "Cancel",
      onClick: () => {
        // setEditable(false);
      },
      icon: (
        <ArrowBackIosIcon
          sx={{
            fontSize: 18,
            mr: 1,
          }}
        />
      ),
    },
    {
      id: crypto.randomUUID(),
      title: "Pick",
      onClick: () => {
        // formik.handleSubmit();
      },
      icon: undefined,
    },
  ];

  return (
    <Container>
      <TableToolbar
        breadcrumbs={[
          {
            link: "Stock Control",
            to: `/${AppRoutes.stockControl.layout}/${AppRoutes.stockControl.putaway_v2.listing}`,
          },
        ]}
        buttonText="Save"
        handleClick={() => {
          // handleSubmit()
        }}
        navTitle="PUTAWAY"
        rightActions={rightActionsData}
        title="Create putaway"
      />
      <Grid item marginTop={2} xs={12}>
        <Stack flexDirection="row" justifyContent="space-between">
          <Box
            sx={{
              display: "flex",
              gap: 2,
              width: "50%",
            }}
          >
            <TextField
              iconEnd
              icon={<QrCodeScannerIcon />}
              id="sku"
              label="Scan Location"
              name="sku"
              size="small"
              style={{ width: "60%" }}
              onClickIcon={() => {}}
            />
            <Typography sx={{ fontSize: "14px" }}>
              Source Location
              <Typography sx={{ fontSize: "14px" }}>
                No location scanned
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "50%",
            }}
          >
            <CustomToolButton
              handleClick={handleshowItems}
              title="Show Items"
            />
            <CustomToolButton
              handleClick={handleshowScanedItems}
              title="Show Scanned Items"
            />
          </Box>
        </Stack>
      </Grid>
      <Grid item marginTop={2} xs={12}>
        <LineItems />
      </Grid>
      {showItems ? (
        <ShowItems handleClose={handleshowItems} open={showItems} />
      ) : null}
      {showScanedItems ? (
        <ShowScanedItems
          handleClose={handleshowScanedItems}
          open={showScanedItems}
        />
      ) : null}
    </Container>
  );
}

export default PutAwayV2Create;

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
    title: "Barcode",
  },
  {
    id: crypto.randomUUID(),
    title: "Serial number",
  },
  {
    id: crypto.randomUUID(),
    title: "Quantity",
  },
];

function LineItems() {
  const newtheme = useSelector((state: any) => state.theme);
  return (
    <Card>
      <CustomCardContent title="Active line item">
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
                    return (
                      <CustomTableCell
                        key={item.id}
                        isHeader
                        customStyle={{
                          padding: "10px",
                        }}
                        // minWt={120}
                      >
                        {item.title}
                      </CustomTableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
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
                  <TableCell>-</TableCell>
                  <TableCell>{/* inventory */}-</TableCell>
                  <TableCell>Empty</TableCell>
                  <TableCell>-</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </TableContainer>
      </CustomCardContent>
    </Card>
  );
}
