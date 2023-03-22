import { Card, Grid, Stack, styled, Switch } from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";
import { IDropdown } from "constants/interfaces";
import { useFetchScreens } from "pages/admin/settings/screens/screens/query/useFetchScreens";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { usePermissionActions } from "redux/permissions/permissions";
import { detailMenu } from "__mock__";
import useForm from "../hooks/useForm";
// import useForm from "../hooks/useForm";
// import { IPermissionRequest, useApiActions } from "../query/useApiAction";

interface IAddScreen {
  openEdit: boolean;
  handleClose: () => void;
}

const initialValues: any = {
  id: 0,
  warehouseName: "",
  label: "",
  email: "",
  phoneNumber: "",
  address: "",
  country: "",
  city: "",
  zipcode: "",
  longitude: "",
  latitude: "",
  status: "",
  pickingStrategy: "",
  receivingStrategy: "",
  timezone: "",
  receivingType: "",
  defaultWarehouse: false,
  allowPartialPicking: false,
};

const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  ml: 1,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

function AreasForm(props: IAddScreen) {
  const { openEdit, handleClose } = props;
  const [editable, setEditable] = useState(false);
  const nameRef = useRef<any>(null);
  const screenStorage = useSelector((state: any) => state.permissions);
  const { permission } = screenStorage;
  const [screens, setScreens] = useState<IDropdown[]>([]);
  //   const { trySave } = useApiActions();
  const { removePermission } = usePermissionActions();
  const { data: screensData } = useFetchScreens(0, 0, false);

  const onSubmit = async (values: any) => {
    // await trySave(values);
    // handleClose();
    // removePermission();
    // formik.resetForm();
  };

  const formik = useForm(onSubmit, initialValues);

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    values,
    errors,
    touched,
    isValid,
    dirty,
    isSubmitting,
  } = formik;

  useEffect(() => {
    if (screensData?.data) {
      const tempScreens: IDropdown[] = [];
      screensData?.data?.map((item) => {
        tempScreens.push({ id: item.id, value: item.screenName });
        return item;
      });
      setScreens(tempScreens);
    }
  }, [screensData]);

  const onClose = () => {
    handleClose();
    removePermission();
  };
  const istrue = !editable;
  return (
    <Slider
      buttonText="save"
      handleClose={handleClose}
      open={openEdit}
      size="sm"
      title="Edit Area"
    >
      <Grid container marginTop={2} spacing={2}>
        <Grid item xs={12}>
          <Card
            sx={{
              flex: 1,
            }}
          >
            <CustomCardContent title="Details">
              <Stack direction="column" gap={2}>
                <TextField
                  disabled={istrue}
                  // error={!!touched.name && !!errors.name}
                  // helperText={
                  //   (touched.name && errors && errors.name) || ""
                  // }
                  id="categoryName"
                  label="Warehouse"
                  name="categoryName"
                  nameRef={nameRef}
                  size="small"
                  value=""
                  // onBlur={handleBlur("name")}
                  // onChange={handleChange("name")}
                />
              </Stack>
              <Stack direction="row" gap={2}>
                <TextField
                  disabled={istrue}
                  // error={!!touched.name && !!errors.name}
                  // helperText={
                  //   (touched.name && errors && errors.name) || ""
                  // }
                  id="categoryName"
                  label="Label"
                  name="categoryName"
                  nameRef={nameRef}
                  size="small"
                  value=""
                  // onBlur={handleBlur("name")}
                  // onChange={handleChange("name")}
                />

                <TextField
                  disabled={istrue}
                  // error={!!touched.name && !!errors.name}
                  // helperText={
                  //   (touched.name && errors && errors.name) || ""
                  // }
                  id="categoySlug"
                  label="Name"
                  name="categoySlug"
                  size="small"
                  value=""
                  // onBlur={handleBlur("slug")}
                  // onChange={handleChange("slug")}
                />
              </Stack>
            </CustomCardContent>
          </Card>

          <Card sx={{ mt: 3 }}>
            <CustomCardContent title="Setting">
              <Stack direction="column" gap={4}>
                <TextField
                  isSelect
                  disabled={istrue}
                  id="productType"
                  label="Type"
                  menuItems={detailMenu}
                  name="productType"
                  size="small"
                  value=""
                  // onSelectHandler={(e) => {
                  //   formik?.setFieldValue(
                  //     "productType",
                  //     e.target.value,
                  //   );
                  // }}
                />
              </Stack>
            </CustomCardContent>
          </Card>
        </Grid>
      </Grid>
    </Slider>
  );
}
export default AreasForm;
