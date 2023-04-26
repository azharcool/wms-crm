import { Card, Stack, Typography } from "@mui/material";
import currency from "__mock__/currency.json";
import CustomCardContent from "components/card/CustomCardContent";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";
import { useFormik } from "formik";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
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
                  isSelect
                  error={!!touched.currency && !!errors.currency}
                  helperText={
                    (touched.currency && errors && errors.currency) || ""
                  }
                  id="currency"
                  label="Currency"
                  menuItems={currency}
                  name="currency"
                  size="small"
                  sxMenuListProps={{
                    backdropFilter: "blur(20px)",
                  }}
                  value={values.currency}
                  onSelectHandler={(e) => {
                    setFieldValue("currency", e.target.value);
                  }}
                />
                <TextField
                  endIcon={
                    <Typography sx={{ color: "#000" }}>
                      {values.currency?.split("(")[1]?.split(")")[0]}
                    </Typography>
                  }
                  error={!!touched.rate && !!errors.rate}
                  helperText={(touched.rate && errors && errors.rate) || ""}
                  id="rate"
                  label="Rate"
                  name="rate"
                  size="small"
                  startIcon={
                    <Typography sx={{ color: "#000" }}>1 USD =</Typography>
                  }
                  type="number"
                  value={values.rate}
                  onChange={handleChange("rate")}
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
