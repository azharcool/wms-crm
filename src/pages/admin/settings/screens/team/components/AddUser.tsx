import CloseIcon from "@mui/icons-material/Close";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Box, CircularProgress, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";
import { IDropdown } from "constants/interfaces";
import { useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useSelector } from "react-redux";
import { useTeamActions } from "redux/team/team";
import palette from "theme/palette";
import useForm from "../hooks/useForm";
import { IUserRequest, useApiActions } from "../query/useApiAction";
import { useFetchRoles } from "../query/useFetchRoles";

interface IAddUser {
  open: boolean;
  handleClose: () => void;
}

const initialValues: IUserRequest = {
  fullName: "",
  roleId: "",
  email: "",
  password: "",
  mobileNumber: "",
  address: "",
};

function AddUser(props: IAddUser) {
  const { open, handleClose } = props;

  const [roles, setRoles] = useState<IDropdown[]>([]);
  const [showPassword, setShowPassword] = useState(false);
  const team = useSelector((state: any) => state.team);
  const { user } = team;

  const { trySave } = useApiActions();
  const { removeUser } = useTeamActions();
  const { data: roleData } = useFetchRoles();

  const onSubmit = async (values: IUserRequest) => {
    await trySave(values);

    handleClose();
    removeUser();
    formik.resetForm();
  };

  const formik = useForm(onSubmit, user || initialValues);

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
    if (roleData?.data) {
      const tempRoles: IDropdown[] = [];
      roleData?.data?.map((item) => {
        tempRoles.push({ id: item.id, value: item.roleName });
        return item;
      });
      setRoles(tempRoles);
    }
  }, [roleData]);

  const handlePasswordToggle = () => setShowPassword((show: boolean) => !show);

  const onClose = () => {
    handleClose();
    removeUser();
  };

  return (
    <Slider open={open}>
      <DialogTitle>
        {user ? "Edit User" : " Add User"}
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
              error={!!touched.roleId && !!errors.roleId}
              helperText={(touched.roleId && errors && errors.roleId) || ""}
              label="Role"
              menuItems={roles}
              name="Role"
              style={{ width: "550px" }}
              value={values.roleId}
              onBlur={handleBlur("roleId")}
              onChange={handleChange("roleId")}
              onSelectHandler={(event) => {
                if (event.target.value) {
                  setFieldValue("roleId", event.target.value);
                } else {
                  setFieldValue("roleId", "");
                }
              }}
            />
            <TextField
              error={!!touched.fullName && !!errors.fullName}
              helperText={(touched.fullName && errors && errors.fullName) || ""}
              label="Full Name"
              name="fullName"
              placeholder="Full Name"
              style={{ width: "550px" }}
              type="text"
              value={values.fullName}
              onBlur={handleBlur("fullName")}
              onChange={handleChange("fullName")}
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
              placeholder="email"
              style={{ width: "550px" }}
              type="email"
              value={values.email}
              onBlur={handleBlur("email")}
              onChange={handleChange("email")}
            />
            <TextField
              error={!!touched.address && !!errors.address}
              helperText={(touched.address && errors && errors.address) || ""}
              label="Address"
              name="address"
              placeholder="address"
              style={{ width: "550px" }}
              value={values.address}
              onBlur={handleBlur("address")}
              onChange={handleChange("address")}
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
              error={!!touched.mobileNumber && !!errors.mobileNumber}
              helperText={
                (touched.mobileNumber && errors && errors.mobileNumber) || ""
              }
              label="Mobile"
              name="mobile"
              placeholder="mobile"
              style={{ width: "550px" }}
              type="text"
              value={values.mobileNumber}
              onBlur={handleBlur("mobileNumber")}
              onChange={handleChange("mobileNumber")}
            />
            <Box
              sx={{
                display: user ? "none" : "block",
              }}
            >
              <TextField
                iconEnd
                error={!!touched.password && !!errors.password}
                helperText={
                  (touched.password && errors && errors.password) || ""
                }
                icon={
                  <IconButton onClick={handlePasswordToggle}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                }
                label="Password"
                name="password"
                placeholder="password"
                style={{ width: "550px" }}
                type={showPassword ? "text" : "password"}
                value={values.password}
                onBlur={handleBlur("password")}
                onChange={handleChange("password")}
              />
            </Box>
          </Box>
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
          ) : user ? (
            "Edit User"
          ) : (
            " Add User"
          )}
        </Button>

        <Button autoFocus variant="contained" onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Slider>
  );
}
export default AddUser;
