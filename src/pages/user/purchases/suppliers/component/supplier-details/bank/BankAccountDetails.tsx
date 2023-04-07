import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  PaletteMode,
  Stack,
  Typography,
} from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CustomCardContent from "components/card/CustomCardContent";
import CustomSwitch from "components/custom-switch";
import TextField from "components/textfield";
import { FormikHelpers } from "formik";
import useSupplierAction from "hooks/catalog/supplier/useSupplierAction";
import useGetByIdSupplier from "hooks/querys/catalog/supplier/useGetByIdSupplier";
import useDecodedData from "hooks/useDecodedData";
import AppRoutes from "navigation/appRoutes";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import palette from "theme/palette";
import useEditSupplierBankAccount, {
  EditSupplierBankAccount,
} from "../../../hooks/useEditSupplierBankAccount";

const initialValues: EditSupplierBankAccount = {
  id: 0,
  userId: 0,
  supplierId: 0,
  bankName: "",
  bankBranch: "",
  bankCode: "",
  bankSwift: "",
  accountHolder: "",
  accountNumber: "",
};
interface ITooblarButton {
  handleClick: () => void;
  title: string;
  icon: React.ReactNode;
}

interface IBankData {
  default: boolean | undefined;
  id: number;
  userId: number;
  supplierId: number;
  bankName: string;
  bankBranch: string;
  bankCode: string;
  bankSwift: string;
  accountHolder: string;
  accountNumber: string;
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

function BankAccountDetails() {
  const { supplierId } = useParams();
  const { data: supplierItemResponse } = useGetByIdSupplier({
    supplierId: Number(supplierId),
  });
  const userDecoded = useDecodedData();
  const newtheme = useSelector((state: any) => state.theme);
  const { addSupplierAction } = useSupplierAction();
  const [editable, setEditable] = useState(false);
  // const [newArray,]
  const nameRef = useRef<any>(null);
  const [bankData, setBankData] = useState<IBankData[]>([
    {
      id: 0,
      userId: Number(userDecoded.id),
      supplierId: Number(supplierId),
      bankName: "",
      bankBranch: "",
      bankCode: "",
      bankSwift: "",
      accountHolder: "",
      accountNumber: "",
      default: false,
    },
  ]);
  const navigate = useNavigate();
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });
  const { state } = useLocation();

  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      primary: {
        ...purple,
        ...(mode === "dark" && {
          main: "#1e1e2d",
        }),
      },
      ...(mode === "dark" && {
        background: {
          default: "#1e1e2d",
          paper: "#1B1B33",
        },
      }),
      text: {
        ...(mode === "light"
          ? {
              primary: grey[900],
              secondary: grey[800],
            }
          : {
              primary: "#fff",
              secondary: grey[500],
            }),
      },
    },
  });

  const supplierBankAccount = useEditSupplierBankAccount({
    onSubmit,
    initialValues,
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
  } = supplierBankAccount;

  async function onSubmit(
    values: EditSupplierBankAccount,
    helper: FormikHelpers<EditSupplierBankAccount>,
  ) {
    const data: EditSupplierBankAccount = {
      userId: Number(userDecoded.id),
      id: 0,
      supplierId: 0,
      bankName: values.bankName,
      bankBranch: values.bankBranch,
      bankCode: values.bankCode,
      bankSwift: values.bankSwift,
      accountHolder: values.accountHolder,
      accountNumber: values.accountNumber,
    };
    const response = await addSupplierAction(data);
    if (response) {
      // resetForm();
      navigate(
        `/${AppRoutes.purchases.layout}/${AppRoutes.purchases.supplier.listing}`,
      );
    }
  }
  const darkModeTheme = createTheme(getDesignTokens("dark"));

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
        navigate(-1);
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
    const newObj: IBankData = {
      id: id + 1,
      userId: Number(userDecoded.id),
      supplierId: Number(supplierId),
      bankName: "",
      bankBranch: "bankBranch",
      bankCode: "",
      bankSwift: "",
      accountHolder: "",
      accountNumber: "",
      default: false,
    };

    setBankData((previousObj) => [...previousObj, newObj]);
  };

  const handleDelete = (id: number) => {
    const newBankDataArr = bankData.filter((item: any) => item.id !== id);
    setBankData(newBankDataArr);
  };

  return (
    <ThemeProvider theme={newtheme.isDarkMode ? darkModeTheme : lightTheme}>
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
          {bankData.map(
            (item: IBankData, index: number, array: IBankData[]) => (
              <Grid key={item.id} item xs={6}>
                <Card
                  sx={{
                    flex: 1,
                  }}
                >
                  <CustomCardContent title="Bank account">
                    <TextField
                      // darkDisable
                      // disabled={istrue}
                      id="bankName"
                      label="Bank Name"
                      name="bankName"
                      nameRef={nameRef}
                      size="small"
                      value={item.bankName}
                      onChange={handleChange("bankName")}
                    />
                    <Stack direction="row" gap={2}>
                      <TextField
                        // darkDisable
                        // disabled={istrue}
                        id="bankBranch"
                        label="Bank branch"
                        name="bankBranch"
                        size="small"
                        value={item.bankBranch}
                        onChange={handleChange("bankBranch")}
                      />
                      <TextField
                        darkDisable
                        disabled={istrue}
                        id="bankCode"
                        label="Bank Code"
                        name="bankCode"
                        size="small"
                        value={item.bankCode}
                        onChange={handleChange("bankCode")}
                      />
                      <TextField
                        darkDisable
                        disabled={istrue}
                        id="bankSwift"
                        label="Bank Swift"
                        name="bankSwift"
                        size="small"
                        value={item.bankSwift}
                        onChange={handleChange("bankSwift")}
                      />
                    </Stack>

                    <Stack direction="row" gap={2}>
                      <TextField
                        darkDisable
                        disabled={istrue}
                        id="city"
                        label="Account Holder"
                        name="city"
                        size="small"
                        value={item.accountHolder}
                        onChange={handleChange("city")}
                      />

                      <TextField
                        darkDisable
                        disabled={istrue}
                        id="zipCode"
                        label="Account Number"
                        name="zipCode"
                        size="small"
                        value={item.accountNumber}
                        onChange={handleChange("zipCode")}
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
                          checked={item.default}
                          title="Default Address"
                        />
                      </Stack>
                    )}
                  </CustomCardContent>
                </Card>
              </Grid>
            ),
          )}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default BankAccountDetails;
