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
import { useScreenActions } from "redux/screen/screen";
import palette from "theme/palette";
import useForm from "../hooks/useForm";
import { IScreenRequest, useApiActions } from "../query/useApiAction";

interface IAddScreen {
  open: boolean;
  handleClose: () => void;
}

const initialValues: IScreenRequest = {
  id: 0,
  screenName: "",
  screenCode: "",
  screenUrl: "",
};

function AddScreen(props: IAddScreen) {
  const { open, handleClose } = props;

  const screens = useSelector((state: any) => state.screens);
  const { screen } = screens;

  const { trySave } = useApiActions();
  const { removeScreen } = useScreenActions();

  const onSubmit = async (values: IScreenRequest) => {
    await trySave(values);

    handleClose();
    removeScreen();
    formik.resetForm();
  };

  const formik = useForm(onSubmit, screen || initialValues);

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
    removeScreen();
  };

  return (
    <Slider open={open}>
      <DialogTitle>
        {screen ? "Edit Screen" : " Add Screen"}
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
              error={!!touched.screenName && !!errors.screenName}
              helperText={
                (touched.screenName && errors && errors.screenName) || ""
              }
              id={undefined}
              label="Name"
              name="screenName"
              placeholder="Name"
              size={undefined}
              style={{ width: "550px" }}
              value={values.screenName}
              onBlur={handleBlur("screenName")}
              onChange={handleChange("screenName")}
            />
            <TextField
              error={!!touched.screenCode && !!errors.screenCode}
              helperText={
                (touched.screenCode && errors && errors.screenCode) || ""
              }
              id={undefined}
              label="Code"
              name="Code"
              placeholder="Code"
              size={undefined}
              style={{ width: "550px" }}
              value={values.screenCode}
              onBlur={handleBlur("screenCode")}
              onChange={handleChange("screenCode")}
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
              error={!!touched.screenUrl && !!errors.screenUrl}
              helperText={
                (touched.screenUrl && errors && errors.screenUrl) || ""
              }
              id={undefined}
              label="Url"
              name="screenUrl"
              placeholder="Url"
              size={undefined}
              style={{ width: "550px" }}
              value={values.screenUrl}
              onBlur={handleBlur("screenUrl")}
              onChange={handleChange("screenUrl")}
            />
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
export default AddScreen;
