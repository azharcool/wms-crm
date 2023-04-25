import { Box, Container, Stack, Tab, Tabs, Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import TableToolbar from "components/table-toolbar";
import { FormikHelpers, useFormik } from "formik";
import useBundleAction from "hooks/actions/catalog/bundle/useBundleAction";
import useBundleCompositionAction from "hooks/actions/catalog/bundlle-composition/useBundleCompositionAction";
import useGetByIdBundle from "hooks/querys/catalog/bundle/useGetByIdBundle";
import useGetAllVariant from "hooks/querys/catalog/variants/useGetAllVariant";
import useDecodedData from "hooks/useDecodedData";
import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AddBundlCompositionRequestRoot } from "types/catalog/bundleComposition/addBundleCompostionRequest";
import { IAddBundleRequestRoot } from "types/catalog/bundles/addBundleRequest";
import { IGetAllVariantResponseData } from "types/catalog/variants/getAllVariantResponse";
import Composition from "./Composition";
import General, { IMenuItem } from "./General";
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
  const [value, setValue] = useState(0);
  const [editable, setEditable] = useState(false);
  const [newImages, setNewImages] = useState<IMenuItem[]>([]);

  const navigate = useNavigate();
  const { editBundleAction } = useBundleAction();
  const nameRef = useRef<any>(null);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      sku: "",
      barcode: "",
      categoryId: "",
      brandId: "",
      tag: "",
      image:[],
      oldImage:[]
    },
    onSubmit: async (values) => {
      const editData: IAddBundleRequestRoot = {
        id: Number(bundleId),
        userId: Number(userDecoded.id),
        name: values.name,
        description: values.description,
        sku: values.sku,
        barcode: values.barcode,
        categoryId: Number(values.categoryId),
        brandId: Number(values.brandId),
        tag: values.tag,
        oldImage: values.oldImage?.map((i) => i),
        image: newImages?.map((i) => i.value?.split("base64,")[1]),
      };
      const response = await editBundleAction(editData);
      if (response) {
        setEditable(false);
        formik.resetForm();
        navigate(-1);
      }
    },
  });

  async function onSubmit(
    values: AddBundleCompForm,
    _: FormikHelpers<AddBundleCompForm>,
  ) {
    const data: AddBundlCompositionRequestRoot = {
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
  }
  const istrue = !editable;
  return (
    <Container>
      <TableToolbar
        breadcrumbs={[{ link: "BUNDLES", to: "/catalog/bundles" }]}
        navTitle="bundles"
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
      <TabPanel index={0} value={value}>
        <General
          data={bundle?.data}
          editable={editable}
          formik={formik}
          setNewImages={setNewImages}
          newImages={newImages}
          isTrue={istrue}
          nameRef={nameRef}
        />
      </TabPanel>
      <TabPanel index={1} value={value}>
        <Composition />
      </TabPanel>
    </Container>
  );
}

export default BundleDetails;
