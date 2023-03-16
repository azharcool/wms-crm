import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Container,
  Divider,
  Grid,
  InputAdornment,
  SvgIcon,
  TextField,
  Tooltip,
} from "@mui/material";

import TableToolbar from "components/table-toolbar";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SidebarButton from "./components/SidebarButton";

import Tabs from "./components/Tabs";

function VariantDetails() {
  const navigate = useNavigate();
  const nameRef = useRef<any>(null);
  const [editable, setEditable] = useState(false);

  const rightActionsData = [
    {
      id: crypto.randomUUID(),
      title: "Discard",
      onClick: () => {
        setEditable(false);
        // history.push(`123436/${AppRoutes.CATALOG.categoryDetail}`);
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
      title: "Edit",
      onClick: () => {
        setEditable(true);
        setTimeout(() => {
          nameRef.current?.focus();
        }, 500);
      },
      icon: (
        <EditIcon
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
        setEditable(false);
        navigate(-1);
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
  return (
    <Container maxWidth={false}>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Grid container columns={12} spacing={2}>
          <Grid item xs={3}>
            <Box
              sx={{
                ml: -2.5,
                mt: -2,
                backgroundColor: "#fff",
                height: "100%",
                // overflow: "scroll",
                // position: "sticky",
              }}
            >
              <Tooltip title="Search">
                <Box sx={{ mt: 2, p: 1 }}>
                  <Box sx={{ maxWidth: 300 }}>
                    <TextField
                      fullWidth
                      InputProps={{
                        sx: {
                          // borderRadius: 5,
                          "& input": {
                            padding: "8px 10px",
                            paddingLeft: "16px",
                            fontSize: "0.9rem",
                          },
                        },
                        endAdornment: (
                          <InputAdornment position="end">
                            <SvgIcon color="action" fontSize="small">
                              <SearchIcon />
                            </SvgIcon>
                          </InputAdornment>
                        ),
                      }}
                      placeholder="Search..."
                      variant="outlined"
                    />
                  </Box>
                </Box>
              </Tooltip>
              <Divider sx={{ pb: 1 }} />

              <SidebarButton />
              <SidebarButton />
              <SidebarButton />
              <SidebarButton />
            </Box>
          </Grid>

          <Grid item xs={9}>
            <TableToolbar
              breadcrumbs={[{ link: "CATAGORIES", to: "/Watches" }]}
              buttonText="Save"
              handleClick={() => {
                // navigate(AppRoutes.CATALOG.CategoriesDetail);
              }}
              rightActions={
                editable
                  ? rightActionsData.filter((i) => i.title !== "Edit")
                  : rightActionsData.filter((i) => i.title === "Edit")
              }
              title="lenovo ssd, adroid, WIRELESS"
            />

            <Tabs />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
export default VariantDetails;
