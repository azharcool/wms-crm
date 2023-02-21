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
import { usePipelineActions } from "redux/pipeline/pipeline";
import palette from "theme/palette";
import useForm from "../hooks/useForm";
import { IPipelineRequest, useApiActions } from "../query/useApiAction";

interface IAddPipeline {
  open: boolean;
  handleClose: () => void;
}

function AddPipeline(props: IAddPipeline) {
  const { open, handleClose } = props;

  const pipelines = useSelector((state: any) => state.pipelines);
  const { pipeline } = pipelines;
  const initialValues: IPipelineRequest = {
    id: pipeline?.id,
    stageName: pipeline?.stage,
  };
  const { trySave } = useApiActions();
  const { removePipeline } = usePipelineActions();

  const onSubmit = async (values: IPipelineRequest) => {
    await trySave(values);

    handleClose();
    removePipeline();
    formik.resetForm();
  };

  const formik = useForm(onSubmit, initialValues);

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
    removePipeline();
  };

  return (
    <Slider open={open}>
      <DialogTitle>
        {pipeline ? "Edit Pipeline" : " Add Pipeline"}
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
              error={!!touched.stageName && !!errors.stageName}
              helperText={
                (touched.stageName && errors && errors.stageName) || ""
              }
              label="Name"
              name="Stage"
              placeholder="Name"
              style={{ width: "550px" }}
              value={values.stageName}
              onBlur={handleBlur("stageName")}
              onChange={handleChange("stageName")}
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
          ) : pipeline ? (
            "Edit Pipeline"
          ) : (
            " Add Pipeline"
          )}
        </Button>

        <Button autoFocus variant="contained" onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Slider>
  );
}
export default AddPipeline;
