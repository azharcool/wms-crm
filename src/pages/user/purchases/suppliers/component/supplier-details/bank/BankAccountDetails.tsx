import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { Box, Card, Container, Grid, Stack } from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";
import CustomSwitch from "components/custom-switch";
import CustomToolButton from "components/custom-tool-button/CustomToolButton";
import TextField from "components/textfield";
import useSupplierAction from "hooks/actions/catalog/supplier/useSupplierAction";
import useGetAllBankAccount from "hooks/querys/catalog/supplier/useGetAllBankAccount";
import useDecodedData from "hooks/useDecodedData";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AddBankAccountRoot } from "types/catalog/supplier/addBankAccountRequest";
import useManageBankAccountForm, {
  ManageBankAccountForm,
  manageBankAccountForm,
} from "../../../hooks/useManageBankAccountForm";

function BankAccountDetails() {
  const [editable, setEditable] = useState(false);
  const [isEditingBank, setIsEditingBank] = useState(false);

  const { supplierId } = useParams();
  const userDecoded = useDecodedData();
  const nameRef = useRef<any>(null);
  const navigate = useNavigate();

  const { addBankAccountAction } = useSupplierAction();
  const { data: bankItemResponse, refetch: refetchBilling } =
    useGetAllBankAccount({
      supplierId: Number(supplierId),
    });

  const bankAccountForm = useManageBankAccountForm({
    onSubmit,
    initialValues: manageBankAccountForm,
  });

  const {
    touched,
    errors,
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    resetForm,
  } = bankAccountForm;

  async function onSubmit(values: ManageBankAccountForm) {
    const data: AddBankAccountRoot = values.manageBankAccountData.map(
      (item) => ({
        userId: Number(userDecoded.id),
        supplierId: Number(supplierId),
        bankName: item.bankName,
        bankBranch: item.bankBranch,
        bankCode: item.bankCode,
        bankSwift: item.bankSwift,
        accountHolder: item.accountHolder,
        accountNumber: item.accountNumber,
      }),
    );
    const response = await addBankAccountAction(data);
    if (response) {
      resetForm();
    }
  }

  useEffect(() => {
    if (bankItemResponse?.data.length) {
      setFieldValue("manageBankAccountData", bankItemResponse.data);
      setIsEditingBank(true);
    }
  }, [bankItemResponse?.data]);

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
        handleSubmit();
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

  const handleAddAnother = (id: number) => {
    setFieldValue("manageBankAccountData", [
      ...values.manageBankAccountData,
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

  const handleDelete = (id: number) => {
    // const idExist = shippingItemResponse?.data.some((obj) => obj.id === id);
    // if (idExist) {
    //   deleteShippingAddressAsync(id);
    // } else {
    setFieldValue(
      "manageBankAccountData",
      values.manageBankAccountData.filter((s, i) => s.id !== id),
    );
    // }
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
        {values.manageBankAccountData.map((item, index: number, array) => {
          return (
            <Grid key={item.id} item xs={6}>
              <Card
                sx={{
                  flex: 1,
                }}
              >
                <CustomCardContent title="Bank account">
                  <TextField
                    darkDisable
                    disabled={istrue}
                    id="bankName"
                    label="Bank Name"
                    name={`manageBankAccountData[${index}].bankName`}
                    nameRef={nameRef}
                    size="small"
                    value={values.manageBankAccountData[index].bankName}
                    onChange={handleChange}
                  />
                  <Stack direction="row" gap={2}>
                    <TextField
                      darkDisable
                      disabled={istrue}
                      id="bankBranch"
                      label="Bank branch"
                      name={`manageBankAccountData[${index}].bankBranch`}
                      size="small"
                      value={values.manageBankAccountData[index].bankBranch}
                      onChange={handleChange}
                    />
                    <TextField
                      darkDisable
                      disabled={istrue}
                      id="bankCode"
                      label="Bank Code"
                      name={`manageBankAccountData[${index}].bankCode`}
                      size="small"
                      value={values.manageBankAccountData[index].bankCode}
                      onChange={handleChange}
                    />
                    <TextField
                      darkDisable
                      disabled={istrue}
                      id="bankSwift"
                      label="Bank Swift"
                      name={`manageBankAccountData[${index}].bankSwift`}
                      size="small"
                      value={values.manageBankAccountData[index].bankSwift}
                      onChange={handleChange}
                    />
                  </Stack>

                  <Stack direction="row" gap={2}>
                    <TextField
                      darkDisable
                      disabled={istrue}
                      id="accountHolder"
                      label="Account Holder"
                      name={`manageBankAccountData[${index}].accountHolder`}
                      size="small"
                      value={values.manageBankAccountData[index].accountHolder}
                      onChange={handleChange}
                    />

                    <TextField
                      darkDisable
                      disabled={istrue}
                      id="accountNumber"
                      label="Account Number"
                      name={`manageBankAccountData[${index}].accountNumber`}
                      size="small"
                      value={values.manageBankAccountData[index].accountNumber}
                      onChange={handleChange}
                    />
                  </Stack>

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
                          onClick={() => handleDelete(item.id)}
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
                          onClick={() => handleAddAnother(item.id)}
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
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default BankAccountDetails;
