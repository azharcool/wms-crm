import CloseIcon from "@mui/icons-material/Close";

import {
  Box,
  CircularProgress,
  Divider,
  IconButton,
} from "@mui/material";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slider from "components/layouts/popup-modals/Slider";
import ErrorMessages from "constants/ErrorMessages";
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


function LocationsForm(props: IAddScreen) {
  const { open, handleClose } = props;

  const screenStorage = useSelector((state: any) => state.permissions);
  const { permission } = screenStorage;
  const [screens, setScreens] = useState<IDropdown[]>([]);
  const [aisle, setAisel]= useState();
  const [bay, setBay]= useState();
  const [bin, setBin]= useState();
  const [level, setLevel]= useState();
  const [area, setArea]= useState();
  const [zone, setZone]= useState();
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
        <DialogTitle>New Locations {area && `${area}`}{zone && `-${zone}`}{aisle && `${aisle}`}{bay &&`-${bay}`}{level &&`-${level}`}{bin &&`-${bin}`}</DialogTitle>
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
                  menuItems={formStatus}
                  name="status"
                  placeholder="area"
                  style={{ width: "550px" }}
                  value={values.status}
                  onBlur={handleBlur("status")}
                  onChange={handleChange("status")}
                  onSelectHandler={(event) => {
                    if (event.target.value) {
                    // setArea(event.target.value)
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
                    // setZone(event.target.value)
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
                      length={3}
                      sx={{ margin: "normal" }}
                      value={values.aisle}
                      onBlur={handleBlur("aisle")}
                      onChange={(e:any)=>{
                        setAisel(e.target.value)
                        handleChange("aisle")
                      }}
                    />
                    <TextField
                      error={!!touched.bay && !!errors.bay}
                      helperText={(touched.bay && errors && errors.bay) || ""}
                      name="bay"
                      length={3}

                      // label="Bay/Rack"
                      placeholder="Bay/Rack"
                      sx={{ margin: "normal" }}
                      value={values.bay}
                      onBlur={handleBlur("bay")}
                      onChange={(e:any)=>{
                        setBay(e.target.value)
                        handleChange("bay")
                      }}                    />
                    <TextField
                      error={!!touched.level && !!errors.level}
                      name="level"
                      helperText={
                        (touched.level && errors && errors.level) || ""
                      }
                     
                      placeholder="level/shelf"
                      sx={{ margin: "normal" }}
                      value={values.level}
                      onBlur={handleBlur("level")}
                      onChange={(e:any)=>{
                        setLevel(e.target.value)
                        handleChange("level")
                      }}                    />
                    <TextField
                      error={!!touched.bin && !!errors.bin}
                      name="bin"
                      helperText={
                        (touched.bin && errors && errors.bin) || ""
                      }
                      length={3}
                      // label="Bin/Position"
                      placeholder="Bin/Position"
                      sx={{ margin: "normal" }}
                      value={values.bin}
                      onBlur={handleBlur("bin")}
                      onChange={(e:any)=>{
                        setBin(e.target.value)
                        handleChange("bin")
                      }}
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
                       
                        placeholder="Width"
                        sx={{ margin: "normal" }}
                        value={values.width}
                        onBlur={handleBlur("width")}
                        onChange={handleChange("width")}
                      />
                      <TextField
                       
                        error={!!touched.max && !!errors.max}
                        helperText={(touched.max && errors && errors.max) || ""}
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
