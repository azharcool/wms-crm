import { Box, Card, CardContent, Container } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import AppRoutes from "navigation/appRoutes";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import CompositionListing from "./component/CompositionListing";

interface IComposition {
  isTrue: boolean;
}

function Composition(props: IComposition) {
  const { isTrue } = props;
  const navigate = useNavigate();
  return (
    <Container maxWidth={false}>
      <Card>
        <CardContent sx={{ paddingTop: 0 }}>
          <Box sx={{ mt: 3 }}>
            <CompositionListing isTrue={isTrue}/>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Composition;
