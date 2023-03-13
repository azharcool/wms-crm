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


interface IAddUser {
  open: boolean;
  handleClose: () => void;
}

const initialValues: any = {
  fullName: "",
  roleId: "",
  email: "",
  password: "",
  mobileNumber: "",
  address: "",
};

function AddSupplier(props: IAddUser) {
  const { open, handleClose } = props;

  const [roles, setRoles] = useState<IDropdown[]>([]);
  const [showPassword, setShowPassword] = useState(false);
  const team = useSelector((state: any) => state.team);
  const { user } = team;

  const onSubmit = async () => {
  
  };
  
  const handlePasswordToggle = () => setShowPassword((show: boolean) => !show);

  const onClose = () => {
    handleClose();
  };

  return (
    <Slider open={open}>
      <DialogTitle>
        Create Supplier
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
          <DialogTitle>General</DialogTitle>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <TextField
              // error={!!touched.roleId && !!errors.roleId}
              // helperText={(touched.roleId && errors && errors.roleId) || ""}
              label="Company name"
              name="company name"
              placeholder="Company name"
              style={{ width: "550px" }}
              // value={values.roleId}
              // onBlur={handleBlur("roleId")}
              // onChange={handleChange("roleId")}
            />
            <TextField
              // error={!!touched.fullName && !!errors.fullName}
              // helperText={(touched.fullName && errors && errors.fullName) || ""}
              label="Short name"
              name="shortname"
              placeholder="Short Name"
              style={{ width: "550px" }}
              type="text"
              // value={values.fullName}
              // onBlur={handleBlur("fullName")}
              // onChange={handleChange("fullName")}
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
              // error={!!touched.email && !!errors.email}
              // helperText={(touched.email && errors && errors.email) || ""}
              label="Email"
              name="email"
              placeholder="email"
              style={{ width: "550px" }}
              type="email"
              // value={values.email}
              // onBlur={handleBlur("email")}
              // onChange={handleChange("email")}
            />
            <TextField
              // error={!!touched.address && !!errors.address}
              // helperText={(touched.address && errors && errors.address) || ""}
              label="Phone number"
              name="address"
              placeholder="Phone number"
              style={{ width: "550px" }}
              // value={values.address}
              // onBlur={handleBlur("address")}
              // onChange={handleChange("address")}
            />
          </Box>
          <DialogTitle>Address</DialogTitle>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <TextField
              // error={!!touched.mobileNumber && !!errors.mobileNumber}
              // helperText={
              //   (touched.mobileNumber && errors && errors.mobileNumber) || ""
              // }
              multiline
              rows={4}
              label="Address"
              name="mobile"
              placeholder="Address"
              style={{ width: "1150px" }}
              type="text"
              // value={values.mobileNumber}
              // onBlur={handleBlur("mobileNumber")}
              // onChange={handleChange("mobileNumber")}
            />
            <TextField
              // error={!!touched.mobileNumber && !!errors.mobileNumber}
              // helperText={
              //   (touched.mobileNumber && errors && errors.mobileNumber) || ""
              // }
              label="Country"
              name="mobile"
              placeholder="country"
              style={{ width: "1150px" }}
              type="text"
              // value={values.mobileNumber}
              // onBlur={handleBlur("mobileNumber")}
              // onChange={handleChange("mobileNumber")}
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
              // error={!!touched.roleId && !!errors.roleId}
              // helperText={(touched.roleId && errors && errors.roleId) || ""}
              label="City"
              name="city"
              placeholder="City"
              style={{ width: "550px" }}
              // value={values.roleId}
              // onBlur={handleBlur("roleId")}
              // onChange={handleChange("roleId")}
            />
            <TextField
              // error={!!touched.fullName && !!errors.fullName}
              // helperText={(touched.fullName && errors && errors.fullName) || ""}
              label="Zip code"
              name="zipcode"
              placeholder="Zip Code"
              style={{ width: "550px" }}
              type="text"
              // value={values.fullName}
              // onBlur={handleBlur("fullName")}
              // onChange={handleChange("fullName")}
            />
          </Box>
          <DialogTitle>Primary Contact</DialogTitle>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <TextField
              // error={!!touched.roleId && !!errors.roleId}
              // helperText={(touched.roleId && errors && errors.roleId) || ""}
              label="First name"
              name="first name"
              placeholder="First name"
              style={{ width: "550px" }}
              // value={values.roleId}
              // onBlur={handleBlur("roleId")}
              // onChange={handleChange("roleId")}
            />
            <TextField
              // error={!!touched.fullName && !!errors.fullName}
              // helperText={(touched.fullName && errors && errors.fullName) || ""}
              label="Last name"
              name="shortname"
              placeholder="Last Name"
              style={{ width: "550px" }}
              type="text"
              // value={values.fullName}
              // onBlur={handleBlur("fullName")}
              // onChange={handleChange("fullName")}
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
              // error={!!touched.email && !!errors.email}
              // helperText={(touched.email && errors && errors.email) || ""}
              label="Email"
              name="email"
              placeholder="email"
              style={{ width: "550px" }}
              type="email"
              // value={values.email}
              // onBlur={handleBlur("email")}
              // onChange={handleChange("email")}
            />
            <TextField
              // error={!!touched.address && !!errors.address}
              // helperText={(touched.address && errors && errors.address) || ""}
              label="Phone number"
              name="address"
              placeholder="Phone number"
              style={{ width: "550px" }}
              // value={values.address}
              // onBlur={handleBlur("address")}
              // onChange={handleChange("address")}
            />
          </Box>
        </DialogContent>
      </PerfectScrollbar>
      <DialogActions style={{ justifyContent: "center" }}>
        <Button
          // disabled={!(isValid && dirty)}
          sx={{ width: "inherit", backgroundColor: palette.info.main }}
          variant="contained"
          // onClick={() => handleSubmit()}
        >
          {/* {isSubmitting ? (
            <CircularProgress color="warning" size={12} />
          ) : */}
           Save
           {/* } */}
        </Button>

        <Button autoFocus variant="contained" onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Slider>
  );
}
export default AddSupplier;
