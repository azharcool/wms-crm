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
                  label="Warehouse Name"
                  menuItems={formStatus}
                  name="warehouseName"
                  placeholder=""
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
                  label="Status"
                  menuItems={formStatus}
                  name="status"
                  placeholder="Status"
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
                  label="area"
                  menuItems={formStatus}
                  name="area"
                  placeholder="area"
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
                {/* <DialogContent dividers sx={{ background: "#fff", flex: 3 }}>
                 <DialogTitle>Area/Zone1</DialogTitle>
                 <Divider sx={{ my: 1 }} />
                 <Box
                   sx={{
                     // display: "flex",
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
                     label="Warehouse Name"
                     menuItems={formStatus}
                     name="warehouseName"
                     placeholder=""
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
                     helperText={
                       (touched.status && errors && errors.status) || ""
                     }
                     label="Status"
                     menuItems={formStatus}
                     name="status"
                     placeholder="Status"
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
                     label="area"
                     menuItems={formStatus}
                     name="area"
                     placeholder="area"
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
               </DialogContent>  */}
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
                  sx={{ margin: "normal" }}
                  error={!!touched.email && !!errors.email}
                  helperText={(touched.email && errors && errors.email) || ""}
                  label="Name"
                  name="name"
                  placeholder="Name"
                  type="email"
                  value={values.email}
                  onBlur={handleBlur("email")}
                  onChange={handleChange("email")}
                />
                <TextField
                  sx={{ margin: "normal" }}
                  isSelect
                  error={!!touched.status && !!errors.status}
                  helperText={(touched.status && errors && errors.status) || ""}
                  label="Status"
                  menuItems={formStatus}
                  name="status"
                  placeholder="Status"
                  // style={{ width: "550px" }}
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
                  label="Status"
                  menuItems={formStatus}
                  name="status"
                  placeholder="Status"
                  // style={{ width: "550px" }}
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
                  label="Status"
                  menuItems={formStatus}
                  name="status"
                  placeholder="Status"
                  // style={{ width: "550px" }}
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
                  label="Status"
                  menuItems={formStatus}
                  name="status"
                  placeholder="Status"
                  // style={{ width: "550px" }}
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
            </DialogContent>
            {/* </Box> */}

            {/* <DialogContent dividers sx={{ background: "#fff", flex: 3 }}>
               <DialogTitle>Area/Zone</DialogTitle>
               <Divider sx={{ my: 1 }} />
                <Box
                 sx={{
                   // display: "flex",
                   gap: 2,
                   alignItems: "center",
                   marginBottom: "1rem",
                 }}
                 /> 
               </DialogContent> */}
          </Box>
          <Box
            sx={{
              display: "flex",
              flex: 4,
              gap: 2,
            }}
          >
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
                  sx={{ margin: "normal" }}
                  error={!!touched.email && !!errors.email}
                  helperText={(touched.email && errors && errors.email) || ""}
                  label="Aisle"
                  name="Aisle"
                  placeholder="Aisle"
                  value={values.Aisle}
                  onBlur={handleBlur("Aisle")}
                  onChange={handleChange("Aisle")}
                />
                 <TextField
                  sx={{ margin: "normal" }}
                  error={!!touched.email && !!errors.email}
                  helperText={(touched.email && errors && errors.email) || ""}
                  label="Bay/Rack"
                  name="Bay"
                  placeholder="Bay/Rack"
                  value={values.Bay}
                  onBlur={handleBlur("Bay")}
                  onChange={handleChange("Bay")}
                />
                 <TextField
                  sx={{ margin: "normal" }}
                  error={!!touched.email && !!errors.email}
                  helperText={(touched.email && errors && errors.email) || ""}
                  label="Level/Shelf"
                  name="level"
                  placeholder="level/shelf"
                 
                  value={values.level}
                  onBlur={handleBlur("level")}
                  onChange={handleChange("level")}
                />
                 <TextField
                  sx={{ margin: "normal" }}
                  error={!!touched.email && !!errors.email}
                  helperText={(touched.email && errors && errors.email) || ""}
                  label="Bin/Position"
                  name="Bin"
                  placeholder="Bin/Position"
              
                  value={values.Bin}
                  onBlur={handleBlur("Bin")}
                  onChange={handleChange("Bin")}
                />
              </Box>
            </DialogContent>
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
                  sx={{ margin: "normal" }}
                  error={!!touched.email && !!errors.email}
                  helperText={(touched.email && errors && errors.email) || ""}
                  label="X"
                  name="X"
                  placeholder="X"
                  value={values.X}
                  onBlur={handleBlur("X")}
                  onChange={handleChange("X")}
                />
                <TextField
                  sx={{ margin: "normal" }}
                  error={!!touched.email && !!errors.email}
                  helperText={(touched.email && errors && errors.email) || ""}
                  label="Y"
                  name="Y"
                  placeholder="Y"
                  value={values.Y}
                  onBlur={handleBlur("Y")}
                  onChange={handleChange("Y")}
                />
                <TextField
                  sx={{ margin: "normal" }}
                  error={!!touched.email && !!errors.email}
                  helperText={(touched.email && errors && errors.email) || ""}
                  label="Z"
                  name="Z"
                  placeholder="Z"
                  value={values.Z}
                  onBlur={handleBlur("Z")}
                  onChange={handleChange("Z")}
                />
              </Box>
            </DialogContent>
          
          </Box>
          <Box
            sx={{
              display: "flex",
              flex: 2,
              gap: 2,
            }}
          >
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
                  sx={{ margin: "normal" }}
                  error={!!touched.email && !!errors.email}
                  helperText={(touched.email && errors && errors.email) || ""}
                  label="Aisle"
                  name="Aisle"
                  placeholder="Aisle"
                  value={values.Aisle}
                  onBlur={handleBlur("Aisle")}
                  onChange={handleChange("Aisle")}
                />
                 <TextField
                  sx={{ margin: "normal" }}
                  error={!!touched.email && !!errors.email}
                  helperText={(touched.email && errors && errors.email) || ""}
                  label="Bay/Rack"
                  name="Bay"
                  placeholder="Bay/Rack"
                  value={values.Bay}
                  onBlur={handleBlur("Bay")}
                  onChange={handleChange("Bay")}
                />
                 <TextField
                  sx={{ margin: "normal" }}
                  error={!!touched.email && !!errors.email}
                  helperText={(touched.email && errors && errors.email) || ""}
                  label="Level/Shelf"
                  name="level"
                  placeholder="level/shelf"
                 
                  value={values.level}
                  onBlur={handleBlur("level")}
                  onChange={handleChange("level")}
                />
                 <TextField
                  // sx={{ margin: "normal" }}
                  error={!!touched.email && !!errors.email}
                  helperText={(touched.email && errors && errors.email) || ""}
                  label="Bin/Position"
                  name="Bin"
                  placeholder="Bin/Position"
              
                  value={values.Bin}
                  onBlur={handleBlur("Bin")}
                  onChange={handleChange("Bin")}
                />
              </Box>
            </DialogContent>
        </Box>
        </Box>
      </PerfectScrollbar>
    </Slider>
  );
}
export default LocationsForm;
