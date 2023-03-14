import { Box } from "@mui/material";
import EnhancedTableToolbar from "components/enhanced-table-toolbar";
import PerfectScrollbar from "react-perfect-scrollbar";

const tabs = [
  {
    id: crypto.randomUUID(),
    title: "New",
  },
  {
    id: crypto.randomUUID(),
    title: "Pick",
  },
  {
    id: crypto.randomUUID(),
    title: "Close",
  },
];
function ProductListing() {
  return (
    <PerfectScrollbar>
      <Box sx={{ minWidth: 1050, overflow: "auto" }}>
        <EnhancedTableToolbar tabs={tabs} />
      </Box>
    </PerfectScrollbar>
  );
}

export default ProductListing;
