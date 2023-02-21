import { Box, Divider, Stack, Typography } from "@mui/material";
import CustomFormField from "components/CustomFormField";

function CustomSection(props: any) {
  const { section } = props;

  return (
    <Box sx={{ padding: "1px", position: "relative" }}>
      <Box sx={{ pt: 3, mb: 3, gap: 2, display: "flex" }}>
        <Typography>{section?.sectionName}</Typography>
      </Box>
      <Divider sx={{ mt: 2 }} />
      <Stack
        aria-label="field box"
        direction="row"
        flexWrap="wrap"
        gap={2}
        marginBottom="1rem"
      >
        {section?.fields?.map((item: any) => {
          return <CustomFormField field={item} width="49%" />;
        })}
      </Stack>
    </Box>
  );
}

export default CustomSection;
