import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CancelIcon from "@mui/icons-material/Cancel";
import { Box, Card, Container, Grid, Stack, Typography } from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";
import UploadButton from "components/image-upload-button/UploadButton";
import TableToolbar, { ToolBarButton } from "components/table-toolbar";
import AppRoutes from "navigation/appRoutes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import palette from "theme/palette";

interface IMenuItem {
  id: string;
  value: string;
}

function BulkUpload() {
  const [uploadedFiles, setUploadedFiles] = useState<IMenuItem[]>([]);

  const navigate = useNavigate();

  const handleFile = async (e: any) => {
    const allFiles = Array.from(e.target.files);
    if (allFiles) {
      navigate(`/${AppRoutes.CATALOG.catalog}/${AppRoutes.CATALOG.products}`);
    }
  };

  return (
    <Container maxWidth={false}>
      <TableToolbar
        navTitle="PRODUCTS"
        rightActions={[
          {
            id: crypto.randomUUID(),
            title: "Cancel",
            onClick: () => {
              // navigate(
              //   `/${AppRoutes.CATALOG.catalog}/${AppRoutes.CATALOG.products}`,
              // );
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
            title: "Save",
            onClick: () => {
              // handleSubmit();
            },
            icon: (
              <AddCircleIcon
                sx={{
                  fontSize: 18,
                  mr: 1,
                }}
              />
            ),
          },
        ]}
        title="Import Products"
      />

      <Grid container marginTop={2} padding={0} spacing={2}>
        <Grid
          item
          sx={{
            "&.MuiGrid-item": {
              paddingTop: "0px",
            },
          }}
          xs={8}
        >
          <Card
            sx={{
              flex: 1,
            }}
          >
            <CustomCardContent title="Upload">
              <Stack direction="row" flexWrap="wrap" gap={2}>
                {uploadedFiles.map((item) => {
                  return (
                    <Box
                      key={item.id}
                      sx={{
                        position: "relative",
                      }}
                    >
                      <CancelIcon
                        sx={{
                          width: "17px",
                          height: "17px",
                          cursor: "pointer",
                          color: `${palette.error.lightRed}`,
                          position: "absolute",
                          right: "-5px",
                          top: "-5px",
                          background: "white",
                        }}
                        onClick={() => {
                          const newUploadedFile = uploadedFiles.filter(
                            (i) => i.id !== item.id,
                          );
                          setUploadedFiles(newUploadedFile);
                        }}
                      />
                      <img
                        alt={item.value}
                        src={item.value}
                        style={{
                          width: "120px",
                          height: "120px",
                        }}
                      />
                    </Box>
                  );
                })}
                <UploadButton
                  single
                  accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                  handleFile={handleFile}
                  title="Drop your filr here, or select"
                />
              </Stack>
            </CustomCardContent>
          </Card>
        </Grid>
        <Grid
          item
          sx={{
            "&.MuiGrid-item": {
              paddingTop: "0px",
            },
          }}
          xs={4}
        >
          <Card
            sx={{
              flex: 1,
            }}
          >
            <CustomCardContent title="Template">
              <Stack
                direction="row"
                flexWrap="wrap"
                gap={2}
                justifyContent="center"
              >
                <ToolBarButton
                  handleClick={() => {}}
                  icon={undefined}
                  title="download spreadsheet"
                />
                <Typography
                  sx={{ color: palette.error.lightRed, fontSize: "14px" }}
                >
                  Columns highlighted in red are required.
                </Typography>
              </Stack>
            </CustomCardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default BulkUpload;
