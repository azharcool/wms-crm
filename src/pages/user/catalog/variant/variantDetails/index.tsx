import { makeStyles } from "@material-ui/core/styles";
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
import { useFormik } from "formik";
import useGetByIdVariant from "hooks/querys/catalog/variants/useGetByIdVariant";
import { useRef, useState } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import palette from "theme/palette";
import SidebarButton from "./components/SidebarButton";

import Tabs from "./components/Tabs";

const useStyles = makeStyles({
  scrollBox: {
    backgroundColor: "transparent",
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#888",
      borderRadius: "8px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  },
});

function VariantDetails() {
  const navigate = useNavigate();
  const { variantId } = useParams();
  const nameRef = useRef<any>(null);
  const newtheme = useSelector((state: any) => state.theme);
  const [editable, setEditable] = useState(false);

  const { data: variantItemResponse } = useGetByIdVariant({
    variantId: Number(variantId),
  });

  const rightActionsData = [
    {
      id: crypto.randomUUID(),
      title: "Cancel",
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

  const formik = useFormik({
    initialValues: {
      variantName: "",
      productName: "",
      optionName: "",
      height: "",
      weight: "",
      width: "",
      length: "",
      mrp: "",
      retailPrice: "",
      supplyPrice: "",
      sku: "",
      barcode: "",
      value: "",
      crossDocking: "",
    },
    onSubmit: () => {
      console.log("submit");
    },
  });

  const classes = useStyles();

  const istrue = !editable;

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
              className={classes.scrollBox}
              sx={{
                ml: -2.5,
                mt: -2,
                background: newtheme.isDarkMode
                  ? "#26263D"
                  : palette.background.default,
                height: "100%",
                overflowY: "scroll",
                position: "fixed",
              }}
            >
              <Tooltip title="Search">
                <Box sx={{ p: 1 }}>
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

            <Tabs
              data={variantItemResponse?.data}
              editable={editable}
              formik={formik}
              isTrue={istrue}
              nameRef={nameRef}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
export default VariantDetails;
