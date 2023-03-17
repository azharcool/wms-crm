import { Box, Card, CardContent, Container } from "@mui/material";
import VariantListing from "./VariantListing";

interface IGeneral {
  isTrue?: boolean;
  nameRef?: any;
  editable?: boolean;
}

function Variants(props: IGeneral) {
  const { isTrue, nameRef, editable } = props;

  return (
    <Container maxWidth={false}>
      <Card>
        <CardContent sx={{ paddingTop: 0 }}>
          <Box sx={{ mt: 3 }}>
            <VariantListing isTrue={isTrue} />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Variants;
