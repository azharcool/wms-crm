import AddCircleIcon from "@mui/icons-material/AddCircle";
import CloseIcon from "@mui/icons-material/Close";
import { Box, DialogContent } from "@mui/material";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import useCreateDealForm, {
  ICreateDealForm,
} from "../../../hooks/useCreateDealForm";
import { IToggleModel } from "../../type";

interface ICreateDeal {
  open: boolean;
  handleClose: (_: keyof IToggleModel) => void;
  name: string;
}

function CreateDeal(props: ICreateDeal) {
  const { open, handleClose, name } = props;

  const initialValues: ICreateDealForm = {
    dealTitle: "",
    dealValue: "",
    selectPipLine: "",
    selectStorage: "",
    estimateCloseDate: "",
  };

  const onSubmit = async (values: ICreateDealForm) => {
    //
  };
  const formik = useCreateDealForm(onSubmit, initialValues);

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
  return (
    <Slider open={open} size="sm">
      <DialogTitle>
        Create Deal
        <IconButton
          aria-label="close"
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
          onClick={() => handleClose(name as keyof IToggleModel)}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <PerfectScrollbar>
        <DialogContent dividers>
          <Box marginTop={2}>
            <TextField
              error={!!touched.dealTitle && !!errors.dealTitle}
              helperText={
                (touched.dealTitle && errors && errors.dealTitle) || ""
              }
              label="Deal Title"
              name="dealTitle"
              placeholder="Deal Title"
              value={values.dealTitle}
              onBlur={handleBlur("dealTitle")}
              onChange={handleChange("dealTitle")}
            />
          </Box>

          <TextField
            error={!!touched.dealValue && !!errors.dealValue}
            helperText={(touched.dealValue && errors && errors.dealValue) || ""}
            label="Deal Value"
            name="dealValue"
            placeholder="Deal Value"
            value={values.dealValue}
            onBlur={handleBlur("dealValue")}
            onChange={handleChange("dealValue")}
          />

          <TextField
            isSelect
            error={!!touched.selectPipLine && !!errors.selectPipLine}
            helperText={
              (touched.selectPipLine && errors && errors.selectPipLine) || ""
            }
            label="Select Pipeline"
            menuItems={[{ id: 1, value: "pipline" }]}
            name="selectPipeline"
            value={values.selectPipLine}
            onBlur={handleBlur("selectPipLine")}
            onChange={handleChange("selectPipLine")}
            onSelectHandler={(event) => {
              if (event.target.value) {
                setFieldValue("selectPipLine", event.target.value);
              } else {
                setFieldValue("selectPipLine", "");
              }
            }}
          />

          <TextField
            isSelect
            error={!!touched.selectStorage && !!errors.selectStorage}
            helperText={
              (touched.selectStorage && errors && errors.selectStorage) || ""
            }
            label="Select Stage"
            menuItems={[
              { id: 1, value: "Stage" },
              { id: 2, value: "New Lead" },
              { id: 3, value: "Contact Lead" },
              { id: 4, value: "Needs Defined" },
              { id: 5, value: "Proposal Made" },
              { id: 6, value: "Negotiation Started" },
            ]}
            name="selectStage"
            value={values.selectStorage}
            onBlur={handleBlur("selectStorage")}
            onChange={handleChange("selectStorage")}
            onSelectHandler={(event) => {
              if (event.target.value) {
                setFieldValue("selectStorage", event.target.value);
              } else {
                setFieldValue("selectStorage", "");
              }
            }}
          />

          <TextField
            error={!!touched.estimateCloseDate && !!errors.estimateCloseDate}
            helperText={
              (touched.estimateCloseDate &&
                errors &&
                errors.estimateCloseDate) ||
              ""
            }
            label="Estimate Close Date"
            name="estimateCloseDate"
            type="date"
            value={values.estimateCloseDate}
            onBlur={handleBlur("estimateCloseDate")}
            onChange={handleChange("estimateCloseDate")}
            onSelectHandler={(event) => {
              if (event.target.value) {
                setFieldValue("selectStorage", event.target.value);
              } else {
                setFieldValue("selectStorage", "");
              }
            }}
          />
        </DialogContent>
      </PerfectScrollbar>
      <DialogActions
        sx={{
          padding: "1.2rem 0",
          justifyContent: "center",
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="center"
          spacing={2}
        >
          <Button
            startIcon={<AddCircleIcon />}
            style={{ padding: "0.5rem 1rem" }}
            variant="contained"
            onClick={() => handleSubmit()}
          >
            Save
          </Button>
          <Button
            autoFocus
            color="error"
            startIcon={<CloseIcon />}
            style={{ padding: "0.5rem 1rem" }}
            variant="contained"
            onClick={() => handleClose(name as keyof IToggleModel)}
          >
            Cancel
          </Button>
        </Stack>
      </DialogActions>
    </Slider>
  );
}

export default CreateDeal;
