import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";
import TextField from "components/textfield";
import AutoComplete from "components/textfield/AutoComplete";
import useSupplierAction from "hooks/catalog/supplier/useSupplierAction";
import useDecodedData from "hooks/useDecodedData";
import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import palette from "theme/palette";
import { AddBillingAddressRoot } from "types/catalog/supplier/addBillingAddressRequest";
import { AddShippingAddressRoot } from "types/catalog/supplier/addShippingAddressRequest";
import Countries from "__mock__/countries.json";
import useAddShippingAddressForm, {
  AddShippingAddressForm,
  addShippingAddressForm,
} from "../../../hooks/useAddShippingAddressForm";
import useAddBillingAddressForm, {
  AddBillingAddressForm,
  addBillingAddressForm,
} from "../../../hooks/useBillingAddressForm";

interface ITooblarButton {
  handleClick: () => void;
  title: string;
  icon: React.ReactNode;
}

function ToolBarButton(props: ITooblarButton) {
  const { handleClick, title, icon } = props;

  return (
    <Box sx={{ m: 1, display: "flex", gap: 5, alignItems: "center" }}>
      <Button
        sx={{
          width: "inherit",
          borderRadius: "5px",
          padding: "5px 25px",
          backgroundColor: palette.warning.dark,
          color: "#fff",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: palette.warning.dark,
            opacity: 0.6,
            boxShadow: "none",
          },
        }}
        variant="contained"
        onClick={() => {
          handleClick?.();
        }}
      >
        {icon}
        <Typography
          component="span"
          sx={{ fontSize: { xs: "1rem", xl: "1.1rem" } }}
        >
          {title}
        </Typography>
      </Button>
    </Box>
  );
}

