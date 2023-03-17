import { Box, Card, Divider, Grid, Stack, Typography } from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";
import CustomSwitch from "components/custom-switch";
import TextField from "components/textfield";

const UoM = [
  {
    id: crypto.randomUUID(),
    value: "Box",
  },
  {
    id: crypto.randomUUID(),
    value: "Bottle",
  },
  {
    id: crypto.randomUUID(),
    value: "Can",
  },
  {
    id: crypto.randomUUID(),
    value: "Litre",
  },
  {
    id: crypto.randomUUID(),
    value: "Piece",
  },
  {
    id: crypto.randomUUID(),
    value: "Pack",
  },
  {
    id: crypto.randomUUID(),
    value: "Unit",
  },
  {
    id: crypto.randomUUID(),
    value: "IBCs",
  },
  {
    id: crypto.randomUUID(),
    value: "Drum",
  },
  {
    id: crypto.randomUUID(),
    value: "Bags",
  },
];

const strategys = [
  {
    id: crypto.randomUUID(),
    value: "First In First Out",
  },
  {
    id: crypto.randomUUID(),
    value: "First Expired First Out",
  },
  {
    id: crypto.randomUUID(),
    value: "Last In First  Out",
  },
];

const fullfillmentSwitchs = [
  {
    id: crypto.randomUUID(),
    value: "Track Serial numbers",
  },
  {
    id: crypto.randomUUID(),
    value: "Track Expiry dates",
  },
];

interface IGeneral {
  isTrue?: boolean;
  nameRef?: any;
  editable?: boolean;
}

function General(props: IGeneral) {
  const { isTrue, nameRef, editable } = props;
  return (
    <Grid container padding={0} spacing={2}>
      <Grid item xs={8}>
        <Card
          sx={{
            flex: 1,
          }}
        >
          <CustomCardContent title="Details">
            <Stack direction="row" gap={2}>
              <TextField
                disabled={isTrue}
                id="productName"
                label="Name"
                name="productName"
                nameRef={nameRef}
                size="small"
                value="Watches"
                onChange={() => {}}
              />

              <TextField
                disabled={isTrue}
                id="productType"
                label="Type"
                name="productType"
                size="small"
                value="Not Provided"
                onChange={() => {}}
              />
            </Stack>
            <Stack direction="row" gap={2} marginTop={2}>
              <TextField
                multiline
                disabled={isTrue}
                id="productDescription"
                label="Description"
                name="productDescription"
                rows={3}
                size="small"
                value="some other details"
                onChange={() => {}}
              />
            </Stack>
          </CustomCardContent>

          <CustomCardContent title="Organization">
            <Stack direction="row" gap={2}>
              <TextField
                disabled={isTrue}
                id="productCategory"
                label="Category"
                name="productCategory"
                size="small"
                value="Not Provided"
                onChange={() => {}}
              />
              <TextField
                disabled={isTrue}
                id="productBrand"
                label="Brand"
                name="productBrand"
                size="small"
                value="0"
                onChange={() => {}}
              />
            </Stack>

            <Stack direction="row" gap={2} marginTop={2}>
              <TextField
                disabled={isTrue}
                id="productTags"
                label="Tags"
                name="productTags"
                size="small"
                value="Active"
                onChange={() => {}}
              />
            </Stack>
          </CustomCardContent>

          <CustomCardContent title="Supply">
            <TextField
              isSelect
              disabled={isTrue}
              menuItems={UoM}
              name="UoM"
              size="small"
              value={UoM[0].id}
              onSelectHandler={() => {}}
            />
          </CustomCardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card
          sx={{
            flex: 1,
          }}
        >
          <CustomCardContent title="Image">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "150px",
                  height: "150px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  border: "1px dashed rgb(236, 236, 236)",
                }}
              >
                <img
                  alt="new"
                  src="https://app.storfox.com/d9f5ac726db86ff29f7b.png"
                  style={{ objectFit: "cover" }}
                  width="100%"
                />
              </Box>
            </Box>
          </CustomCardContent>
          <Divider />
          <CustomCardContent title="Dimensions">
            <Stack direction="row" gap={2}>
              <TextField
                disabled={isTrue}
                id="productHeight"
                label="Height"
                name="productHeight"
                size="small"
                value="Height in cm"
                onChange={() => {}}
              />
              <TextField
                disabled={isTrue}
                id="productWidth"
                label="Width"
                name="productWidth"
                size="small"
                value="Width in cm"
                onChange={() => {}}
              />
            </Stack>

            <Stack direction="row" gap={2} marginTop={2}>
              <TextField
                disabled={isTrue}
                id="productLength"
                label="Length"
                name="productLength"
                size="small"
                value="Length in cm"
                onChange={() => {}}
              />
              <TextField
                disabled={isTrue}
                id="productWeight"
                label="Weight"
                name="productWeight"
                size="small"
                value="Weight in kg"
                onChange={() => {}}
              />
            </Stack>
          </CustomCardContent>
          <CustomCardContent title="Fulfillment">
            <Stack direction="row" gap={2}>
              <TextField
                isSelect
                disabled={isTrue}
                label="Strategy"
                menuItems={strategys}
                name="strategy"
                size="small"
                value={strategys[0].id}
                onSelectHandler={() => {}}
              />
            </Stack>
            <Stack direction="row" gap={2} marginTop={2}>
              <TextField
                disabled={isTrue}
                id="minExpiryDays"
                label="Min Expiry Days"
                name="minExpiryDays"
                size="small"
                value="0"
                onChange={() => {}}
              />
            </Stack>

            {editable
              ? fullfillmentSwitchs?.map((item) => {
                  return (
                    <CustomSwitch
                      key={item.id}
                      checked={false}
                      title={item.value}
                      onChange={() => {}}
                    />
                  );
                })
              : fullfillmentSwitchs.map((item) => {
                  return (
                    <Typography sx={{ fontSize: "14px", color: "#9ea1b6" }}>
                      {item.value}
                    </Typography>
                  );
                })}
          </CustomCardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default General;
