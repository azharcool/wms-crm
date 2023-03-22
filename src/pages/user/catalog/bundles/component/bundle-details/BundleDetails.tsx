import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Container,
  PaletteMode,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TableToolbar from "components/table-toolbar";
import { FormikHelpers } from "formik";
import useBundleCompositionAction from "hooks/catalog/bundlle-composition/useBundleCompositionAction";
import useGetByIdBundle from "hooks/querys/catalog/bundle/useGetByIdBundle";
import useGetAllVariant from "hooks/querys/catalog/variants/useGetAllVariant";
import useDecodedData from "hooks/useDecodedData";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { IAddCompositionbundleRootRequest } from "types/catalog/bundleCompo/addBundleCompoRequest";
import { IGetAllVariantResponseData } from "types/catalog/variants/getAllVariantResponse";
import Composition from "./Composition";
import General from "./General";
import useAddBundleCompositionForm, {
  AddBundleCompForm,
} from "./hooks/useAddBundleComposition";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      aria-labelledby={`simple-tab-${index}`}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      role="tabpanel"
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function BundleDetails() {
  const navigate = useNavigate();
  const nameRef = useRef<any>(null);
  const newtheme = useSelector((state: any) => state.theme);
  const [value, setValue] = useState(0);
  const [editable, setEditable] = useState(false);

  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
  const darkModeTheme = createTheme(getDesignTokens("dark"));

  const { bundleId } = useParams();
  const {
    data: bundle,
    refetch,
    isLoading,
    isFetching: isFetchingBundle,
  } = useGetByIdBundle(Number(bundleId));

  const userDecoded = useDecodedData();
  const { addBundleCompositionAction } = useBundleCompositionAction();
  const { data: variantResponse } = useGetAllVariant({});
  const variantData: IGetAllVariantResponseData[] | undefined =
    variantResponse?.data;
  const initialValues: AddBundleCompForm = {
    userId: Number(userDecoded.id),
    bundleId: Number(bundleId),
    productId: 1,
    productVariantId: 1,
    unitPrice: 1,
    conditionCode: "",
    discount: 10,
    qty: 10,
    total: 10,
  };
  const bundleForm = useAddBundleCompositionForm({
    onSubmit,
    initialValues,
  });
  const {
    values,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = bundleForm;
    console.log("bundleValue1", JSON.stringify(values, null, 2));
  const rightActionsData = [
    {
      id: crypto.randomUUID(),
      title: "Cancel",
      onClick: () => {
        setEditable(false);
        // history.push(`123436/${AppRoutes.CATALOG.categoryDetail}`);
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
      onClick: (e: any) => {
        handleSubmit();
        // setEditable(false);
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
  async function onSubmit(
    values: AddBundleCompForm,
    helper: FormikHelpers<AddBundleCompForm>,
  ) {
    const data: IAddCompositionbundleRootRequest = {
      bundleComposition: [
        {
          userId: Number(userDecoded.id),
          bundleId: Number(bundleId),
          productId: 1,
          productVariantId: 1,
          unitPrice: 1,
          conditionCode: values.conditionCode,
          discount: Number(values.discount),
          qty: Number(values.qty),
          total: 10,
        },
      ],
    };
    await addBundleCompositionAction(data);
    // navigate("/catalog/bundles");
    // setEditable(false);
  }
  const istrue = !editable;
  return (
    <ThemeProvider theme={newtheme.isDarkMode ? darkModeTheme : lightTheme}>
      <Container maxWidth={false}>
        <TableToolbar
          buttonText="Edit"
          handleClick={() => {
            // navigate(AppRoutes.CATALOG.productCreate);
          }}
          navTitle="BUNDLES"
          rightActions={
            editable
              ? rightActionsData.filter((i) => i.title !== "Edit")
              : rightActionsData.filter((i) => i.title === "Edit")
          }
          title="bundles"
        />
        <Stack direction="row">
          <Tabs
            aria-label="basic tabs example"
            value={value}
            onChange={handleTabChange}
          >
            <Tab label="General" />
            <Tab label="Composition" />
          </Tabs>
        </Stack>
        <TabPanel value={value} index={0}>
          <General isTrue={istrue} data={bundle?.data} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Composition
            isTrue={istrue}
            bundleId={Number(bundleId)}
            values={values}
            setFieldValue={setFieldValue}
            handleChange={handleChange}
          />
        </TabPanel>
      </Container>
    </ThemeProvider>
  );
}

export default BundleDetails;