function AddressDetails() {
  const { supplierId } = useParams();
  const { addShippingAddressAction, addBillingAddressAction } =
    useSupplierAction();
  const [editable, setEditable] = useState(false);
  const nameRef = useRef<any>(null);
  const navigate = useNavigate();
  const userDecoded = useDecodedData();

  const shippingAddressForm = useAddShippingAddressForm({
    onSubmit: onSubmitShippingAddress,
    initialValues: addShippingAddressForm,
  });

  const billingAddressForm = useAddBillingAddressForm({
    onSubmit: onSubmitBillingAddress,
    initialValues: addBillingAddressForm,
  });

  const { values, handleChange, setFieldValue, resetForm } =
    shippingAddressForm;

  async function onSubmitShippingAddress(values: AddShippingAddressForm) {
    const data: AddShippingAddressRoot = [
      {
        userId: Number(userDecoded.id),
        supplierId: Number(supplierId),
        firstName: values.firstName,
        lastName: values.lastName,
        address: values.address,
        city: values.city,
        zipCode: values.zipCode,
        country: Number(values.country),
        createdOn: "2023-04-12T06:31:22.085Z",
        updatedOn: "2023-04-12T06:31:22.085Z",
      },
    ];
    const response = await addShippingAddressAction(data);
    if (response) {
      // resetForm();
      // navigate(
      //   `/${AppRoutes.purchases.layout}/${AppRoutes.purchases.supplier.listing}`,
      // );
    }
  }

  async function onSubmitBillingAddress(values: AddBillingAddressForm) {
    const data: AddBillingAddressRoot = [
      {
        userId: Number(userDecoded.id),
        supplierId: Number(supplierId),
        firstName: values.billingFirstName,
        lastName: values.billingLastName,
        address: values.billingAddress,
        city: values.billingCity,
        zipCode: values.billingZipCode,
        country: Number(values.billingCountry),
      },
    ];
    const response = await addBillingAddressAction(data);
    if (response) {
      // resetForm();
      // navigate(
      //   `/${AppRoutes.purchases.layout}/${AppRoutes.purchases.supplier.listing}`,
      // );
    }
  }

  const rightActionsData = [
    {
      id: crypto.randomUUID(),
      title: "Cancel",
      onClick: () => {
        setEditable(false);
      },
      icon: (
        <ArrowBackIosIcon
          sx={{
            fontSize: 18,
            mr: 1,
          }}
        />
      ),
    },
    {
      id: crypto.randomUUID(),
      title: "Edit",
      onClick: () => {
        setEditable(true);
        setTimeout(() => {
          nameRef.current?.focus();
        }, 500);
      },
      icon: (
        <EditIcon
          sx={{
            fontSize: 18,
            mr: 1,
          }}
        />
      ),
    },
    {
      id: crypto.randomUUID(),
      title: "Save",
      onClick: () => {
        shippingAddressForm.handleSubmit();
        billingAddressForm.handleSubmit();
        // navigate(-1);
      },
      icon: (
        <SaveIcon
          sx={{
            fontSize: 18,
            mr: 1,
          }}
        />
      ),
    },
  ];

  const istrue = !editable;

  return (
    <Container maxWidth={false}>
      <Stack direction="row" justifyContent="flex-end">
        {editable
          ? rightActionsData
              .filter((i) => i.title !== "Edit")
              .map((item) => (
                <ToolBarButton
                  key={item.id}
                  handleClick={item.onClick}
                  icon={item.icon}
                  title={item.title}
                />
              ))
          : rightActionsData
              .filter((i) => i.title === "Edit")
              .map((item) => (
                <ToolBarButton
                  key={item.id}
                  handleClick={item.onClick}
                  icon={item.icon}
                  title={item.title}
                />
              ))}
      </Stack>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card
            sx={{
              flex: 1,
            }}
          >
            <CustomCardContent title="Shipping Address">
              <Stack direction="row" gap={2}>
                <TextField
                  darkDisable
                  disabled={istrue}
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  size="small"
                  value={values.firstName}
                  onChange={handleChange("firstName")}
                />
                <TextField
                  darkDisable
                  disabled={istrue}
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  size="small"
                  value={values.lastName}
                  onChange={handleChange("lastName")}
                />
              </Stack>

              <TextField
                darkDisable
                multiline
                disabled={istrue}
                id="adress"
                label="Address"
                name="address"
                value={values.address}
                onChange={handleChange("address")}
              />

              <Stack direction="row" gap={2}>
                <TextField
                  darkDisable
                  disabled={istrue}
                  id="city"
                  label="City"
                  name="city"
                  size="small"
                  value={values.city}
                  onChange={handleChange("city")}
                />

                <TextField
                  darkDisable
                  disabled={istrue}
                  id="zipCode"
                  label="Zip Code"
                  name="zipCode"
                  size="small"
                  value={values.zipCode}
                  onChange={handleChange("zipCode")}
                />
              </Stack>
              <Grid marginBottom={2} xs={12}>
                <AutoComplete
                  getOptionLabel={(option: any) => option?.name}
                  handleChange={(e: any, value: any) =>
                    setFieldValue("country", value?.name)
                  }
                  label="Country"
                  options={Countries || []}
                />
              </Grid>
            </CustomCardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ flex: 1 }}>
            <CustomCardContent title="Billing address">
              <Stack direction="row" gap={2}>
                <TextField
                  darkDisable
                  disabled={istrue}
                  id="billingFirstName"
                  label="First Name"
                  name="billingFirstName"
                  size="small"
                  value={billingAddressForm.values.billingFirstName}
                  onChange={billingAddressForm.handleChange("billingFirstName")}
                />
                <TextField
                  darkDisable
                  disabled={istrue}
                  id="billingLastName"
                  label="Last Name"
                  name="billingLastName"
                  size="small"
                  value={billingAddressForm.values.billingLastName}
                  onChange={billingAddressForm.handleChange("billingLastName")}
                />
              </Stack>

              <TextField
                darkDisable
                multiline
                disabled={istrue}
                id="billingAddress"
                label="Address"
                name="billingAddress"
                value={billingAddressForm.values.billingAddress}
                onChange={billingAddressForm.handleChange("billingAddress")}
              />

              <Stack direction="row" gap={2}>
                <TextField
                  darkDisable
                  disabled={istrue}
                  id="billingCity"
                  label="City"
                  name="billingCity"
                  size="small"
                  value={billingAddressForm.values.billingCity}
                  onChange={billingAddressForm.handleChange("billingCity")}
                />

                <TextField
                  darkDisable
                  disabled={istrue}
                  id="billingZipCode"
                  label="Zip Code"
                  name="billingZipCode"
                  size="small"
                  value={billingAddressForm.values.billingZipCode}
                  onChange={billingAddressForm.handleChange("billingZipCode")}
                />
              </Stack>
              <Grid marginBottom={2} xs={12}>
                <AutoComplete
                  getOptionLabel={(option: any) => option?.name}
                  handleChange={(e: any, value: any) =>
                    billingAddressForm.setFieldValue(
                      "billingCountry",
                      value?.name,
                    )
                  }
                  label="Country"
                  options={Countries || []}
                />
              </Grid>
            </CustomCardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AddressDetails;
