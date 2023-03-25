import DeleteIcon from "@mui/icons-material/Delete";
import PercentIcon from "@mui/icons-material/Percent";
import { Box, TableCell, TableRow } from "@mui/material";
import TextField from "components/textfield";
import useBundleCompositionAction from "hooks/catalog/bundlle-composition/useBundleCompositionAction";
import "react-perfect-scrollbar/dist/css/styles.css";
import { IGetAllVariantResponseData } from "types/catalog/variants/getAllVariantResponse";

const conditionCode = [
  {
    id: "New",
    value: "New",
  },
  {
    id: "Old",
    value: "Old",
  },
];

interface ICompositionItem {
  isTrue: boolean;
  bundleComp: any;
  variantData: IGetAllVariantResponseData;
  bundleId?: number;
  values?: any;
  setFieldValue: any;
  handleChange: any;
}

function CompositionItem(props: ICompositionItem) {
  const {
    isTrue,
    bundleComp,
    variantData,
    values,
    setFieldValue,
    handleChange,
  } = props;
  const { deleteBundlCompeAction } = useBundleCompositionAction();

  const handleDelete = (id: any) => {
    deleteBundlCompeAction(id);
  };

  return (
    <TableRow>
      <TableCell
        sx={{
          width: 60,
          position: "sticky",
          left: 0,
          zIndex: 999,
          // background: "white",
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
            width="100%"
          />
        </Box>
      </TableCell>

      <TableCell
        sx={{
          width: 100,
          position: "sticky",
          left: 60,
          zIndex: 999,
          // background: "white",
        }}
      >
        {variantData?.variantName || variantData?.productName}
      </TableCell>
      <TableCell
        sx={{
          width: 100,
          position: "sticky",
          left: 0,
        }}
      >
        {variantData?.unitPrice || "not provided"}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 100,
        }}
      >
        <TextField
          isSelect
          disabled={isTrue}
          id="categorys"
          menuItems={conditionCode}
          name="conditionCode"
          size="small"
          value={variantData?.conditionCode || values.conditionCode}
          onSelectHandler={(e) => {
            setFieldValue("conditionCode", e.target.value);
          }}
        />
      </TableCell>
      <TableCell
        sx={{
          minWidth: 100,
        }}
      >
        <TextField
          iconEnd
          disabled={isTrue}
          icon={<PercentIcon />}
          id="discount"
          name="discount"
          size="small"
          type="number"
          value={variantData?.discount || values.discount}
          onChange={handleChange("discount")}
          onClickIcon={() => {
            console.log("clicked....");
          }}
        />
      </TableCell>
      <TableCell
        sx={{
          minWidth: 100,
        }}
      >
        <TextField
          disabled={isTrue}
          id="qty"
          name="qty"
          size="small"
          type="number"
          value={variantData?.qty || values.qty}
          onChange={handleChange("qty")}
          onClickIcon={() => {
            console.log("clicked....");
          }}
        />
      </TableCell>

      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        {variantData?.total || 0}
      </TableCell>
      {!isTrue && (
        <TableCell
          sx={{
            position: "sticky",
            right: 0,
            // background: "white",
          }}
          onClick={() => handleDelete(variantData?.id)}
        >
          <DeleteIcon sx={{ fontSize: "1.2rem" }} />
        </TableCell>
      )}
    </TableRow>
  );
}

export default CompositionItem;
