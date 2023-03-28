import { Box, Button, Grid, Typography } from "@mui/material";
import { IGetAllByOptionNameValueResponseData } from "types/catalog/variants/getAllByOptionNameValueResponse";

interface IVariantSidebar {
  data: IGetAllByOptionNameValueResponseData;
  setSelectedVariantId: (value: number) => void;
}
export default function SidebarButton(props: IVariantSidebar) {
  const { data, setSelectedVariantId } = props;
  const onOptionTap = (variantId: number) => {
    setSelectedVariantId(variantId);
  };
  return (
    <Box sx={{ p: 1 }}>
      <Button onClick={() => onOptionTap(data?.id)}>
        <Grid container columns={10} spacing={2}>
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
    </Box>
  );
}
