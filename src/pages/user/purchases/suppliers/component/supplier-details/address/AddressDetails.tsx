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
import { EditBillingRoot } from "types/catalog/supplier/editBillingAddressRequest";

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
  const [isEditingShipping, setIsEditingShipping] = useState(false);
  const [isEditingBilling, setIsEditingBilling] = useState(false);

  const { supplierId } = useParams();
  const navigate = useNavigate();
  const userDecoded = useDecodedData();
  const nameRef = useRef<any>(null);

  const {
    addShippingAddressAction,
    editShippingAddressAction,
    addBillingAddressAction,
    editBillingAddressAction,
    deleteShippingAddressAsync,
    deleteBillingAddressAsync,
  } = useSupplierAction();
  const { data: billingItemResponse, refetch: refetchBilling } =
    useGetAllBillingAddress({
      supplierId: Number(supplierId),
    });
  const { data: shippingItemResponse, refetch: refetchShipping } =
    useGetAllShippingAddress({
      supplierId: Number(supplierId),
    });

  const shippingAddressForm = useManageShippingAddressForm({
    onSubmit: onSubmitShippingAddress,
    initialValues: manageShippingAddressForm,
  });
  async function onSubmitShippingAddress(values: ManageShippingAddressForm) {
    if (shippingItemResponse?.data.length) {
      const data: AddShippingAddressRoot = values.manageShippingAddressData.map(
        (item) => ({
          id: item.id,
          userId: Number(userDecoded.id),
          supplierId: Number(supplierId),
          firstName: item.firstName,
          lastName: item.lastName,
          address: item.address,
          city: item.city,
          zipCode: item.zipCode,
          country: item.country,
          createdOn: "2023-04-12T06:31:22.085Z",
          updatedOn: "2023-04-12T06:31:22.085Z",
        }),
      );
      const response = await editShippingAddressAction(data);
      if (response) {
        setEditable(false);
        refetchShipping();
      }
    } else {
      const data: AddShippingAddressRoot = values.manageShippingAddressData.map(
        (item) => ({
          userId: Number(userDecoded.id),
          supplierId: Number(supplierId),
          firstName: item.firstName,
          lastName: item.lastName,
          address: item.address,
          city: item.city,
          zipCode: item.zipCode,
          country: item.country,
          createdOn: "2023-04-12T06:31:22.085Z",
          updatedOn: "2023-04-12T06:31:22.085Z",
        }),
      );
      const response = await addShippingAddressAction(data);
      if (response) {
        shippingAddressForm.resetForm();
      }
    }
  }

  const billingAddressForm = useManageBillingAddressForm({
    onSubmit: onSubmitBillingAddress,
    initialValues: manageBillingAddressForm,
  });
  async function onSubmitBillingAddress(values: ManageBillingAddressForm) {
    if (billingItemResponse?.data.length) {
      const data: EditBillingRoot = {
        editBilling: values.manageBillingAddressData.map((item) => ({
          id: Number(item.id),
          userId: Number(userDecoded.id),
          supplierId: Number(supplierId),
          firstName: item.firstName,
          lastName: item.lastName,
          address: item.address,
          city: item.city,
          zipCode: item.zipCode,
          country: item.country,
        })),
      };
      const response = await editBillingAddressAction(data);
      if (response) {
        setEditable(false);
        refetchBilling();
      }
    } else {
      const data: AddBillingAddressRoot = values.manageBillingAddressData.map(
        (item) => ({
          userId: Number(userDecoded.id),
          supplierId: Number(supplierId),
          firstName: item.firstName,
          lastName: item.lastName,
          address: item.address,
          city: item.city,
          zipCode: item.zipCode,
          country: item.country,
        }),
      );
      const response = await addBillingAddressAction(data);
      if (response) {
        billingAddressForm.resetForm();
      }
    }
  }

  useEffect(() => {
    if (shippingItemResponse?.data.length) {
      shippingAddressForm.setFieldValue(
        "manageShippingAddressData",
        shippingItemResponse?.data,
      );
      setIsEditingShipping(true);
    }
  }, [shippingItemResponse?.data]);

  useEffect(() => {
    if (billingItemResponse?.data.length) {
      billingAddressForm.setFieldValue(
        "manageBillingAddressData",
        billingItemResponse?.data,
      );
      setIsEditingBilling(true);
    }
  }, [billingItemResponse?.data]);

  const handleSave = () => {
    const shipBill =
      shippingAddressForm.values.manageShippingAddressData[0].firstName ===
        "" &&
      shippingAddressForm.values.manageShippingAddressData[0].lastName === "" &&
      shippingAddressForm.values.manageShippingAddressData[0].address === "" &&
      shippingAddressForm.values.manageShippingAddressData[0].city === "" &&
      shippingAddressForm.values.manageShippingAddressData[0].zipCode === "" &&
      billingAddressForm.values.manageBillingAddressData[0].firstName === "" &&
      billingAddressForm.values.manageBillingAddressData[0].lastName === "" &&
      billingAddressForm.values.manageBillingAddressData[0].address === "" &&
      billingAddressForm.values.manageBillingAddressData[0].city === "" &&
      billingAddressForm.values.manageBillingAddressData[0].zipCode === "";
    if (isEditingShipping && isEditingBilling) {
      // call edit functionality for both shipping and billing
      shippingAddressForm.handleSubmit();
      billingAddressForm.handleSubmit();
    } else if (isEditingShipping) {
      // call edit shipping functionality only
      shippingAddressForm.handleSubmit();
    } else if (isEditingBilling) {
      // call edit billing functionality only
      billingAddressForm.handleSubmit();
    } else if (!shipBill) {
      // handle case where neither shipping nor billing is being edited
      shippingAddressForm.handleSubmit();
      billingAddressForm.handleSubmit();
    }
  };

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
        handleSave();
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
        // id: ,
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        zipCode: "",
        country: "",
      },
    ]);
  };

  const handleDeleteShipping = (id: number) => {
    const idExist = shippingItemResponse?.data.some((obj) => obj.id === id);
    if (idExist) {
      deleteShippingAddressAsync(id);
    } else {
      shippingAddressForm.setFieldValue(
        "manageShippingAddressData",
        shippingAddressForm.values.manageShippingAddressData.filter(
          (s, i) => s.id !== id,
        ),
      );
    }
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

  const handleDeleteBilling = (id: number) => {
    const idExist = billingItemResponse?.data.some((obj) => obj.id === id);
    if (idExist) {
      deleteBillingAddressAsync(id);
    } else {
      billingAddressForm.setFieldValue(
        "manageBillingAddressData",
        billingAddressForm.values.manageBillingAddressData.filter(
          (s, i) => s.id !== id,
        ),
      );
    }
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
                  key={item.id}
                  sx={{
                    flex: 1,
                    marginBottom: "16px",
                  }}
                >
                  <CustomCardContent title="Shipping Address">
                    <Stack direction="row" gap={2}>
                      <TextField
                        // error={
                        //   !!shippingAddressForm.touched
                        //     ?.manageShippingAddressData?.[index].firstName &&
                        //   !!shippingAddressForm.errors?.manageShippingAddressData?.[index].firstName
                        // }
                        //  helperText={
                        //   (touched.warehouseName &&
                        //     errors &&
                        //     errors.warehouseName) ||
                        //   ""
                        // }
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
                        defaultValue={{
                          value:
                            shippingAddressForm.values
                              .manageShippingAddressData[index].country,
                        }}
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
                            onClick={() => handleDeleteShipping(item.id)}
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
                  key={item.id}
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
                        defaultValue={{
                          value:
                            billingAddressForm.values.manageBillingAddressData[
                              index
                            ].country,
                        }}
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
                            onClick={() => handleDeleteBilling(item.id)}
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
