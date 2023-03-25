import {
  Box,
  Checkbox,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import AppRoutes from "navigation/appRoutes";
import { useNavigate } from "react-router-dom";
import { IGetAllVariantResponseData } from "types/catalog/variants/getAllVariantResponse";
// import "react-perfect-scrollbar/dist/css/styles.css";
import NOImage from "assets/images/no-image.png";
import { useSelector } from "react-redux";
import palette from "theme/palette";

interface IVariantItem {
  item: IGetAllVariantResponseData;
}

function VariantItem(props: IVariantItem) {
  const { item } = props;
  const navigate = useNavigate();
  const newtheme = useSelector((state: any) => state.theme);

  return (
    <TableRow>
      <TableCell
        padding="checkbox"
        sx={{
          minWidth: 60,
          position: "sticky",
          left: 0,
          zIndex: 999,
          background: newtheme.isDarkMode
            ? "#26263D"
            : palette.background.default,
        }}
      >
        <Checkbox checked={false} color="primary" onChange={() => {}} />
      </TableCell>
      <TableCell
        sx={{
          width: 50,
          position: "sticky",
          left: 60,
          zIndex: 999,
          background: newtheme.isDarkMode
            ? "#26263D"
            : palette.background.default,
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
            // src={
            //   item?.picture.length > 0
            //     ? `${FILE_URL}${item?.picture[0]?.atachment}`
            //     : NOImage
            // }
            src={NOImage}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
        </Box>
      </TableCell>

      <TableCell
        sx={{
          width: 150,
          position: "sticky",
          left: 130,
          zIndex: 999,
          background: newtheme.isDarkMode
            ? "#26263D"
            : palette.background.default,
          cursor: "pointer",
        }}
      >
        <Box
          onClick={() => {
            navigate(`${AppRoutes.CATALOG.variantsDetails}/${item.id}`);
          }}
        >
          <Tooltip title="TshirtXXL">
            <Typography sx={{ textDecoration: "underline" }}>
              {item.optionName}
            </Typography>
          </Tooltip>
        </Box>
        <Typography>{item.sku}</Typography>
      </TableCell>
      <TableCell
        sx={{
          width: 150,
          position: "sticky",
          left: 0,
          // background: "white",
        }}
      >
        {/* Pieces */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        {/* UoM */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        {item.barcode}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        {/* listed on */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        0
      </TableCell>

      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        0
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        0
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        0
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        0
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        0
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        INR {item.supplyPrice}.00
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        INR {item.retailPrice}.00
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        INR {item.mrp}.00
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      />
      <TableCell
        sx={{
          minWidth: 200,
        }}
      />
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        azhar
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      />
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        Mar 14, 2023 14:40:35
      </TableCell>
      <TableCell
        sx={{
          position: "sticky",
          right: 0,
          background: newtheme.isDarkMode
            ? "#26263D"
            : palette.background.default,
        }}
      >
        <TableActionButton />
      </TableCell>
    </TableRow>
  );
}

export default VariantItem;
