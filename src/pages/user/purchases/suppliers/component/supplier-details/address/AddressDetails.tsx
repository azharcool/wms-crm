import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { Box, Card, Container, Grid, Stack } from "@mui/material";
import Countries from "__mock__/countries.json";
import CustomCardContent from "components/card/CustomCardContent";
import CustomSwitch from "components/custom-switch";
import CustomToolButton from "components/custom-tool-button/CustomToolButton";
import TextField from "components/textfield";
import AutoComplete from "components/textfield/AutoComplete";
import useSupplierAction from "hooks/actions/catalog/supplier/useSupplierAction";
import useGetAllBillingAddress from "hooks/querys/catalog/supplier/useGetAllBillingAddress";
import useGetAllShippingAddress from "hooks/querys/catalog/supplier/useGetAllShippingAddress";
import useDecodedData from "hooks/useDecodedData";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AddBillingAddressRoot } from "types/catalog/supplier/addBillingAddressRequest";
import { AddShippingAddressRoot } from "types/catalog/supplier/addShippingAddressRequest";
import useManageBillingAddressForm, {
  ManageBillingAddressForm,
  manageBillingAddressForm,
} from "../../../hooks/useManageBillingAddressForm";
import useManageShippingAddressForm, {
  ManageShippingAddressForm,
  manageShippingAddressForm,
} from "../../../hooks/useManageShippingAddressForm";

