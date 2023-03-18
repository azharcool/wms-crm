import { Box, Checkbox, TableCell, TableRow } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import "react-perfect-scrollbar/dist/css/styles.css";
import { IGetBrandResponseData } from "types/catalog/brands/getBrandResponse";

interface IBrandItem {
  brandData: IGetBrandResponseData;
}

function BrandItem(props: IBrandItem) {
  const { brandData } = props;

  return (
    <TableRow>
      <TableCell
        padding="checkbox"
        sx={{
          width: 60,
          // position: "sticky",
          // left: 0,
          // zIndex: 999,
          background: "white",
        }}
      >
        <Checkbox checked={false} color="primary" onChange={() => {}} />
      </TableCell>
      <TableCell
        sx={{
          width: 50,
          // position: "sticky",
          // left: 60,
          // zIndex: 999,
          background: "white",
        }}
      >
        <Box
          sx={{
            width: "40px",
            height: "40px",
          }}
        >
          <img
            alt="new"
            src="https://app.storfox.com/d9f5ac726db86ff29f7b.png"
            // src={brandData.fileName}
            width="100%"
          />
        </Box>
      </TableCell>

      <TableCell
        sx={{
          width: "100%",
          // position: "sticky",
          // left: 130,
          // zIndex: 999,
          background: "white",
        }}
      >
        {brandData.name || "-"}
        {/* {brandData?.data.name} */}
        {/* {br} */}
      </TableCell>

      <TableCell
        sx={{
          position: "sticky",
          right: 0,
          background: "white",
        }}
      >
        <TableActionButton />
      </TableCell>
    </TableRow>
  );
}

export default BrandItem;
