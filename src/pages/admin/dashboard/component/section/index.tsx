import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import TextField from "components/textfield";
import SectionBox from "./component/sections-box";

function Section() {
  return (
    <Box>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          //   p: 1,
        }}
      >
        <Typography sx={{ m: 1, fontSize: 20 }} variant="h4">
          Warehouse Logistics
        </Typography>
        <Box sx={{ m: 1 }}>
          <TextField
            isSelect
            id={undefined}
            menuItems={[
              { id: 1, value: "section1" },
              { id: 2, value: "section2" },
            ]}
            name=""
            size={undefined}
            style={{ width: "250px" }}
          />
        </Box>
      </Box>
      <SectionBox />
    </Box>
  );
}

export default Section;
