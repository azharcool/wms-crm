import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Container,
  Divider,
  Grid,
  InputAdornment,
  SvgIcon,
  TextField,
  Tooltip,
} from "@mui/material";
import TableToolbar from "components/table-toolbar";
import { useFormik } from "formik";
import useVariantAction from "hooks/actions/catalog/variant/useVariantAction";
import useGetAllByOptionNameValue from "hooks/querys/catalog/variants/useGetAllByOptionNameValue";
import useGetByIdVariant from "hooks/querys/catalog/variants/useGetByIdVariant";
import useDecodedData from "hooks/useDecodedData";
import AppRoutes from "navigation/appRoutes";
import { useEffect, useRef, useState } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSelectedOptions } from "redux/catalog/variants/variantsSelector";
import palette from "theme/palette";
import { IGetAllByOptionNameValueResponseData } from "types/catalog/variants/getAllByOptionNameValueResponse";
import { EditVariantForm } from "../hooks/useEditVariantForm";
import SidebarButton from "./components/SidebarButton";

import Tabs from "./components/Tabs";

const useStyles = makeStyles({
  scrollBox: {
    backgroundColor: "transparent",
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#888",
      borderRadius: "8px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  },
});
export interface IUploadFile {
  id: string;
  value: string;
}

type VariantListItem = IGetAllByOptionNameValueResponseData;
function VariantDetails() {
  const [editable, setEditable] = useState(false);
  const [selectedVariantId, setSelectedVariantId] = useState<number>();
  const [uploadedFiles, setUploadedFiles] = useState<IUploadFile[]>([]);
  const [variantList, setVariantList] = useState<VariantListItem[]>([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const { variantId } = useParams();

  const nameRef = useRef<any>(null);
  const getOptions = useSelector(getSelectedOptions);
  const newtheme = useSelector((state: any) => state.theme);

  const { editVariantAction } = useVariantAction();
  const { data: variantItemResponse } = useGetByIdVariant({
    variantId: Number(selectedVariantId || variantId),
  });

  const formik = useFormik({
    initialValues: {
      id: 0,
      userId: 0,
      productId: 0,
      optionName: "",
      value: "",
      variantName: "",
      sku: "",
      barcode: "",
      supplyPrice: 0,
      mrp: 0,
      retailPrice: 0,
      height: 0,
      width: 0,
      length: 0,
      weight: 0,
      crossDocking: true,
      enable: true,
    },
    onSubmit,
  });
  const { handleSubmit } = formik;
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
      onClick: () => {
        handleSubmit();
        setEditable(false);
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
  const userId = useDecodedData();

  const classes = useStyles();

  const istrue = !editable;

  const { data: variantOptions } = useGetAllByOptionNameValue({
    optionName: getOptions.optionName,
    value: getOptions.optionValue,
  });

  useEffect(() => {
    if (variantOptions) {
      setVariantList(variantOptions.data);
    }
  }, [variantOptions]);

  async function onSubmit(values: EditVariantForm) {
    const data: EditVariantForm = {
      id: Number(variantItemResponse?.data.id),
      userId: Number(userId.id),
      productId: Number(variantItemResponse?.data.productId),
      optionName: values.optionName,
      value: values.value,
      variantName: values.variantName,
      sku: values.sku,
      barcode: values.barcode,
      supplyPrice: Number(values.supplyPrice),
      mrp: Number(values.mrp),
      retailPrice: Number(values.retailPrice),
      height: Number(values.height),
      width: Number(values.width),
      length: Number(values.length),
      weight: Number(values.width),
      crossDocking: true,
      enable: true,
      image: uploadedFiles.map((i) => i.value.split("base64,")[1]),
      oldImage: [],
    };
    await editVariantAction(data);
  }

  return (
    <Container maxWidth={false}>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Grid container columns={12} spacing={2}>
          <Grid item xs={3}>
            <Box
              className={classes.scrollBox}
              sx={{
                ml: -2.5,
                mt: -2,
                background: newtheme.isDarkMode
                  ? "#26263D"
                  : palette.background.default,
                height: "100%",
                overflowY: "scroll",
                position: "fixed",
              }}
            >
              <Tooltip title="Search">
                <Box sx={{ p: 1 }}>
                  <Box sx={{ width: 280 }}>
                    <TextField
                      fullWidth
                      InputProps={{
                        sx: {
                          // borderRadius: 5,
                          "& input": {
                            padding: "8px 10px",
                            paddingLeft: "16px",
                            fontSize: "0.9rem",
                          },
                        },
                        endAdornment: (
                          <InputAdornment position="end">
                            <SvgIcon color="action" fontSize="small">
                              <SearchIcon />
                            </SvgIcon>
                          </InputAdornment>
                        ),
                      }}
                      placeholder="Search by name, SKU, barcode"
                      value={search}
                      variant="outlined"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </Box>
                </Box>
              </Tooltip>
              <Divider sx={{ pb: 1 }} />
              <Box
                sx={{
                  width: 280,
                }}
              >
                <>
                  {/* barcode, sku, variantName */}
                  {variantList
                    .filter(
                      (i) =>
                        i.variantName
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        i.sku.toLowerCase().includes(search.toLowerCase()) ||
                        i.barcode.includes(search),
                    )
                    .map((item) => {
                      return (
                        <SidebarButton
                          key={item.barcode}
                          data={item}
                          setSelectedVariantId={setSelectedVariantId}
                        />
                      );
                    })}
                </>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={9}>
            <TableToolbar
              breadcrumbs={[
                {
                  link: "Variants",
                  to: `/${AppRoutes.CATALOG.catalog}/${AppRoutes.CATALOG.variants}`,
                },
              ]}
              rightActions={
                editable
                  ? rightActionsData.filter((i) => i.title !== "Edit")
                  : rightActionsData.filter((i) => i.title === "Edit")
              }
              title={variantItemResponse?.data.variantName || ""}
            />

            <Tabs
              data={variantItemResponse?.data}
              editable={editable}
              formik={formik}
              isTrue={istrue}
              nameRef={nameRef}
              setUploadedFiles={setUploadedFiles}
              uploadedFiles={uploadedFiles}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
export default VariantDetails;
