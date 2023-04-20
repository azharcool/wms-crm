import PercentIcon from "@mui/icons-material/Percent";
import { Box, TableCell, TableRow } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import TextField from "components/textfield";
import useBundleCompositionAction from "hooks/actions/catalog/bundlle-composition/useBundleCompositionAction";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import palette from "theme/palette";
import { IBundleCompositionList } from "..";

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

export interface SetBundleItemParam {
  id: number;
  value: string;
  name: string;
}

type SetBundleItem = (_: SetBundleItemParam) => void;
interface ICompositionItem {
  isManage: boolean;
  item: IBundleCompositionList;
  setBundleItem: SetBundleItem;
}

function CompositionItem(props: ICompositionItem) {
  const { isManage, item, setBundleItem } = props;
  const { deleteBundlCompeAction } = useBundleCompositionAction();
  const newtheme = useSelector((state: any) => state.theme);

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
        {item?.productName}
      </TableCell>
      <TableCell
        sx={{
          width: 100,
          position: "sticky",
          left: 0,
        }}
      >
        {item?.unitPrice || "not provided"}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 100,
        }}
      >
        <TextField
          isSelect
          disabled={!isManage}
          id="categorys"
          menuItems={conditionCode}
          name="conditionCode"
          size="small"
          value={item?.conditionCode}
          onSelectHandler={(e) => {
            setBundleItem({
              id: item.id,
              name: "conditionCode",
              value: e.target.value,
            });
          }}
        />
      </TableCell>
      <TableCell
        sx={{
          minWidth: 100,
        }}
      >
        <TextField
          disabled={!isManage}
          endIcon={<PercentIcon />}
          id="discount"
          name="discount"
          size="small"
          type="number"
          value={item?.discount}
          onChange={(e) => {
            setBundleItem({
              id: item.id,
              name: "discount",
              value: e.target.value,
            });
          }}
          onClickIcon={() => {}}
        />
      </TableCell>
      <TableCell
        sx={{
          minWidth: 100,
        }}
      >
        <TextField
          disabled={!isManage}
          id="qty"
          name="qty"
          size="small"
          type="number"
          value={item?.qty}
          onChange={(e) => {
            setBundleItem({
              id: item.id,
              name: "qty",
              value: e.target.value,
            });
          }}
          onClickIcon={() => {}}
        />
      </TableCell>

      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        {item?.total || 0}
      </TableCell>
      {isManage && (
        <TableCell
          sx={{
            position: "sticky",
            right: 0,
            background: newtheme.isDarkMode
              ? "#26263D"
              : palette.background.default,
          }}
        >
          <TableActionButton
            onDeleteHandle={() => {
              handleDelete(item?.id);
            }}
          />
        </TableCell>
      )}
    </TableRow>
  );
}

export default CompositionItem;
