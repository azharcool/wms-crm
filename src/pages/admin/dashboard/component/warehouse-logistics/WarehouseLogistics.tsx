import { Box, Card, Stack, Tooltip, Typography } from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";
import palette from "theme/palette";
import sections from "__mock__/sections.json";

function WarehouseLogistics() {
  return (
    <Card>
      <CustomCardContent title="Warehouse Logistics">
        <Stack direction="row" justifyContent="space-between">
          <Typography
            component="h3"
            sx={{
              fontWeight: "bold",
            }}
          >
            Section 005
          </Typography>
          <Typography component="p">Show All</Typography>
        </Stack>
        <Stack
          direction="row"
          flexWrap="wrap"
          gap={1}
          justifyContent="flex-start"
          marginTop={1}
          //   sx={{
          //     display: "flex",
          //     flexDirection: "row",
          //     gap: 1,
          //     flexWrap: "wrap",
          //   }}
        >
          {sections.map((box) => {
            const { id, isLoaded } = box;
            return (
              <Tooltip
                key={id}
                title="Row  #487849 H60 x W40 x 20kg Delivered 06:10pm"
              >
                <Box
                  sx={{
                    width: 30,
                    height: 30,
                    background: isLoaded ? palette.box.dark : palette.box.light,
                    borderRadius: 0.9,
                  }}
                />
              </Tooltip>
            );
          })}
        </Stack>
        <Stack direction="row" marginTop="50px">
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                width: 25,
                height: 25,
                background: palette.box.light,
                borderRadius: 0.9,
              }}
            />
            <Typography sx={{ ml: 1 }}>Free place</Typography>
          </Box>
          <Box sx={{ display: "flex", ml: 2 }}>
            <Box
              sx={{
                width: 25,
                height: 25,
                background: palette.box.dark,
                borderRadius: 0.9,
              }}
            />
            <Typography sx={{ ml: 1 }}>Loaded place</Typography>
          </Box>
        </Stack>
      </CustomCardContent>
    </Card>
  );
}

export default WarehouseLogistics;
