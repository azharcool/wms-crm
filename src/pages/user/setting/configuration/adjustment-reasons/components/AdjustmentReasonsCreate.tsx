import { Box, Button, Card, Stack } from "@mui/material";
import { operations } from "__mock__";
import CustomCardContent from "components/card/CustomCardContent";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";
import useGetByIdAdjustmentReason from "hooks/querys/setting/adjustmentReason/useGetByIdAdjustmentReason";
import useAdjustmentReasonAction from "hooks/setting/adjustment-reason/useAdjustmentReasonAction";
import useDecodedData from "hooks/useDecodedData";
import { useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

import { IAddAdjustmentRequestRoot } from "types/setting/adjustment/addAdjustmentRequest";
import { GetByIdAdjustmentData } from "types/setting/adjustment/getByIdAdjustmentResponse";
import useAddAdjustmentForm, {
  AddAdjustmentForm,
  adjustmentInitialValues,
} from "../hooks/useAddAdjustment";

interface IAdjustments {
  open: boolean;
  handleClose: () => void;
  view?: boolean;
  adjustmentId?: number;
  editData?: GetByIdAdjustmentData;
}

function AdjustmentReasonsCreate(props: IAdjustments) {
  const { open, handleClose, view, adjustmentId } = props;
  const [editable, setEditable] = useState(false);
  const userDecoded = useDecodedData();

  const { addAdjustmentReasonAction, editAdjustmentReasonAction } =
    useAdjustmentReasonAction();

  const { data: adjustmentItemResponse } = useGetByIdAdjustmentReason({
    adjustmentId,
  });

  const manageFormik = useAddAdjustmentForm({
    initialValues: adjustmentInitialValues,
    onSubmit,
  });

  const {
    values,
    handleBlur,
    handleChange,
    setFieldValue,
    handleSubmit,
    resetForm,
    isSubmitting,
  } = manageFormik;

  useEffect(() => {
    if (adjustmentItemResponse) {
      const AdjustmentItem = adjustmentItemResponse.data;
      setFieldValue("name", AdjustmentItem.name);
      setFieldValue("operations", AdjustmentItem.operations);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adjustmentItemResponse]);

  async function onSubmit(values: AddAdjustmentForm) {
    let response = false;
    const data: IAddAdjustmentRequestRoot = {
      userId: Number(userDecoded.id),
      name: values.name,
      operations: values.operations,
    };
    if (editable) {
      data.id = adjustmentId;
      response = await editAdjustmentReasonAction(data);
    } else {
      response = await addAdjustmentReasonAction(data);
    }

    if (response) {
      resetForm();
      handleClose();
    }
  }
  const handleClick = () => {
    if (editable) {
      if (adjustmentItemResponse) {
        const AdjustmentItem = adjustmentItemResponse.data;
        setFieldValue("name", AdjustmentItem.name);
        setFieldValue("operations", AdjustmentItem.operations);
        setEditable(false);
      }
    } else {
      setEditable(true);
    }
  };

  const isDisabled = Boolean(editable ? false : view);

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
        title="New Adjustment"
      >
        <PerfectScrollbar>
          <Stack
            gap={2}
            sx={{
              marginTop: "10px",
              borderRadius: "5px",
            }}
          >
            {view ? (
              <Box>
                <Button
                  color="error"
                  size="small"
                  style={{ padding: "0.5rem 1rem", backgroundColor: "#8B0000" }}
                  sx={{
                    boxShadow: "none",
                    display: "inline-block",
                    "&:hover": {
                      backgroundColor: "#8B0000",
                      opacity: 0.6,
                      boxShadow: "none",
                    },
                  }}
                  variant="contained"
                  onClick={handleClick}
                >
                  {editable ? "Clear" : "Edit"}
                </Button>
              </Box>
            ) : null}

            <Card
              sx={{
                flex: 1,
              }}
            >
              <CustomCardContent title="GENERAL">
                <Stack direction="row" gap={2}>
                  <TextField
                    disabled={isDisabled}
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
                    disabled={isDisabled}
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
          </Stack>
        </PerfectScrollbar>
      </Slider>
    </>
  );
}

export default AdjustmentReasonsCreate;
