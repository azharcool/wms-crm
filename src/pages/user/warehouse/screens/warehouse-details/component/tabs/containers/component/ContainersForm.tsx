import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  CircularProgress,
  Divider,
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
import { formStatus } from "constants/constants";
import { IDropdown } from "constants/interfaces";
import { useFetchScreens } from "pages/admin/settings/screens/screens/query/useFetchScreens";
import { useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useSelector } from "react-redux";
import { usePermissionActions } from "redux/permissions/permissions";
import palette from "theme/palette";
import useForm from "../hooks/useForm";

interface IAddScreen {
  open: boolean;
  handleClose: () => void;
}

const initialValues: any = {
  id: 0,
  quantity: "",
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

function ContainersForm(props: IAddScreen) {
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
        Containers
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
        <DialogTitle>New Container</DialogTitle>
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            fontSize: "14px",
            fontFamily: "Roboto, Helvetica, Arial, sans-serif;",
          }}
        >
          <Box sx={{ display: "flex", flex: 3, gap: 2 }}>
            <DialogContent dividers sx={{ background: "#fff", flex: 3 }}>
              <DialogTitle>Informations</DialogTitle>
              <Divider sx={{ my: 1 }} />
              <Box
                sx={{
                  //   display: "flex",
                  gap: 2,
                  alignItems: "center",
                  marginBottom: "1rem",
                  fontSize: "12px",
                  fontFamily: "Roboto, Helvetica, Arial, sans-serif;",
                }}
              >
                <TextField
                  isSelect
                  error={!!touched.status && !!errors.status}
                  helperText={(touched.status && errors && errors.status) || ""}
                  id={undefined}
                  label=" Locations"
                  menuItems={formStatus}
                  name="locations"
                  placeholder="Locations"
                  size={undefined}
                  sx={{
                    fontfamily: "poppins,sans-serif",
                    fontsize: "16px",
                    fontweight: "500",
                    margin: "normal",
                  }}
                  value={values.locations}
                  onBlur={handleBlur("locations")}
                  onChange={handleChange("locations")}
                  onSelectHandler={(event) => {
                    if (event.target.value) {
                      setFieldValue("locations", event.target.value);
                    } else {
                      setFieldValue("locations", "");
                    }
                  }}
                />
                <TextField
                  isSelect
                  error={!!touched.status && !!errors.status}
                  helperText={(touched.status && errors && errors.status) || ""}
                  id={undefined}
                  label="Containers_type"
                  menuItems={formStatus}
                  name="containers_type"
                  placeholder="Containers_type"
                  size={undefined}
                  sx={{ margin: "normal" }}
                  value={values.containers_type}
                  onBlur={handleBlur("containers_type")}
                  onChange={handleChange("containers_type")}
                  onSelectHandler={(event) => {
                    if (event.target.value) {
                      setFieldValue("containers_type", event.target.value);
                    } else {
                      setFieldValue("containers_type", "");
                    }
                  }}
                />
                <TextField
                  isSelect
                  error={!!touched.status && !!errors.status}
                  helperText={(touched.status && errors && errors.status) || ""}
                  id={undefined}
                  label="Parents"
                  menuItems={formStatus}
                  name="parents"
                  placeholder="Parents"
                  size={undefined}
                  sx={{ margin: "normal" }}
                  value={values.parents}
                  onBlur={handleBlur("parents")}
                  onChange={handleChange("parents")}
                  onSelectHandler={(event) => {
                    if (event.target.value) {
                      setFieldValue("parents", event.target.value);
                    } else {
                      setFieldValue("parents", "");
                    }
                  }}
                />

                <TextField
                  error={!!touched.quantity && !!errors.quantity}
                  id={undefined}
                  placeholder="Quantity"
                  size={undefined}
                  value={values.quantity}
                  onBlur={handleBlur("quantity")}
                  onChange={handleChange("quantity")}
                  helperText={
                    (touched.quantity && errors && errors.quantity) || ""
                  }
                  // label="Quantity"
                  name="quantity"
                />
              </Box>
            </DialogContent>
            <DialogContent dividers sx={{ background: "#fff", flex: 2 }}>
              <DialogTitle>Dimensions</DialogTitle>
              <Divider sx={{ my: 1 }} />

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <Box
                  sx={{
                    //   display: "flex",
                    gap: 2,
                    alignItems: "center",
                    marginBottom: "1rem",
                    flexDirection: "column",
                  }}
                >
                  <TextField
                    error={!!touched.height && !!errors.height}
                    helperText={
                      (touched.height && errors && errors.height) || ""
                    }
                    id={undefined}
                    name="height"
                    placeholder="Height"
                    size={undefined}
                    style={{ width: "200px", mr: "5px" }}
                    value={values.height}
                    onBlur={handleBlur("height")}
                    onChange={handleChange("height")}
                  />

                  <TextField
                    error={!!touched.width && !!errors.width}
                    helperText={(touched.width && errors && errors.width) || ""}
                    id={undefined}
                    name="width"
                    placeholder="width"
                    size={undefined}
                    style={{ width: "200px" }}
                    value={values.width}
                    onBlur={handleBlur("width")}
                    onChange={handleChange("width")}
                  />
                  <TextField
                    error={!!touched.length && !!errors.length}
                    helperText={
                      (touched.length && errors && errors.length) || ""
                    }
                    id={undefined}
                    name="length"
                    placeholder="length"
                    size={undefined}
                    style={{ width: "200px", mt: "15px", mr: "5px" }}
                    value={values.length}
                    onBlur={handleBlur("length")}
                    onChange={handleChange("length")}
                  />
                  <TextField
                    error={!!touched.max && !!errors.max}
                    helperText={(touched.max && errors && errors.max) || ""}
                    id={undefined}
                    name="max"
                    placeholder="Max.Load"
                    size={undefined}
                    style={{ width: "200px", mt: "15px" }}
                    value={values.max}
                    onBlur={handleBlur("max")}
                    onChange={handleChange("max")}
                  />
                  <TextField
                    error={!!touched.volume && !!errors.volume}
                    helperText={
                      (touched.volume && errors && errors.volume) || ""
                    }
                    id={undefined}
                    name="volume"
                    size={undefined}
                    value={values.volume}
                    onBlur={handleBlur("volume")}
                    onChange={handleChange("volume")}
                    placeholder="volume"
                    //   style={{ width: "550px" }}
                    style={{ width: "500px", mt: "15px" }}
                  />
                </Box>
              </Box>
            </DialogContent>
          </Box>
        </Box>
      </PerfectScrollbar>
    </Slider>
  );
}
export default ContainersForm;
