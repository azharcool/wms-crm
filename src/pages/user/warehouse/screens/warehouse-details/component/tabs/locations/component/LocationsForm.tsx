import CloseIcon from "@mui/icons-material/Close";

import {
  Box,
  Card,
  CircularProgress,
  Divider,
  FormControlLabel,
  IconButton,
  InputLabel,
  styled,
  Switch,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slider from "components/layouts/popup-modals/Slider";
import ErrorMessages from "constants/ErrorMessages";
import MultipeSelect from "components/multiple-select";
import TextField from "components/textfield";
import {
  formStatus,
  pickingStrategy,
  receivingStrategy,
  receivingType,
} from "constants/constants";
import { IDropdown } from "constants/interfaces";
import { useFetchScreens } from "pages/admin/settings/screens/screens/query/useFetchScreens";
import { useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useSelector } from "react-redux";
import { usePermissionActions } from "redux/permissions/permissions";
import palette from "theme/palette";
import useForm from "../hooks/useForm";
// import useForm from "../hooks/useForm";
// import { IPermissionRequest, useApiActions } from "../query/useApiAction";

interface IAddScreen {
  open: boolean;
  handleClose: () => void;
}

const initialValues: any = {
  id: 0,
  X: "",
  Y: "",
  Z: "",
  warehouseName: "",
  area: "",
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

function LocationsForm(props: IAddScreen) {
  const { open, handleClose } = props;

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

  return (
    <Slider open={open}>
      <DialogTitle>
        New Location
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
        <DialogTitle>New Locations</DialogTitle>
        <Box>
          <Button
            disabled={!(isValid && dirty)}
            sx={{
              width: "inherit",
              backgroundColor: palette.info.main,
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
        {/* Coding */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              flex: 4,
              gap: 2,
            }}
          >
            <DialogContent dividers sx={{ background: "#fff", flex: 3 }}>
              <DialogTitle>Area/Zone</DialogTitle>
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
                  error={!!touched.warehouse && !!errors.warehouse}
                  helperText={
                    (touched.warehouse && errors && errors.warehouse) || ""
                  }
                  // label="Warehouse Name"
                  menuItems={formStatus}
                  name="warehouseName"
                  placeholder="warehouseName"
                  style={{ width: "550px" }}
                  value={values.warehouseName}
                  onBlur={handleBlur("warehouseName")}
                  onChange={handleChange("warehouseName")}
                  onSelectHandler={(event) => {
                    if (event.target.value) {
                      setFieldValue("warehouseName", event.target.value);
                    } else {
                      setFieldValue("warehouseName", "");
                    }
                  }}
                />
                <TextField
                  isSelect
                  error={!!touched.status && !!errors.status}
                  helperText={(touched.status && errors && errors.status) || ""}
                  // label="Status"
                  menuItems={formStatus}
                  name="status"
                  placeholder="area"
                  style={{ width: "550px" }}
                  value={values.status}
                  onBlur={handleBlur("status")}
                  onChange={handleChange("status")}
                  onSelectHandler={(event) => {
                    if (event.target.value) {
                      setFieldValue("warehouse", event.target.value);
                    } else {
                      setFieldValue("warehouse", "");
                    }
                  }}
                />
                <TextField
                  isSelect
                  error={!!touched.area && !!errors.area}
                  helperText={(touched.area && errors && errors.area) || ""}
                  // label="area"
                  menuItems={formStatus}
                  name="area"
                  placeholder="Zone"
                  style={{ width: "550px" }}
                  value={values.area}
                  onBlur={handleBlur("area")}
                  onChange={handleChange("area")}
                  onSelectHandler={(event) => {
                    if (event.target.value) {
                      setFieldValue("area", event.target.value);
                    } else {
                      setFieldValue("area", "");
                    }
                  }}
                />
              </Box>
              <Box sx={{ backgroundColor: "red", width: "100%" }}>
                {/* <Typography>
                  hi
                </Typography> */}
                <DialogContent dividers sx={{ background: "#fff", flex: 3 }}>
                  <DialogTitle>Shelf/Bin</DialogTitle>
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
                      error={!!touched.aisle && !!errors.aisle}
                      helperText={(touched.aisle && errors && errors.aisle) || ""}
                      name="aisle"
                      // label="Aisle"
                      placeholder="Aisle"
                      sx={{ margin: "normal" }}
                      value={values.aisle}
                      onBlur={handleBlur("aisle")}
                      onChange={handleChange("aisle")}
                    />
                    <TextField
                      error={!!touched.bay && !!errors.bay}
                      helperText={(touched.bay && errors && errors.bay) || ""}
                      name="bay"
                   
                      // label="Bay/Rack"
                      placeholder="Bay/Rack"
                      sx={{ margin: "normal" }}
                      value={values.bay}
                      onBlur={handleBlur("bay")}
                      onChange={handleChange("bay")}
                    />
                    <TextField
                      error={!!touched.level && !!errors.level}
                      name="level"
                      helperText={
                        (touched.level && errors && errors.level) || ""
                      }
                      // label="Level/Shelf"
                      placeholder="level/shelf"
                      sx={{ margin: "normal" }}
                      value={values.level}
                      onBlur={handleBlur("level")}
                      onChange={handleChange("level")}
                    />
                    <TextField
                      error={!!touched.bin && !!errors.bin}
                      name="bin"
                      helperText={
                        (touched.bin && errors && errors.bin) || ""
                      }
                      // label="Bin/Position"
                      placeholder="Bin/Position"
                      sx={{ margin: "normal" }}
                      value={values.bin}
                      onBlur={handleBlur("bin")}
                      onChange={handleChange("bin")}
                    />
                  </Box>
                </DialogContent>
                <Box sx={{ backgroundColor: "red" }}>
                  {" "}
                  <DialogContent dividers sx={{ background: "#fff", flex: 3 }}>
                    <DialogTitle>Dimension</DialogTitle>
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
                        error={!!touched.volume && !!errors.volume}
                        name="volume"
                        helperText={
                          (touched.volume  && errors.volume) || ""
                        }
                        // label="Aisle"
                        placeholder="Volume"
                        sx={{ margin: "normal" }}
                        value={values.volume}
                        onBlur={handleBlur("volume")}
                        onChange={handleChange("volume")}
                      />
                      <TextField
                        error={!!touched.height && !!errors.height}
                        name="height"
                        helperText={
                          (touched.height && errors.height) || ""
                        }
                        // label="Bay/Rack"
                        placeholder="Height"
                        sx={{ margin: "normal" }}
                        value={values.height}
                        onBlur={handleBlur("height")}
                        onChange={handleChange("height")}
                      />
                      <TextField
                        error={!!touched.width && !!errors.width}
                        name="width"
                        helperText={
                          (touched.width  && errors.width) || ""
                        }
                        // label="Level/Shelf"
                        placeholder="Width"
                        sx={{ margin: "normal" }}
                        value={values.width}
                        onBlur={handleBlur("width")}
                        onChange={handleChange("width")}
                      />
                      <TextField
                        // sx={{ margin: "normal" }}
                        error={!!touched.max && !!errors.max}
                        helperText={(touched.max && errors && errors.max) || ""}
                        // label="Bin/Position"
                        name="max"
                        placeholder="max.load"
                        value={values.max}
                        onBlur={handleBlur("max")}
                        onChange={handleChange("max")}
                      />
                    </Box>
                  </DialogContent>
                </Box>
              </Box>
            </DialogContent>

            <DialogContent dividers sx={{ background: "#fff", flex: 1 }}>
              <DialogTitle>Setting</DialogTitle>
              <Divider sx={{ my: 1 }} />

              <Box
                sx={{
                  // display: "flex",
                  gap: 1,
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <TextField
                  error={!!touched.email && !!errors.email}
                  placeholder="Name"
                  sx={{ margin: "normal" }}
                  type="email"
                  value={values.email}
                  onBlur={handleBlur("email")}
                  onChange={handleChange("email")}
                  helperText={(touched.email && errors && errors.email) || ""}
                  // label="Name"
                  name="name"
                />
                <TextField
                  isSelect
                  error={!!touched.status && !!errors.status}
                  helperText={(touched.status && errors && errors.status) || ""}
                  menuItems={formStatus}
                  sx={{ margin: "normal" }}
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
                  name="status"
                  // label="Location type"
                  placeholder="Location type"
                />

                <TextField
                  isSelect
                  error={!!touched.status && !!errors.status}
                  helperText={(touched.status && errors && errors.status) || ""}
                  menuItems={formStatus}
                  name="status"
                  placeholder="Operation"
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
                <TextField
                  isSelect
                  error={!!touched.status && !!errors.status}
                  helperText={(touched.status && errors && errors.status) || ""}
                  menuItems={formStatus}
                  name="status"
                  placeholder="Active"
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
              <Box sx={{ backgroundColor: "red", width: "100%" }}>
                <DialogContent dividers sx={{ background: "#fff", flex: 1 }}>
                  <DialogTitle>Cordinate</DialogTitle>
                  <Divider sx={{ my: 1 }} />

                  <Box
                    sx={{
                      gap: 1,
                      alignItems: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <TextField
                      error={!!touched.X && !!errors.X}
                      helperText={(touched.X && errors && errors.X) || ""}
                      name="X"
                      placeholder="X"
                      sx={{ margin: "normal" }}
                      value={values.X}
                      onBlur={handleBlur("X")}
                      onChange={handleChange("X")}
                    />
                    <TextField
                      error={!!touched.Y && !!errors.Y}
                      helperText={(touched.Y && errors && errors.Y) || ""}
                      name="Y"
                      placeholder="Y"
                      sx={{ margin: "normal" }}
                      value={values.Y}
                      onBlur={handleBlur("Y")}
                      onChange={handleChange("Y")}
                    />
                    <TextField
                      error={!!touched.Z && !!errors.Z}
                      helperText={(touched.Z && errors && errors.Z) || ""}
                      name="Z"
                      placeholder="Z"
                      sx={{ margin: "normal" }}
                      value={values.Z}
                      onBlur={handleBlur("Z")}
                      onChange={handleChange("Z")}
                    />
                  </Box>
                </DialogContent>
              </Box>
            </DialogContent>
          </Box>
        </Box>
      </PerfectScrollbar>
    </Slider>
  );
}
export default LocationsForm;
