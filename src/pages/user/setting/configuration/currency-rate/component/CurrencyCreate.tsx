import { Typography, Card, Stack } from "@mui/material";
import { operations } from "__mock__";
import CustomCardContent from "components/card/CustomCardContent";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";
import { useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import currency from "__mock__/currency.json";
import { useFormik } from "formik";
import * as Yup from "yup";

interface ICurrency {
  open: boolean;
  handleClose: () => void;
}

function CurrencyCreate(props: ICurrency) {
  const { open, handleClose } = props;

  const formik = useFormik({
    initialValues: {
      currency: "",
      rate: "",
    },
    onSubmit: () => {
      alert("submit");
    },
    validationSchema: Yup.object().shape({
      currency: Yup.string().required("This field is required"),
      rate: Yup.string().required("This field is required"),
    }),
  });
  const { values, handleSubmit, errors, touched, handleChange, setFieldValue } =
    formik;
  return (
    <Slider
      buttonText="save"
      handleChange={() => {
        handleSubmit();
      }}
      handleClose={handleClose}
      open={open}
      size="sm"
      title="New Currency Rate"
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
            <CustomCardContent title="Currency Rate">
              <Stack direction="column" gap={2}>
                <TextField
                  error={!!touched.currency && !!errors.currency}
                  helperText={
                    (touched.currency && errors && errors.currency) || ""
                  }
                  isSelect
                  id="currency"
                  label="Currency"
                  menuItems={currency}
                  name="currency"
                  value={values.currency}
                  onSelectHandler={(e) => {
                    setFieldValue("currency", e.target.value);
                  }}
                  size="small"
                />
                <TextField
                  id="rate"
                  error={!!touched.rate && !!errors.rate}
                  type="number"
                  helperText={(touched.rate && errors && errors.rate) || ""}
                  startIcon={
                    <Typography sx={{ color: "#000" }}>1 USD =</Typography>
                  }
                  endIcon={
                    <Typography sx={{ color: "#000" }}>
                      {values.currency?.split("(")[1]?.split(")")[0]}
                    </Typography>
                  }
                  label="Rate"
                  value={values.rate}
                  name="rate"
                  onChange={handleChange("rate")}
                  size="small"
                />
              </Stack>
            </CustomCardContent>
          </Card>
        </Stack>
      </PerfectScrollbar>
    </Slider>
  );
}

export default CurrencyCreate;
