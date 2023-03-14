import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@mui/icons-material/Close";
import { Box, CircularProgress, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useSelector } from "react-redux";
import { useRoleActions } from "redux/roles/roles";
import palette from "theme/palette";
import useForm from "../hooks/useForm";
import { IRoleRequest, useApiActions } from "../query/useApiAction";

const useStyles = makeStyles({
  button: {
    width: "inherit",
    backgroundColor: palette.info.main,
    height: "45px",
    borderRadius: "5px",
  },
});

interface IAddRole {
  open: boolean;
  handleClose: () => void;
}

const initialValues: IRoleRequest = {
  id: 0,
  roleName: "",
};

function AddRole(props: IAddRole) {
  const { open, handleClose } = props;

  const roles = useSelector((state: any) => state.roles);
  const { role } = roles;

  const { trySave } = useApiActions();
  const { removeRole } = useRoleActions();
  const classes = useStyles();
  const onSubmit = async (values: IRoleRequest) => {
    await trySave(values);

    handleClose();
    removeRole();
    formik.resetForm();
  };

  const formik = useForm(onSubmit, role || initialValues);

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
    dirty,
    isSubmitting,
  } = formik;

  const onClose = () => {
    handleClose();
    removeRole();
  };

  return (
    <Slider open={open}>
      <DialogTitle>
        {role ? "Edit Role" : " Add Role"}
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
              error={!!touched.roleName && !!errors.roleName}
              helperText={(touched.roleName && errors && errors.roleName) || ""}
              id={undefined}
              label="Role"
              name="role"
              placeholder="Role"
              style={{ width: "550px" }}
              value={values.roleName}
              onBlur={handleBlur("roleName")}
              onChange={handleChange("roleName")}
            />
          </Box>
        </DialogContent>
      </PerfectScrollbar>
      <DialogActions style={{ justifyContent: "center" }}>
        <Button
          className={`${classes.button}`}
          disabled={!(isValid && dirty)}
          sx={{
            backgroundColor: palette.error.main,
            fontSize: { xs: "1rem", xl: "1.1rem" },
          }}
          variant="contained"
          onClick={() => handleSubmit()}
        >
          {isSubmitting ? (
            <CircularProgress color="warning" size={12} />
          ) : (
            "Submit"
          )}
        </Button>

        <Button
          autoFocus
          className={`${classes.button}`}
          sx={{
            backgroundColor: palette.error.main,
            fontSize: { xs: "1rem", xl: "1.1rem" },
          }}
          variant="contained"
          onClick={onClose}
        >
          Close
        </Button>
      </DialogActions>
    </Slider>
  );
}
export default AddRole;
