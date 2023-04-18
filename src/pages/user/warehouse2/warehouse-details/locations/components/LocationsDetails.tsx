import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { Box, Container, Stack, Tab, Tabs, Typography } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import useLocationAction from "hooks/actions/warehouse/location/useLocation";
import useGetByIdLocation from "hooks/querys/warehouse/location/useGetByIdLocation";
import useDecodedData from "hooks/useDecodedData";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getWarehouseSelected } from "redux/warehouse/warehouseSelector";
import { AddLocationRequestRoot } from "types/warehouse/location/addLocationRequest";
import useLocationForm, {
  LocationInitialValues,
  locationInitialValues,
} from "../hooks/useLocationForm";
import Contents from "./Content";
import General from "./General";

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

function LocationsDetails() {
  const nameRef = useRef<any>(null);
  const userDecoded = useDecodedData();
  const [editable, setEditable] = useState(false);
  const [value, setValue] = useState(0);

  const navigate = useNavigate();
  const { locationId } = useParams();
  const getSelectedWarehouse = useSelector(getWarehouseSelected);
  const { data: locationResponse } = useGetByIdLocation({
    id: Number(locationId),
    warehouseId: getSelectedWarehouse.id,
  });
  const { editLocationAction } = useLocationAction();
  const lastPageLink = `/warehouse/details/${getSelectedWarehouse.id}/locations/listing`;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setEditable(false);
  };

  const formik = useLocationForm({
    initialValues: locationInitialValues,
    onSubmit,
  });

  async function onSubmit(values: LocationInitialValues) {
    const data: AddLocationRequestRoot = {
      id: Number(locationId),
      userId: Number(userDecoded.id),
      warehouseId: getSelectedWarehouse.id,
      areaId: parseFloat(values.area),
      zoneId: parseFloat(values.zone),
      aisle: values.aisle,
      locationType: values.locationType,
      locationAlias: values.locationAlias,
      operations: values.operation,
      position: values.bin,
      rack: values.bay,
      shelf: values.level,
      status: parseInt(values.status, 10),

      ...(!Number.isNaN(parseFloat(values.height)) && {
        height: parseFloat(values.height),
      }),
      ...(!Number.isNaN(parseFloat(values.width)) && {
        width: parseFloat(values.width),
      }),
      ...(!Number.isNaN(parseFloat(values.length)) && {
        length: parseFloat(values.length),
      }),
      ...(!Number.isNaN(parseFloat(values.x)) && {
        x: parseFloat(values.x),
      }),
      ...(!Number.isNaN(parseFloat(values.y)) && {
        y: parseFloat(values.y),
      }),
      ...(!Number.isNaN(parseFloat(values.z)) && {
        z: parseFloat(values.z),
      }),
      ...(!Number.isNaN(parseFloat(values.volume)) && {
        volume: parseFloat(values.volume),
      }),
    };

    const response = await editLocationAction(data);
    if (response) {
      navigate(lastPageLink);
    }
  }

  const rightActionsData = [
    {
      id: crypto.randomUUID(),
      title: "Cancel",
      onClick: () => {
        setEditable(false);
        // formik.resetForm();
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
        formik.handleSubmit();
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

  return (
    <Container maxWidth={false}>
      <TableToolbar
        breadcrumbs={[{ link: "WAREHOUSE", to: "" }]}
        rightActions={
          editable
            ? rightActionsData.filter((i) => i.title !== "Edit")
            : rightActionsData.filter((i) => i.title === "Edit")
        }
        title=""
      />

      <Stack direction="row">
        <Tabs
          aria-label="basic tabs example"
          value={value}
          onChange={handleChange}
        >
          <Tab label="General" />
          <Tab label="Content" />
        </Tabs>
      </Stack>
      <TabPanel index={0} value={value}>
        <General
          data={locationResponse?.data}
          editable={editable}
          formik={formik}
          isTrue={false}
          nameRef={nameRef}
        />
      </TabPanel>
      <TabPanel index={1} value={value}>
        <Contents />
      </TabPanel>
    </Container>
  );
}

export default LocationsDetails;
