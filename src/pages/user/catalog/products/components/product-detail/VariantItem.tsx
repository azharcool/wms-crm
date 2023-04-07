import { Box, TableCell, TableRow, Typography } from "@mui/material";
import CustomSwitch from "components/custom-switch";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import palette from "theme/palette";
import { GetAllVariantByProductIdData } from "types/catalog/variants/getAllVariantByProductId";

interface IVariantItem {
  item: GetAllVariantByProductIdData;
}
function VariantItem(props: IVariantItem) {
  const { item } = props;

  const newtheme = useSelector((state: any) => state.theme);

  return (
    <>
      <TableRow>
        <TableCell
          sx={{
            minWidth: 50,

            padding: "10px",
            position: "sticky",
            left: 0,
            background: newtheme.isDarkMode
              ? "#26263D"
              : palette.background.default,
          }}
        >
          <Box
            sx={{
              minWidth: "40px",
              height: "40px",
            }}
          >
            <img
              alt="new"
              src="https://app.storfox.com/d9f5ac726db86ff29f7b.png"
              style={{
                objectFit: "contain",
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        </TableCell>

        <TableCell
          sx={{
            padding: "10px",
            minWidth: 170,
            background: newtheme.isDarkMode
              ? "#26263D"
              : palette.background.default,
          }}
        >
          <Typography
            sx={{
              whiteSpace: "nowrap",
            }}
          >
            {item.variantName}
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              whiteSpace: "nowrap",
            }}
          >
            {item?.value}
          </Typography>
        </TableCell>

        <TableCell
          sx={{
            padding: "10px",
            minWidth: 120,
            background: newtheme.isDarkMode
              ? "#26263D"
              : palette.background.default,
          }}
        >
          <Typography>{item?.sku}</Typography>
        </TableCell>

        <TableCell
          sx={{
            padding: "10px",
            minWidth: 120,
            background: newtheme.isDarkMode
              ? "#26263D"
              : palette.background.default,
          }}
        >
          <Typography>{item?.barcode}</Typography>
        </TableCell>
        <TableCell
          sx={{
            padding: "10px",
            minWidth: 80,
            background: newtheme.isDarkMode
              ? "#26263D"
              : palette.background.default,
          }}
        >
          <Typography>{item?.supplyPrice?.toFixed(2)}</Typography>
        </TableCell>
        <TableCell
          sx={{
            padding: "10px",
            minWidth: 80,
            background: newtheme.isDarkMode
              ? "#26263D"
              : palette.background.default,
          }}
        >
          <Typography>{item?.mrp?.toFixed(2)}</Typography>
        </TableCell>
        <TableCell
          sx={{
            padding: "10px",
            minWidth: 80,
            background: newtheme.isDarkMode
              ? "#26263D"
              : palette.background.default,
          }}
        >
          <Typography>{item?.retailPrice?.toFixed(2)}</Typography>
        </TableCell>
        <TableCell
          sx={{
            padding: "10px",
            minWidth: 80,
            background: newtheme.isDarkMode
              ? "#26263D"
              : palette.background.default,
          }}
        >
          <CustomSwitch checked={item.crossDocking} />
        </TableCell>
        <TableCell
          sx={{
            padding: "10px",
            minWidth: "100px",
            position: "sticky",
            right: 0,

            background: newtheme.isDarkMode
              ? "#26263D"
              : palette.background.default,
          }}
        >
          <CustomSwitch checked={item.enable} />
        </TableCell>
      </TableRow>
    </>
  );
}

export default VariantItem;
