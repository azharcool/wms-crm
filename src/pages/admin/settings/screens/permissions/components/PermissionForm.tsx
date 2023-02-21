import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  CircularProgress,
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
import { IDropdown } from "constants/interfaces";
import { useFetchScreens } from "pages/admin/settings/screens/screens/query/useFetchScreens";
import { useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useSelector } from "react-redux";
import { usePermissionActions } from "redux/permissions/permissions";
import palette from "theme/palette";
import useForm from "../hooks/useForm";
import { IPermissionRequest, useApiActions } from "../query/useApiAction";

interface IAddScreen {
  open: boolean;
  handleClose: () => void;
}

const initialValues: IPermissionRequest = {
  id: 0,
  permissions: "",
  permissionDescription: "",
  permissionCode: "",
  screenId: 0,
  screenUrl: "",
  screenCode: "",
  isScreen: false,
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

function PermissionTable(props: IAddScreen) {
  const { open, handleClose } = props;

  const screenStorage = useSelector((state: any) => state.permissions);
  const { permission } = screenStorage;
  const [screens, setScreens] = useState<IDropdown[]>([]);
  const { trySave } = useApiActions();
  const { removePermission } = usePermissionActions();
  const { data: screensData } = useFetchScreens(0, 0, false);

  const onSubmit = async (values: IPermissionRequest) => {
    await trySave(values);

    handleClose();
    removePermission();
    formik.resetForm();
  };

  const formik = useForm(onSubmit, permission || initialValues);

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
        Add Permission
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
      <PerfectScrollbar>
        <DialogContent dividers>
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
              error={!!touched.screenId && !!errors.screenId}
              helperText={(touched.screenId && errors && errors.screenId) || ""}
              label="Screen"
              menuItems={screens}
              name="screen"
              style={{ width: "550px" }}
              value={values.screenId}
              onBlur={handleBlur("screenId")}
              onChange={handleChange("screenId")}
              onSelectHandler={(event) => {
                if (event.target.value) {
                  setFieldValue("screenId", event.target.value);
                } else {
                  setFieldValue("screenId", "");
                }
              }}
            />
            <TextField
              error={!!touched.permissions && !!errors.permissions}
              helperText={
                (touched.permissions && errors && errors.permissions) || ""
              }
              label="Permission"
              name="Permission"
              placeholder="Permission"
              style={{ width: "550px" }}
              value={values.permissions}
              onBlur={handleBlur("permissions")}
              onChange={handleChange("permissions")}
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
              error={
                !!touched.permissionDescription &&
                !!errors.permissionDescription
              }
              helperText={
                (touched.permissionDescription &&
                  errors &&
                  errors.permissionDescription) ||
                ""
              }
              label="Description"
              name="permission Description"
              placeholder="Description"
              style={{ width: "550px" }}
              value={values.permissionDescription}
              onBlur={handleBlur("permissionDescription")}
              onChange={handleChange("permissionDescription")}
            />
            <TextField
              error={!!touched.permissionCode && !!errors.permissionCode}
              helperText={
                (touched.permissionCode && errors && errors.permissionCode) ||
                ""
              }
              label="Code"
              name="Code"
              placeholder="Code"
              style={{ width: "550px" }}
              value={values.permissionCode}
              onBlur={handleBlur("permissionCode")}
              onChange={handleChange("permissionCode")}
            />
          </Box>
          <Box sx={{ gap: 2, marginLeft: 2 }}>
            <FormControlLabel
              control={
                <Box sx={{ marginRight: 2 }}>
                  <CustomSwitch
                    defaultChecked={values.isScreen}
                    onClick={() => setFieldValue("isScreen", !values.isScreen)}
                  />
                </Box>
              }
              label="Screen"
              labelPlacement="end"
            />
          </Box>
          {values.isScreen ? (
            <Box
              sx={{
                marginTop: 2,
                display: "flex",
                gap: 2,
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <TextField
                error={!!touched.screenCode && !!errors.screenCode}
                helperText={
                  (touched.screenCode && errors && errors.screenCode) || ""
                }
                label="Screen Code"
                name="Screen Code"
                placeholder="Screen Code"
                style={{ width: "550px" }}
                value={values.screenCode}
                onBlur={handleBlur("screenCode")}
                onChange={handleChange("screenCode")}
              />
              <TextField
                error={!!touched.screenUrl && !!errors.screenUrl}
                helperText={
                  (touched.screenUrl && errors && errors.screenUrl) || ""
                }
                label="Screen Url"
                name="screen Url"
                placeholder="Screen Url"
                style={{ width: "550px" }}
                value={values.screenUrl}
                onBlur={handleBlur("screenUrl")}
                onChange={handleChange("screenUrl")}
              />
            </Box>
          ) : null}
        </DialogContent>
      </PerfectScrollbar>
      <DialogActions style={{ justifyContent: "center" }}>
        <Button
          disabled={!(isValid && dirty)}
          sx={{ width: "inherit", backgroundColor: palette.info.main }}
          variant="contained"
          onClick={() => handleSubmit()}
        >
          {isSubmitting ? (
            <CircularProgress color="warning" size={12} />
          ) : (
            "Submit"
          )}
        </Button>

        <Button autoFocus variant="contained" onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Slider>
  );
}
export default PermissionTable;
