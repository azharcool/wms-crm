import {
  Box,
  Checkbox,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import TableActionButton from "components/table/TableActionButton";
import { useNavigate } from "react-router-dom";
import AppRoutes from "routes/appRoutes";
import { IGetAllVariantResponseData } from "types/catalog/variants/getAllVariantResponse";
// import "react-perfect-scrollbar/dist/css/styles.css";
import NOImage from "assets/images/no-image.png";
import { useAlert } from "components/alert";
import useVariantAction from "hooks/actions/catalog/variant/useVariantAction";
import CustomBodyTableCell, {
  CustomTableText,
} from "components/table/status-table-cell/CustomBodyTableCell";

interface IVariantItem {
  item: IGetAllVariantResponseData;
}

function VariantItem(props: IVariantItem) {
  const { item } = props;

  const navigate = useNavigate();
  const alert = useAlert();
  const theme = useTheme();
  const { deleteVariantAsync } = useVariantAction();

  const handleVariantDelete = async () => {
    alert?.show({
      title: "Confirmation",
      message: "Do you really want to delete Variant",
      cancelText: "No",
      confirmText: "Yes",
      onConfirm: async () => {
        await deleteVariantAsync(Number(item.id));
      },
    });
  };

  return (
    <TableRow>
      <CustomBodyTableCell
        padding="checkbox"
        sxProps={{
          minWidth: 60,
          position: "sticky",
          left: 0,
          zIndex: 999,
        }}
      >
        <Checkbox
          sx={{
            color: theme.palette.primary.darkBlue,
            "&.Mui-checked": {
              color: theme.palette.primary.darkBlue,
            },
          }}
        />
      </CustomBodyTableCell>
      <CustomBodyTableCell
        sxProps={{
          width: 50,
          position: "sticky",
          left: 60,
          zIndex: 999,
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
      </CustomBodyTableCell>

      <CustomBodyTableCell
        sxProps={{
          minWidth: 150,
          position: "sticky",
          left: 130,
          zIndex: 999,
          cursor: "pointer",
        }}
        onClick={() => {
          navigate(`${AppRoutes.CATALOG.variantsDetails}/${item.id}`);
        }}
      >
        <Tooltip title="TshirtXXL">
          <CustomTableText text={item?.variantName} link />
        </Tooltip>
        <CustomTableText text={item?.sku} />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="-" /> {/* peices  */}
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="-" /> {/* uom */}
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text={item?.barcode} />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="-" /> {/* listedon */}
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="-" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="-" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="-" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="-" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="-" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="-" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text={`INR ${item.supplyPrice}.00`} />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text={`INR ${item.retailPrice}.00`} />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text={`INR ${item.mrp}.00`} />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="-" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="-" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="azhar" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="-" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="Mar 14, 2023 14:40:35" />
      </CustomBodyTableCell>
      <CustomBodyTableCell
        sx={{
          position: "sticky",
          right: 0,
          cursor: "pointer",
          backdropFilter: "blur(2px)",
        }}
      >
        <TableActionButton
          onDeleteHandle={() => {
            handleVariantDelete();
          }}
        />
      </CustomBodyTableCell>
    </TableRow>
  );
}

export default VariantItem;
