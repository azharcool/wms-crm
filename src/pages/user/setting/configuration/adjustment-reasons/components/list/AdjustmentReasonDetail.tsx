import { Card } from "@mui/material";
import { Stack } from "@mui/system";
import CustomCardContent from "components/card/CustomCardContent";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";
import useAdjustmentAction from "hooks/setting/adjustment/useAdjustmentAction";
import useDecodedData from "hooks/useDecodedData";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";
import { IAddAdjustmentRequestRoot } from "types/setting/adjustment/addAdjustmentRequest";
import { GetByIdAdjustmentData } from "types/setting/adjustment/getByIdAdjustmentResponse";
import { operations } from "__mock__";
import useAddAdjustmentForm, {
  AddAdjustmentForm,
  adjustmentInitialValues,
} from "../../hooks/useAddAdjustment";

interface IAdjustments {
  open: boolean;
  handleClose: () => void;
  isEdit?: boolean;
  editData?: GetByIdAdjustmentData;
}

function AdjustmentReasonsDetail(props: IAdjustments) {
  const { open, handleClose, editData, isEdit } = props;

  const userDecoded = useDecodedData();
  const navigate = useNavigate();
  const { addAdjustmentAction, editAdjustmentAction } = useAdjustmentAction();

  const {
    values,
    handleBlur,
    handleChange,
    touched,
    setFieldValue,
    errors,
    handleSubmit,
    resetForm,
    isSubmitting,
  } = useAddAdjustmentForm({
    initialValues: adjustmentInitialValues,
    onSubmit,
  });

  // useEffect(() => {
  //   if (editData) {
  //     setFieldValue("name", editData.name);
  //     setFieldValue("operations", editData.operations);
  //   }
  // }, [editData]);

  async function onSubmit(values: AddAdjustmentForm) {
    const data: IAddAdjustmentRequestRoot = {
      userId: Number(userDecoded.id),
      name: values.name,
      operations: values.operations,
    };

    const response = await addAdjustmentAction(data);
    // if (editData) {
    //   data.id = editData.id;
    //   response = await editAdjustmentAction(data);
    // } else {
    //   response = await addAdjustmentAction(data);
    // }

    if (response) {
      resetForm();
      handleClose();
    }
  }
  return (
    <>
      <Slider
        buttonText="save"
        handleChange={() => {
          handleSubmit();
        }}
        handleClose={handleClose}
        isSubmitting={isSubmitting}
        open={open}
        size="sm"
        title="Create Adjustment"
      >
        <PerfectScrollbar>
          <Stack
            gap={2}
            sx={{
              marginTop: "10px",
              borderRadius: "5px",
            }}
          >
            <Card
              sx={{
                flex: 1,
              }}
            >
              <CustomCardContent title="GENERAL">
                <Stack direction="row" gap={2}>
                  <TextField
                    id="name"
                    label="Name"
                    name="name"
                    size="small"
                    value={values.name}
                    onBlur={handleBlur("name")}
                    onChange={handleChange("name")}
                  />

                  <TextField
                    isSelect
                    id="operations"
                    label="Operation"
                    menuItems={operations}
                    name="operations"
                    size="small"
                    value={values.operations}
                    onSelectHandler={(e) => {
                      setFieldValue("operations", e.target.value);
                    }}
                  />
                </Stack>
              </CustomCardContent>
            </Card>
            {/* <Card
          sx={{
            flex: 1,
          }}
        >
         
        </Card> */}
          </Stack>
        </PerfectScrollbar>
      </Slider>
    </>
  );
}

export default AdjustmentReasonsDetail;
