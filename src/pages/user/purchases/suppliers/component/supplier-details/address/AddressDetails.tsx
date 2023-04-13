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
import CustomSwitch from "components/custom-switch";
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
import useAddBillingAddressForm, {
  AddBillingAddressForm,
  addBillingAddressForm,
} from "../../../hooks/useBillingAddressForm";
import useManageShippingAddressForm, {
  ManageShippingAddressForm,
  manageShippingAddressForm,
} from "../../../hooks/useManageShippingAddressForm";

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

  const shippingAddressForm = useManageShippingAddressForm({
    onSubmit: onSubmitShippingAddress,
    initialValues: manageShippingAddressForm,
  });
  async function onSubmitShippingAddress(values: ManageShippingAddressForm) {
    const data: AddShippingAddressRoot = values.manageShippingAddressData.map(
      (item) => ({
        userId: Number(userDecoded.id),
        supplierId: Number(supplierId),
        firstName: item.firstName,
        lastName: item.lastName,
        address: item.address,
        city: item.city,
        zipCode: item.zipCode,
        country: Number(item.country),
        createdOn: "2023-04-12T06:31:22.085Z",
        updatedOn: "2023-04-12T06:31:22.085Z",
      }),
    );
    const response = await addShippingAddressAction(data);
    if (response) {
      shippingAddressForm.resetForm();
      // navigate(
      //   `/${AppRoutes.purchases.layout}/${AppRoutes.purchases.supplier.listing}`,
      // );
    }
  }

  const billingAddressForm = useAddBillingAddressForm({
    onSubmit: onSubmitBillingAddress,
    initialValues: addBillingAddressForm,
  });
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
      billingAddressForm.resetForm();
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

  const handleAddAnother = () => {
    shippingAddressForm.setFieldValue("manageShippingAddressData", [
      ...shippingAddressForm.values.manageShippingAddressData,
      {
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        zipCode: "",
        country: "",
      },
    ]);
  };

  const handleDelete = (index: number) => {
    shippingAddressForm.setFieldValue(
      "manageShippingAddressData",
      shippingAddressForm.values.manageShippingAddressData.filter(
        (_, i) => i !== index,
      ),
    );
  };

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
          {shippingAddressForm.values.manageShippingAddressData.length !== 0 ? (
            shippingAddressForm.values.manageShippingAddressData.map(
              (item, index: number, array) => {
                return (
                  <Card
                    sx={{
                      flex: 1,
                      marginBottom: "16px",
                    }}
                  >
                    <CustomCardContent title="Shipping Address">
                      <Stack direction="row" gap={2}>
                        <TextField
                          darkDisable
                          disabled={istrue}
                          id="firstName"
                          label="First Name"
                          name={`manageShippingAddressData[${index}].firstName`}
                          size="small"
                          value={
                            shippingAddressForm.values
                              .manageShippingAddressData[index].firstName
                          }
                          onChange={shippingAddressForm.handleChange}
                        />
                        <TextField
                          darkDisable
                          disabled={istrue}
                          id="lastName"
                          label="Last Name"
                          name={`manageShippingAddressData[${index}].lastName`}
                          size="small"
                          value={
                            shippingAddressForm.values
                              .manageShippingAddressData[index].lastName
                          }
                          onChange={shippingAddressForm.handleChange}
                        />
                      </Stack>

                      <TextField
                        darkDisable
                        multiline
                        disabled={istrue}
                        id="adress"
                        label="Address"
                        name={`manageShippingAddressData[${index}].address`}
                        value={
                          shippingAddressForm.values.manageShippingAddressData[
                            index
                          ].address
                        }
                        onChange={shippingAddressForm.handleChange}
                      />

                      <Stack direction="row" gap={2}>
                        <TextField
                          darkDisable
                          disabled={istrue}
                          id="city"
                          label="City"
                          name={`manageShippingAddressData[${index}].city`}
                          size="small"
                          value={
                            shippingAddressForm.values
                              .manageShippingAddressData[index].city
                          }
                          onChange={shippingAddressForm.handleChange}
                        />

                        <TextField
                          darkDisable
                          disabled={istrue}
                          id="zipCode"
                          label="Zip Code"
                          name={`manageShippingAddressData[${index}].zipCode`}
                          size="small"
                          value={
                            shippingAddressForm.values
                              .manageShippingAddressData[index].zipCode
                          }
                          onChange={shippingAddressForm.handleChange}
                        />
                      </Stack>
                      <Grid marginBottom={2} xs={12}>
                        <AutoComplete
                          getOptionLabel={(option: any) => option?.name}
                          handleChange={(e: any, value: any) =>
                            shippingAddressForm.setFieldValue(
                              `stock[${index}].country`,
                              value?.name,
                            )
                          }
                          label="Country"
                          options={Countries || []}
                        />
                      </Grid>
                      {!istrue && (
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          marginTop={2}
                        >
                          {array.length > 1 && (
                            <Box
                              sx={{
                                color: "#2e3456",
                                fontWeight: "500",
                                cursor: "pointer",
                              }}
                              onClick={() => handleDelete(index)}
                            >
                              DELETE
                            </Box>
                          )}

                          {index === array.length - 1 && (
                            <Box
                              sx={{
                                color: "#2e3456",
                                fontWeight: "500",
                                cursor: "pointer",
                              }}
                              onClick={() => handleAddAnother()}
                            >
                              ADD ANOTHER ADDRESS
                            </Box>
                          )}

                          <CustomSwitch
                            // checked={values.default}
                            title="Default Address"
                          />
                        </Stack>
                      )}
                    </CustomCardContent>
                  </Card>
                );
              },
            )
          ) : (
            <Typography>No data</Typography>
          )}
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
