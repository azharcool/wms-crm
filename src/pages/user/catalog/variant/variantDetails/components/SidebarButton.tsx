import { Box, Button, Grid, Typography } from "@mui/material";
import { IGetAllByOptionNameValueResponseData } from "types/catalog/variants/getAllByOptionNameValueResponse";

interface IVariantSidebar {
  data: IGetAllByOptionNameValueResponseData;
  setSelectedVariantId: (value: number) => void;
}
export default function SidebarButton(props: IVariantSidebar) {
  const { data, setSelectedVariantId } = props;

  return (
    <Button
      disableRipple
      sx={{
        all: "unset",
        display: "block",
        width: "100%",
        borderBottom: "1px solid #ccc",
        padding: "5px",
        cursor: "pointer",
      }}
      onClick={() => {
        setSelectedVariantId(data.id);
      }}
    >
      <Grid container columns={10}>
        <Grid item xs={2}>
          <Box
            sx={{
              width: "40px",
              height: "40px",
            }}
          >
            <img
              alt="new"
              src="https://app.storfox.com/d9f5ac726db86ff29f7b.png"
              width="100%"
            />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Typography sx={{ fontSize: 15, color: "#000" }} variant="caption">
            {data?.variantName}
          </Typography>
          <Typography sx={{ fontSize: 12, color: "#333" }}>
            {data?.sku}
          </Typography>
        </Grid>
      </Grid>
    </Button>
  );
}
