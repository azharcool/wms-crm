import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CancelIcon from "@mui/icons-material/Cancel";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SaveIcon from "@mui/icons-material/Save";
import TagIcon from "@mui/icons-material/Tag";
import { Box, Card, Container, Grid, Stack, Typography } from "@mui/material";
import {
  companyType,
  defaultLanguage,
  defaultTimezone,
  defaultUnit,
  defaultWeight,
} from "__mock__";
import Countries from "__mock__/countries.json";
import Currency from "__mock__/currency.json";
import CustomCardContent from "components/card/CustomCardContent";
import DashedCard from "components/card/DashedCard";
import UploadButton from "components/image-upload-button/UploadButton";
import TableToolbar from "components/table-toolbar";
import TextField from "components/textfield";
import AutoComplete from "components/textfield/AutoComplete";
import { useState } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import palette from "theme/palette";

interface IMenuItem {
  id: string;
  value: string;
}

function SettingAccount() {
  const [uploadedFiles, setUploadedFiles] = useState<IMenuItem[]>([]);

  const handleFile = async (e: any) => {
    const allFiles = Array.from(e.target.files);
    const images = await Promise.all(
      allFiles.map((file) => convertBase64(file)),
    );

    const newUploadedFiles = images.map((item) => ({
      id: crypto.randomUUID(),
      value: item,
    }));
    setUploadedFiles((s) => [...s, ...newUploadedFiles]);
  };

  const rightActionsData = [
    {
      id: crypto.randomUUID(),
      title: "Cancel",
      onClick: () => {},
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
        <SaveIcon
          sx={{
            fontSize: 18,
            mr: 1,
          }}
        />
      ),
    },
  ];

  const convertBase64 = (file: any): Promise<any> => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <Container>
      <TableToolbar
        breadcrumbs={[{ link: "ACCOUNT", to: "/account" }]}
        buttonText="Save"
        handleClick={() => {}}
        rightActions={rightActionsData}
        title="Account"
      />

      <Grid container marginTop={2} spacing={2}>
        <Grid item xs={8}>
          <Card
            sx={{
              flex: 1,
            }}
          >
            <CustomCardContent title="Company Information">
              <Stack direction="row" gap={2}>
                <TextField
                  id="companyname"
                  label="Company Name"
                  name="companyname"
                  size="small"
                />
                <TextField
                  isSelect
                  menuItems={companyType}
                  id="companytype"
                  label="Company Type"
                  name="companytype"
                  size="small"
                />
              </Stack>
              <Stack direction="row" gap={2}>
                <TextField id="email" label="Email" name="email" size="small" />
                <TextField
                  id="phoneNumber"
                  type="number"
                  label="Phone Number"
                  name="phoneNumber"
                  size="small"
                />
              </Stack>
              <Stack direction="row" gap={2} marginTop={2}>
                <TextField
                  multiline
                  id="address"
                  label="Address"
                  name="address"
                  rows={3}
                  size="small"
                />
              </Stack>
              <Stack direction="row" gap={2}>
                <Grid xs={12}>
                  <AutoComplete
                    getOptionLabel={(option: any) => option?.name}
                    label="Country"
                    options={Countries || []}
                  />
                </Grid>
              </Stack>

              <Stack direction="row" gap={2} marginTop={2}>
                <TextField id="city" label="City" name="city" size="small" />
                <TextField
                  id="zipcode"
                  label="Zip Code"
                  name="zipCode"
                  size="small"
                />
              </Stack>
            </CustomCardContent>

            <CustomCardContent title="Setting">
              <Stack direction="row" gap={2}>
                <TextField
                  isSelect
                  menuItems={defaultLanguage}
                  id="defaultLanguage"
                  label="Default Language"
                  name="defaultLanguage"
                  size="small"
                />
                <TextField
                  isSelect
                  menuItems={defaultTimezone}
                  id="defaultTimezone"
                  label="Default Timezone"
                  name="defaultTimezone"
                  size="small"
                />
              </Stack>
              <Stack direction="row" gap={2}>
                <TextField
                  isSelect
                  menuItems={Currency}
                  id="defaultCurrency"
                  label="Default Currency"
                  name="defaultCurrency"
                  size="small"
                />
                <TextField
                  isSelect
                  menuItems={defaultWeight}
                  id="defaultWeightUnit"
                  label="Default Weight Unit"
                  name="defaultWeightUnit"
                  size="small"
                />
              </Stack>
              <Stack direction="row" gap={2} width="49%">
                <TextField
                  isSelect
                  menuItems={defaultUnit}
                  id="defaultWeightUnit"
                  label="Default Size Unit"
                  name="defaultWeightUnit"
                  size="small"
                />
              </Stack>
            </CustomCardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card
            sx={{
              flex: 1,
            }}
          >
            <CustomCardContent title="Branding">
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
                          width: "100px",
                          height: "100px",
                        }}
                      />
                    </Box>
                  );
                })}
                <UploadButton single handleFile={handleFile} />
              </Stack>
              <Stack direction="row" gap={2} m={2}>
                <DashedCard
                  title="Image formate"
                  leftIcon={<InfoOutlinedIcon color="info" fontSize="small" />}
                >
                  <Box
                    sx={{
                      background: "#dfe3f5",
                      color: "#2545B8",
                      padding: "3px 12px",
                      borderRadius: "5px",
                      fontSize: "12px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography sx={{ fontSize: 12 }}>
                      Extension: .PNG, .JPG (Dark version of the Logo)
                    </Typography>
                    <Typography sx={{ fontSize: 12 }}>
                      Aspect ratio: 25:6
                    </Typography>
                  </Box>
                </DashedCard>
              </Stack>
              <Stack direction="column" gap={2} marginTop={4}>
                <TextField
                  icon={<TagIcon fontSize="small" />}
                  id="primaryColory"
                  type="color"
                  label="Primary Color"
                  name="primaryColory"
                  size="small"
                />
                <TextField
                  icon={<TagIcon fontSize="small" />}
                  id="secondaryColor"
                  type="color"
                  label="Secondary Color"
                  name="secondaryColor"
                  size="small"
                />
              </Stack>
            </CustomCardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SettingAccount;
