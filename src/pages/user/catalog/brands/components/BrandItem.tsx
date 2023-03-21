import { Box, Checkbox, TableCell, TableRow, Typography } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import AppRoutes from "navigation/appRoutes";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSelectedBrandById } from "redux/catalog/brandSelector";
import { RootState } from "redux/store";
import { IGetBrandResponseData } from "types/catalog/brands/getBrandResponse";

interface IBrandItem {
  brandData: IGetBrandResponseData;
}

function BrandItem(props: IBrandItem) {
  const { brandData } = props;
  const navigate = useNavigate();

  const getSelectedBrandByIdState = useSelector((state: RootState) =>
    getSelectedBrandById(state, brandData.id),
  );

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
        onClick={() => {
          navigate(`${AppRoutes.CATALOG.brandDetails}/${brandData.id}`);
        }}
      >
        <Typography sx={{ textDecoration: "underline" }}>
          {brandData.name || "-"}
        </Typography>
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
