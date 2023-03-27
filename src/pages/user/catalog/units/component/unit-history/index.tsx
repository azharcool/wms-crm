import {
  Box,
  Card,
  Container,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  PaletteMode,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
// import Typography from "theme/typography";
import DashedCard from "components/card/DashedCard";
import TableToolbar from "components/table-toolbar";
import TextField from "components/textfield";

interface ICustomCard {
  title: string;
  children: React.ReactNode;
}
function CustomCardContent(props: ICustomCard) {
  const { title, children } = props;
  return (
    <>
      <DialogTitle>
        <Typography component="h6">{title}</Typography>
      </DialogTitle>
      <Divider />
      <DialogContent>{children}</DialogContent>
    </>
  );
}

function UnitHistory() {
  const newtheme = useSelector((state: any) => state.theme);

  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      primary: {
        ...purple,
        ...(mode === "dark" && {
          main: "#1e1e2d",
        }),
      },
      ...(mode === "dark" && {
        background: {
          default: "#1e1e2d",
          paper: "#1B1B33",
        },
      }),
      text: {
        ...(mode === "light"
          ? {
              primary: grey[900],
              secondary: grey[800],
            }
          : {
              primary: "#fff",
              secondary: grey[500],
            }),
      },
    },
  });
  const darkModeTheme = createTheme(getDesignTokens("dark"));

  return (
    <ThemeProvider theme={newtheme.isDarkMode ? darkModeTheme : lightTheme}>
      <Container maxWidth={false}>
        <TableToolbar
          buttonText=""
          handleClick={() => {
            // navigate(AppRoutes.CATALOG.productCreate);
          }}
          navTitle="CATELOG"
          rightActions={[]}
          title="IPHONE XR"
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            marginTop: "16px",
            flex: 1,
          }}
        >
          <Toolbar
            sx={{
              left: {
                lg: 2,
                display: "flex",
                gap: 2,
                flex: 1,
              },
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={10}>
                <Card
                  sx={{
                    flex: 1,
                  }}
                >
                  <CustomCardContent title="Unit information">
                    <Stack direction="row" gap={2}>
                      <TextField
                        darkDisable
                        disabled
                        id="variant"
                        label="Variant"
                        name="variant"
                        size="small"
                        value="Books non-fiction"
                      />
                      <TextField
                        darkDisable
                        disabled
                        id="unitNumber"
                        label="Unit number"
                        name="unitNumber"
                        size="small"
                        value="6463562295194"
                      />
                    </Stack>
                    <Stack direction="row" gap={2}>
                      <TextField
                        darkDisable
                        disabled
                        id="type"
                        label="Type"
                        name="type"
                        size="small"
                        value="INCREASE"
                      />
                      <TextField
                        darkDisable
                        disabled
                        id="oldQuantity"
                        label="Old quantity"
                        name="oldQuantity"
                        size="small"
                        value="0"
                      />
                    </Stack>
                    <Stack direction="row" gap={2}>
                      <TextField
                        darkDisable
                        disabled
                        id="newQuantity"
                        label="New quantity"
                        name="newQuantity"
                        size="small"
                        value="100"
                      />
                      <TextField
                        darkDisable
                        disabled
                        id="source"
                        label="Source"
                        name="source"
                        size="small"
                        value="SA-12912"
                      />
                    </Stack>
                    <Stack direction="row" gap={2}>
                      <TextField
                        darkDisable
                        disabled
                        id="destination"
                        label="Destination"
                        name="destination"
                        size="small"
                        value="Not provided"
                      />
                      <TextField
                        darkDisable
                        disabled
                        id="serialNumber"
                        label="Serial number"
                        name="serialNumber"
                        size="small"
                        value="Not provided"
                      />
                    </Stack>
                    <Stack direction="row" gap={2}>
                      <TextField
                        darkDisable
                        disabled
                        id="batchNumber"
                        label="Batch number"
                        name="batchNumber"
                        size="small"
                        value="Not provided"
                      />
                      <TextField
                        darkDisable
                        disabled
                        id="expiryDate"
                        label="Expiry date"
                        name="expiryDate"
                        size="small"
                        value="Not provided"
                      />
                    </Stack>
                    <Stack direction="row" gap={2}>
                      <TextField
                        darkDisable
                        disabled
                        id="price"
                        label="Price"
                        name="price"
                        size="small"
                        value="0"
                      />
                      <TextField
                        darkDisable
                        disabled
                        id="currency"
                        label="Currency"
                        name="currency"
                        size="small"
                        value="Not provided"
                      />
                    </Stack>
                    <Stack direction="row" gap={2}>
                      <TextField
                        darkDisable
                        disabled
                        id="rejected"
                        label="Rejected"
                        name="rejected"
                        size="small"
                        value=""
                      />
                      <TextField
                        darkDisable
                        disabled
                        id="company"
                        label="Company"
                        name="company"
                        size="small"
                        value="Azhar"
                      />
                    </Stack>
                    <Stack direction="row" gap={2}>
                      <TextField
                        darkDisable
                        disabled
                        id="conditionCode"
                        label="Condition code"
                        name="conditionCode"
                        size="small"
                        value="New"
                      />
                      <TextField
                        darkDisable
                        disabled
                        id="container"
                        label="Container"
                        name="container"
                        size="small"
                        value="Not provided"
                      />
                    </Stack>
                    <Stack direction="row" gap={2}>
                      <TextField
                        darkDisable
                        disabled
                        id="warehouse"
                        label="Warehouse"
                        name="warehouse"
                        size="small"
                        value="Default warehouse (Demo)"
                      />
                      <TextField
                        darkDisable
                        disabled
                        id="locationID"
                        label="Location ID"
                        name="locationID"
                        size="small"
                        value="STG"
                      />
                    </Stack>
                  </CustomCardContent>
                </Card>
              </Grid>
              <Grid item xs={2}>
                <Stack direction="column" gap={2}>
                  <DashedCard title="Reserved for">
                    <Box
                      sx={{
                        background: "#dfe3f5",
                        color: "#2545B8",
                        padding: "3px 12px",
                        borderRadius: "5px",
                        fontSize: "12px",
                      }}
                    >
                      Not Provided
                    </Box>
                  </DashedCard>
                  <DashedCard title="Location">
                    <Box
                      sx={{
                        background: "#dfe3f5",
                        color: "#2545B8",
                        padding: "3px 12px",
                        borderRadius: "5px",
                        fontSize: "12px",
                      }}
                    >
                      STG
                    </Box>
                  </DashedCard>
                  <DashedCard title="Container">
                    <Box
                      sx={{
                        background: "#dfe3f5",
                        color: "#2545B8",
                        padding: "3px 12px",
                        borderRadius: "5px",
                        fontSize: "12px",
                      }}
                    >
                      Not Provided
                    </Box>
                  </DashedCard>
                  <DashedCard title="Result Qty">
                    <Box
                      sx={{
                        background: "#f1faff",
                        color: "#009ef7",
                        padding: "3px 12px",
                        borderRadius: "5px",
                        fontSize: "12px",
                      }}
                    >
                      100
                    </Box>
                  </DashedCard>
                  <DashedCard title="Difference">
                    <Box
                      sx={{
                        background: "#e8fff3",
                        color: "#50cd89",
                        padding: "3px 12px",
                        borderRadius: "5px",
                        fontSize: "12px",
                      }}
                    >
                      100
                    </Box>
                  </DashedCard>
                </Stack>
              </Grid>
            </Grid>
          </Toolbar>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default UnitHistory;
