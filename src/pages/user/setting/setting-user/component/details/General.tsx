import CancelIcon from "@mui/icons-material/Cancel";
import {
  Box,
  Card,
  Container,
  Grid,
  Stack,
} from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";
import UploadButton from "components/image-upload-button/UploadButton";
import TextField from "components/textfield";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import palette from "theme/palette";

interface IMenuItem {
  id: string;
  value: string;
}

const statusMenu = [
  {
    id: "1",
    value: "Active",
  },
  {
    id: "2",
    value: "Inactive",
  },
];


// function ToolBarButton(props: ITooblarButton) {
//   const { handleClick, title, icon } = props;

//   return (
//     <Box sx={{ m: 1, display: "flex", gap: 5, alignItems: "center" }}>
//       <Button
//         sx={{
//           width: "inherit",
//           borderRadius: "5px",
//           padding: "5px 25px",
//           backgroundColor: palette.warning.dark,
//           color: "#fff",
//           boxShadow: "none",
//           "&:hover": {
//             backgroundColor: palette.warning.dark,
//             opacity: 0.6,
//             boxShadow: "none",
//           },
//         }}
//         variant="contained"
//         onClick={() => {
//           handleClick?.();
//         }}
//       >
//         {icon}
//         <Typography
//           component="span"
//           sx={{ fontSize: { xs: "1rem", xl: "1.1rem" } }}
//         >
//           {title}
//         </Typography>
//       </Button>
//     </Box>
//   );
// }

function General() {
  const [editable, setEditable] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<IMenuItem[]>([]);
  const navigate = useNavigate();

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
    <Container maxWidth={false}>
      <Grid container spacing={2} my={2}>
        <Grid item xs={8}>
          <Card
            sx={{
              flex: 1,
            }}
          >
            <CustomCardContent title="Information">
              <Stack direction="row" gap={2}>
                <TextField
                  darkDisable
                  disabled
                  id="companyName"
                  label="First Name"
                  name="fname"
                  size="small"
                />
                <TextField
                  darkDisable
                  disabled
                  name="lname"
                  label="Last Name"
                  size="small"
                />
              </Stack>

             

              <Stack direction="row" gap={2}>
              <TextField
                darkDisable
                disabled
                id="email"
                label="Email"
                name="email"
                size="small"
              />
                <TextField
                  darkDisable
                  disabled
                  name="number"
                  label="Phone Number"
                  size="small"
                />

              </Stack>
            </CustomCardContent>

            <CustomCardContent title="Access">
              <Stack direction="column" gap={2}>
                <TextField
                  darkDisable
                  name="warehouse"
                  disabled
                  id="firstName"
                  label="Warehouse"
                  size="small"
                />
                <TextField
                  darkDisable
                  disabled
                  id="role"
                  name="role"
                  label="Role"
                  size="small"
                />
              </Stack>
            </CustomCardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ flex: 1, marginBottom: "15px" }}>
            <CustomCardContent title="Profile Photo">
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
                <UploadButton handleFile={handleFile} />
              </Stack>
            </CustomCardContent>
          </Card>

          <Card
            sx={{
              flex: 1,
            }}
          >
            <CustomCardContent title="Organization">
              <Stack direction="column">
                <TextField
                  darkDisable
                  isSelect
                  disabled
                  label="Status"
                  name="status"
                  size="small"
                />
                <TextField
                  darkDisable
                  isSelect
                  disabled
                  label="Language"
                  name="status"
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

export default General;
