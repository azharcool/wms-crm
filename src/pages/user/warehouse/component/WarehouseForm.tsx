import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Card,
  CircularProgress,
  Divider,
  FormControlLabel,
  IconButton,
  styled,
  Switch,
} from "@mui/material";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";
import {
  formStatus,
  pickingStrategy,
  receivingStrategy,
  receivingType,
} from "constants/constants";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { IDropdown } from "constants/interfaces";
import { useFetchScreens } from "pages/admin/settings/screens/screens/query/useFetchScreens";
import { useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { usePermissionActions } from "redux/permissions/permissions";
import palette from "theme/palette";
import useForm from "../hooks/useForm";
// import useForm from "../hooks/useForm";
// import { IPermissionRequest, useApiActions } from "../query/useApiAction";

interface IAddWarehouse {
  open: boolean;
  handleClose: () => void;
  isEdit?: boolean;
}

const initialValues: any = {
  id: 0,
  warehouseName: "",
  label: "",
  email: "",
  phoneNumber: "",
  address: "",
  country: "",
  city: "",
  zipcode: "",
  longitude: "",
  latitude: "",
  status: "",
  pickingStrategy: "",
  receivingStrategy: "",
  timezone: "",
  receivingType: "",
  defaultWarehouse: false,
  allowPartialPicking: false,

  //   permissions: "",
  //   permissionDescription: "",
  //   permissionCode: "",
  //   screenId: 0,
  //   screenUrl: "",
  //   screenCode: "",
  //   isScreen: false,
};

const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  ml: 1,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

function WarehouseForm(props: IAddWarehouse) {
  const { open, handleClose, isEdit } = props;

  const screenStorage = useSelector((state: any) => state.permissions);
  const { permission } = screenStorage;
  const [screens, setScreens] = useState<IDropdown[]>([]);
  //   const { trySave } = useApiActions();
  const { removePermission } = usePermissionActions();
  const { data: screensData } = useFetchScreens(0, 0, false);

  const onSubmit = async (values: any) => {
    // await trySave(values);
    // handleClose();
    // removePermission();
    // formik.resetForm();
  };

  const formik = useForm(onSubmit, initialValues);

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    values,
    errors,
    touched,
    isValid,
    dirty,
    isSubmitting,
  } = formik;

  useEffect(() => {
    if (screensData?.data) {
      const tempScreens: IDropdown[] = [];
      screensData?.data?.map((item) => {
        tempScreens.push({ id: item.id, value: item.screenName });
        return item;
      });
      setScreens(tempScreens);
    }
  }, [screensData]);

  const onClose = () => {
    handleClose();
    removePermission();
  };

  const newtheme = useSelector((state: any) => state.theme);

  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={newtheme.isDarkMode ? darkTheme : lightTheme}>
      <Slider open={open}>
        <DialogTitle>
          Warehouses
          <IconButton
            aria-label="close"
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme: any) => theme.palette.grey[500],
            }}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogActions style={{ justifyContent: "space-between" }}>
          <DialogTitle>
            {isEdit ? "Edit Warehouse" : "New Warehouses"}
          </DialogTitle>
          <Box>
            <Button
              disabled={!(isValid && dirty)}
              sx={{
                width: "inherit",
                // backgroundColor: palette.info.main,
                marginRight: "1rem",
              }}
              variant="contained"
              onClick={() => handleSubmit()}
            >
              {isSubmitting ? (
                <CircularProgress color="warning" size={12} />
              ) : (
                "Save"
              )}
            </Button>

            <Button autoFocus variant="contained" onClick={onClose}>
              Discard
            </Button>
          </Box>
        </DialogActions>
        <PerfectScrollbar>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", flex: 4, gap: 2 }}>
              <DialogContent sx={{ flex: 3 }} dividers>
                <DialogTitle>Information</DialogTitle>
                <Divider sx={{ my: 1 }} />
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <TextField
                    error={!!touched.warehouseName && !!errors.warehouseName}
                    helperText={
                      (touched.warehouseName &&
                        errors &&
                        errors.warehouseName) ||
                      ""
                    }
                    label="Warehouse name"
                    name="warehouseName"
                    placeholder="Warehouse Name"
                    style={{ width: "550px" }}
                    value={values.warehouseName}
                    onBlur={handleBlur("warehouseName")}
                    onChange={handleChange("warehouseName")}
                  />
                  <TextField
                    error={!!touched.label && !!errors.label}
                    helperText={(touched.label && errors && errors.label) || ""}
                    label="Label"
                    name="label"
                    placeholder="Label"
                    style={{ width: "550px" }}
                    value={values.label}
                    onBlur={handleBlur("label")}
                    onChange={handleChange("label")}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <TextField
                    error={!!touched.email && !!errors.email}
                    helperText={(touched.email && errors && errors.email) || ""}
                    label="Email"
                    name="email"
                    placeholder="Email"
                    style={{ width: "550px" }}
                    type="email"
                    value={values.email}
                    onBlur={handleBlur("email")}
                    onChange={handleChange("email")}
                  />
                  <TextField
                    error={!!touched.phoneNumber && !!errors.phoneNumber}
                    helperText={
                      (touched.phoneNumber && errors && errors.phoneNumber) ||
                      ""
                    }
                    label="Phone Number"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    style={{ width: "550px" }}
                    value={values.phoneNumber}
                    onBlur={handleBlur("phoneNumber")}
                    onChange={handleChange("phoneNumber")}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <TextField
                    error={!!touched.address && !!errors.address}
                    helperText={
                      (touched.address && errors && errors.address) || ""
                    }
                    label="Address"
                    name="address"
                    placeholder="Address"
                    style={{ width: "550px" }}
                    type="textarea"
                    value={values.address}
                    onBlur={handleBlur("address")}
                    onChange={handleChange("address")}
                  />
                  <TextField
                    isSelect
                    error={!!touched.country && !!errors.country}
                    helperText={
                      (touched.country && errors && errors.country) || ""
                    }
                    menuItems={[{ id: 1, value: "india" }]}
                    label="Country"
                    name="country"
                    placeholder="Country"
                    style={{ width: "550px" }}
                    value={values.country}
                    onBlur={handleBlur("country")}
                    onChange={handleChange("country")}
                    onSelectHandler={(event) => {
                      if (event.target.value) {
                        setFieldValue("country", event.target.value);
                      } else {
                        setFieldValue("country", "");
                      }
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <TextField
                    error={!!touched.city && !!errors.city}
                    helperText={(touched.city && errors && errors.city) || ""}
                    label="City"
                    name="city"
                    placeholder="City"
                    style={{ width: "550px" }}
                    value={values.city}
                    onBlur={handleBlur("city")}
                    onChange={handleChange("city")}
                  />
                  <TextField
                    error={!!touched.zipcode && !!errors.zipcode}
                    helperText={
                      (touched.zipcode && errors && errors.zipcode) || ""
                    }
                    label="Zicode"
                    name="zipcode"
                    placeholder="Zipcode"
                    style={{ width: "550px" }}
                    value={values.zipcode}
                    onBlur={handleBlur("zipcode")}
                    onChange={handleChange("zipcode")}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <TextField
                    error={!!touched.longitude && !!errors.longitude}
                    helperText={
                      (touched.longitude && errors && errors.longitude) || ""
                    }
                    label="Longitude"
                    name="longitude"
                    placeholder="Longitude"
                    style={{ width: "550px" }}
                    value={values.longitude}
                    onBlur={handleBlur("longitude")}
                    onChange={handleChange("longitude")}
                  />
                  <TextField
                    error={!!touched.latitude && !!errors.latitude}
                    helperText={
                      (touched.latitude && errors && errors.latitude) || ""
                    }
                    label="Latitude"
                    name="latitude"
                    placeholder="Latitude"
                    style={{ width: "550px" }}
                    value={values.latitude}
                    onBlur={handleBlur("latitude")}
                    onChange={handleChange("latitude")}
                  />
                </Box>
              </DialogContent>
              <DialogContent sx={{ flex: 1 }} dividers>
                <DialogTitle>Setting</DialogTitle>
                <Divider sx={{ my: 1 }} />

                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <TextField
                    isSelect
                    error={!!touched.status && !!errors.status}
                    helperText={
                      (touched.status && errors && errors.status) || ""
                    }
                    menuItems={formStatus}
                    label="Status"
                    name="status"
                    placeholder="Status"
                    style={{ width: "550px" }}
                    value={values.status}
                    onBlur={handleBlur("status")}
                    onChange={handleChange("status")}
                    onSelectHandler={(event) => {
                      if (event.target.value) {
                        setFieldValue("status", event.target.value);
                      } else {
                        setFieldValue("status", "");
                      }
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <TextField
                    isSelect
                    error={
                      !!touched.pickingStrategy && !!errors.pickingStrategy
                    }
                    helperText={
                      (touched.pickingStrategy &&
                        errors &&
                        errors.pickingStrategy) ||
                      ""
                    }
                    menuItems={pickingStrategy}
                    label="Picking Strategy"
                    name="Picking Strategy"
                    placeholder="Picking Strategy"
                    style={{ width: "550px" }}
                    value={values.pickingStrategy}
                    onBlur={handleBlur("pickingStrategy")}
                    onChange={handleChange("pickingStrategy")}
                    onSelectHandler={(event) => {
                      if (event.target.value) {
                        setFieldValue("pickingStrategy", event.target.value);
                      } else {
                        setFieldValue("pickingStrategy", "");
                      }
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <TextField
                    isSelect
                    error={
                      !!touched.receivingStrategy && !!errors.receivingStrategy
                    }
                    helperText={
                      (touched.receivingStrategy &&
                        errors &&
                        errors.receivingStrategy) ||
                      ""
                    }
                    menuItems={receivingStrategy}
                    label="Receiving Strategy"
                    name="receivingStrategy"
                    placeholder="Receiving Strategy"
                    style={{ width: "550px" }}
                    value={values.receivingStrategy}
                    onBlur={handleBlur("receivingStrategy")}
                    onChange={handleChange("receivingStrategy")}
                    onSelectHandler={(event) => {
                      if (event.target.value) {
                        setFieldValue("receivingStrategy", event.target.value);
                      } else {
                        setFieldValue("receivingStrategy", "");
                      }
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <TextField
                    isSelect
                    error={!!touched.timezone && !!errors.timezone}
                    helperText={
                      (touched.timezone && errors && errors.timezone) || ""
                    }
                    menuItems={[{ id: 1, value: "india" }]}
                    label="Timezone"
                    name="timezone"
                    placeholder="Timezone"
                    style={{ width: "550px" }}
                    value={values.timezone}
                    onBlur={handleBlur("timezone")}
                    onChange={handleChange("timezone")}
                    onSelectHandler={(event) => {
                      if (event.target.value) {
                        setFieldValue("timezone", event.target.value);
                      } else {
                        setFieldValue("timezone", "");
                      }
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <TextField
                    isSelect
                    error={!!touched.receivingType && !!errors.receivingType}
                    helperText={
                      (touched.receivingType &&
                        errors &&
                        errors.receivingType) ||
                      ""
                    }
                    menuItems={receivingType}
                    label="Receiving Type"
                    name="receivingType"
                    placeholder="Receiving Type"
                    style={{ width: "550px" }}
                    value={values.receivingType}
                    onBlur={handleBlur("receivingType")}
                    onChange={handleChange("receivingType")}
                    onSelectHandler={(event) => {
                      if (event.target.value) {
                        setFieldValue("receivingType", event.target.value);
                      } else {
                        setFieldValue("receivingType", "");
                      }
                    }}
                  />
                </Box>
                <Box sx={{ gap: 2, marginY: 2 }}>
                  <FormControlLabel
                    control={
                      <Box sx={{ marginRight: 2 }}>
                        <CustomSwitch
                        // defaultChecked={values.}
                        // onClick={() => setFieldValue("isScreen", !values.isScreen)}
                        />
                      </Box>
                    }
                    label="Default Warehouse"
                    labelPlacement="end"
                  />
                </Box>
                <Box sx={{ gap: 2, marginY: 2 }}>
                  <FormControlLabel
                    control={
                      <Box sx={{ marginRight: 2 }}>
                        <CustomSwitch
                        // defaultChecked={values.isScreen}
                        // onClick={() => setFieldValue("isScreen", !values.isScreen)}
                        />
                      </Box>
                    }
                    label="Allow partial packing"
                    labelPlacement="end"
                  />
                </Box>
              </DialogContent>
            </Box>
            <DialogContent sx={{ background: "#fff" }} dividers>
              <DialogTitle>Primary Contact</DialogTitle>
              <Divider sx={{ my: 1 }} />

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <TextField
                  error={!!touched.warehouseName && !!errors.warehouseName}
                  helperText={
                    (touched.warehouseName && errors && errors.warehouseName) ||
                    ""
                  }
                  label="First name"
                  name="firstname"
                  placeholder="First Name"
                  style={{ width: "550px" }}
                  value={values.warehouseName}
                  onBlur={handleBlur("warehouseName")}
                  onChange={handleChange("warehouseName")}
                />
                <TextField
                  error={!!touched.label && !!errors.label}
                  helperText={(touched.label && errors && errors.label) || ""}
                  label="Last Name"
                  name="lastname"
                  placeholder="Last Name"
                  style={{ width: "550px" }}
                  value={values.label}
                  onBlur={handleBlur("label")}
                  onChange={handleChange("label")}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <TextField
                  error={!!touched.email && !!errors.email}
                  helperText={(touched.email && errors && errors.email) || ""}
                  label="Email"
                  name="email"
                  placeholder="Email"
                  style={{ width: "550px" }}
                  type="email"
                  value={values.email}
                  onBlur={handleBlur("email")}
                  onChange={handleChange("email")}
                />
                <TextField
                  error={!!touched.phoneNumber && !!errors.phoneNumber}
                  helperText={
                    (touched.phoneNumber && errors && errors.phoneNumber) || ""
                  }
                  label="Phone Number"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  style={{ width: "550px" }}
                  value={values.phoneNumber}
                  onBlur={handleBlur("phoneNumber")}
                  onChange={handleChange("phoneNumber")}
                />
              </Box>
            </DialogContent>
          </Box>
        </PerfectScrollbar>
      </Slider>
    </ThemeProvider>
  );
}
export default WarehouseForm;