function AddressDetails() {
  const [editable, setEditable] = useState(false);

  const { supplierId } = useParams();
  const navigate = useNavigate();
  const userDecoded = useDecodedData();
  const nameRef = useRef<any>(null);

  const { addShippingAddressAction, addBillingAddressAction } =
    useSupplierAction();
  const { data: billingItemResponse } = useGetAllBillingAddress({
    supplierId: Number(supplierId),
  });
  const { data: shippingItemResponse } = useGetAllShippingAddress({
    supplierId: Number(supplierId),
  });

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
    }
  }

  const billingAddressForm = useManageBillingAddressForm({
    onSubmit: onSubmitBillingAddress,
    initialValues: manageBillingAddressForm,
  });
  async function onSubmitBillingAddress(values: ManageBillingAddressForm) {
    const data: AddBillingAddressRoot = values.manageBillingAddressData.map(
      (item) => ({
        userId: Number(userDecoded.id),
        supplierId: Number(supplierId),
        firstName: item.firstName,
        lastName: item.lastName,
        address: item.address,
        city: item.city,
        zipCode: item.zipCode,
        country: Number(item.country),
      }),
    );
    const response = await addBillingAddressAction(data);
    if (response) {
      billingAddressForm.resetForm();
    }
  }

  useEffect(() => {
    shippingAddressForm.setFieldValue(
      "manageShippingAddressData",
      shippingItemResponse?.data || [
        {
          firstName: "",
          lastName: "",
          address: "",
          city: "",
          zipCode: "",
          country: "",
        },
      ],
    );
    billingAddressForm.setFieldValue(
      "manageBillingAddressData",
      billingItemResponse?.data || [
        {
          firstName: "",
          lastName: "",
          address: "",
          city: "",
          zipCode: "",
          country: "",
        },
      ],
    );
  }, [
    billingAddressForm,
    billingItemResponse?.data,
    shippingAddressForm,
    shippingItemResponse?.data,
  ]);

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

  const handleAddAnotherShipping = () => {
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

  const handleDeleteShipping = (index: number) => {
    shippingAddressForm.setFieldValue(
      "manageShippingAddressData",
      shippingAddressForm.values.manageShippingAddressData.filter(
        (_, i) => i !== index,
      ),
    );
  };

  const handleAddAnotherBilling = () => {
    billingAddressForm.setFieldValue("manageBillingAddressData", [
      ...billingAddressForm.values.manageBillingAddressData,
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

  const handleDeleteBilling = (index: number) => {
    billingAddressForm.setFieldValue(
      "manageBillingAddressData",
      billingAddressForm.values.manageBillingAddressData.filter(
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
                <CustomToolButton
                  key={item.id}
                  handleClick={item.onClick}
                  icon={item.icon}
                  title={item.title}
                />
              ))
          : rightActionsData
              .filter((i) => i.title === "Edit")
              .map((item) => (
                <CustomToolButton
                  key={item.id}
                  handleClick={item.onClick}
                  icon={item.icon}
                  title={item.title}
                />
              ))}
      </Stack>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          {shippingAddressForm.values.manageShippingAddressData.map(
            (item, index: number, array) => {
              return (
                <Card
                  key={item.firstName}
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
                          shippingAddressForm.values.manageShippingAddressData[
                            index
                          ].firstName
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
                          shippingAddressForm.values.manageShippingAddressData[
                            index
                          ].lastName
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
                          shippingAddressForm.values.manageShippingAddressData[
                            index
                          ].city
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
                          shippingAddressForm.values.manageShippingAddressData[
                            index
                          ].zipCode
                        }
                        onChange={shippingAddressForm.handleChange}
                      />
                    </Stack>
                    <Grid marginBottom={2} xs={12}>
                      <AutoComplete
                        getOptionLabel={(option: any) => option?.name}
                        handleChange={(e: any, value: any) =>
                          shippingAddressForm.setFieldValue(
                            `manageShippingAddressData[${index}].country`,
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
                            onClick={() => handleDeleteShipping(index)}
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
                            onClick={() => handleAddAnotherShipping()}
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
          )}
        </Grid>
        <Grid item xs={6}>
          {billingAddressForm.values.manageBillingAddressData.map(
            (item, index: number, array) => {
              return (
                <Card
                  key={item.firstName}
                  sx={{
                    flex: 1,
                    marginBottom: "16px",
                  }}
                >
                  <CustomCardContent title="Billing address">
                    <Stack direction="row" gap={2}>
                      <TextField
                        darkDisable
                        disabled={istrue}
                        id="firstName"
                        label="First Name"
                        name={`manageBillingAddressData[${index}].firstName`}
                        size="small"
                        value={
                          billingAddressForm.values.manageBillingAddressData[
                            index
                          ].firstName
                        }
                        onChange={billingAddressForm.handleChange}
                      />
                      <TextField
                        darkDisable
                        disabled={istrue}
                        id="lastName"
                        label="Last Name"
                        name={`manageBillingAddressData[${index}].lastName`}
                        size="small"
                        value={
                          billingAddressForm.values.manageBillingAddressData[
                            index
                          ].lastName
                        }
                        onChange={billingAddressForm.handleChange}
                      />
                    </Stack>

                    <TextField
                      darkDisable
                      multiline
                      disabled={istrue}
                      id="adress"
                      label="Address"
                      name={`manageBillingAddressData[${index}].address`}
                      value={
                        billingAddressForm.values.manageBillingAddressData[
                          index
                        ].address
                      }
                      onChange={billingAddressForm.handleChange}
                    />

                    <Stack direction="row" gap={2}>
                      <TextField
                        darkDisable
                        disabled={istrue}
                        id="city"
                        label="City"
                        name={`manageBillingAddressData[${index}].city`}
                        size="small"
                        value={
                          billingAddressForm.values.manageBillingAddressData[
                            index
                          ].city
                        }
                        onChange={billingAddressForm.handleChange}
                      />

                      <TextField
                        darkDisable
                        disabled={istrue}
                        id="zipCode"
                        label="Zip Code"
                        name={`manageBillingAddressData[${index}].zipCode`}
                        size="small"
                        value={
                          billingAddressForm.values.manageBillingAddressData[
                            index
                          ].zipCode
                        }
                        onChange={billingAddressForm.handleChange}
                      />
                    </Stack>
                    <Grid marginBottom={2} xs={12}>
                      <AutoComplete
                        getOptionLabel={(option: any) => option?.name}
                        handleChange={(e: any, value: any) =>
                          billingAddressForm.setFieldValue(
                            `manageBillingAddressData[${index}].country`,
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
                            onClick={() => handleDeleteBilling(index)}
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
                            onClick={() => handleAddAnotherBilling()}
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
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default AddressDetails;
