import FolderZipIcon from "@mui/icons-material/FolderZip";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StreetviewIcon from "@mui/icons-material/Streetview";
import { Box, List, ListItem, Stack } from "@mui/material";
import axios from "axios";
import TextField from "components/textfield";
import config from "config";
import { FormikProps } from "formik";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { IAddContact } from "../../hooks/useForm";
import { IFeature } from "../types/mapBoxSearchResponse";

interface Props {
  formik: FormikProps<IAddContact>;
}

function Address(props: Props) {
  const { formik } = props;
  const [address, setAddress] = useState([]);
  const [searchAddress, setSearchAddress] = useState("");

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
    dirty,
    isSubmitting,
    setFieldValue,
  } = formik;

  const fetchLocation = async () => {
    try {
      const url = `${config.MAPBOX_URL_API}${searchAddress}.json?access_token=${config.MAPBOX_TOKEN}&${config.MAPBOX_OTHER_URL}`;
      const response = await axios.get(url);

      if (response.data.features) {
        setAddress(response.data.features);
      }
    } catch (error) {
      //
    }
  };

  const onListItem = (item: IFeature) => {
    const findState = item.context.find((i) => i.id.split(".")[0] === "region");

    const findCity = item.context.find(
      (i) => i.id.split(".")[0] === "district",
    );

    const findStreet = item.context.find((i) => i.id.split(".")[0] === "place");

    const findZipcode = item.context.find(
      (i) => i.id.split(".")[0] === "postcode",
    );

    setFieldValue("state", findState?.text_en || "");
    setFieldValue("city", findCity?.text_en || "");
    setFieldValue("street", findStreet?.text_en || "");
    setFieldValue("zipCode", findZipcode?.text_en);
    setFieldValue("googleAddress", searchAddress);
    setAddress([]);
    setSearchAddress("");
  };

  const onChangeHanlder = (e: string) => {
    if (e.length) {
      setSearchAddress(e);
      fetchLocation();
    } else {
      setSearchAddress("");
      setAddress([]);
    }
  };

  return (
    <>
      <Stack
        direction="row"
        marginBottom="1rem"
        sx={{
          position: "relative",
        }}
      >
        <TextField
          error={!!touched.googleAddress && !!errors.googleAddress}
          helperText={
            (touched.googleAddress && errors && errors.googleAddress) || ""
          }
          icon={<LocationOnIcon />}
          label="Google Address"
          name="googleAddress"
          placeholder="Enter a Location"
          value={searchAddress}
          onChange={(e) => onChangeHanlder(e.target.value)}
        />
        {address.length ? (
          <Box
            sx={{
              position: "absolute",
              top: 95,
              width: "95%",
            }}
          >
            <List
              sx={{
                width: "100%",
                // width: 550,
                bgcolor: "background.paper",
                height: 200,
                overflowY: "auto",
                zIndex: 999,
                paddingLeft: "1rem",
                paddingRight: "1rem",
              }}
            >
              <PerfectScrollbar>
                {address.map((item: IFeature) => {
                  return (
                    <ListItem
                      key={item.id}
                      sx={{
                        marginBottom: 1,
                        borderBottom: 1,
                        cursor: "pointer",
                      }}
                      onClick={() => onListItem(item)}
                    >
                      {item.place_name_en}
                    </ListItem>
                  );
                })}
              </PerfectScrollbar>
            </List>
          </Box>
        ) : null}
      </Stack>

      <Stack direction="row" gap={2} marginBottom="1rem">
        <TextField
          error={!!touched.state && !!errors.state}
          helperText={(touched.state && errors && errors.state) || ""}
          icon={<HomeWorkIcon />}
          label="State"
          name="state"
          placeholder="Enter State"
          style={{ width: "550px" }}
          value={values.state}
          onBlur={handleBlur("state")}
          onChange={handleChange("state")}
        />
        <TextField
          error={!!touched.city && !!errors.city}
          helperText={(touched.city && errors && errors.city) || ""}
          icon={<LocationCityIcon />}
          label="City"
          name="city"
          placeholder="Enter City"
          style={{ width: "550px" }}
          value={values.city}
          onBlur={handleBlur("city")}
          onChange={handleChange("city")}
        />
      </Stack>

      <Stack direction="row" gap={2} marginBottom="2.5rem">
        <TextField
          error={!!touched.street && !!errors.street}
          helperText={(touched.street && errors && errors.street) || ""}
          icon={<StreetviewIcon />}
          label="Street"
          name="street"
          placeholder="Enter Street"
          style={{ width: "550px" }}
          value={values.street}
          onBlur={handleBlur("street")}
          onChange={handleChange("street")}
        />
        <TextField
          error={!!touched.zipCode && !!errors.zipCode}
          helperText={(touched.zipCode && errors && errors.zipCode) || ""}
          icon={<FolderZipIcon />}
          label="Zip Code"
          name="zipCode"
          placeholder="Enter Zip code"
          style={{ width: "550px" }}
          type="text"
          value={values.zipCode}
          onBlur={handleBlur("zipCode")}
          onChange={(e) => {
            const { target } = e;
            const { value } = target;
            setFieldValue("zipCode", value.replace(/[^0-9]/g, ""));
          }}
        />
      </Stack>
    </>
  );
}

export default Address;
