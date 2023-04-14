import { Checkbox, TableCell, TableRow, Typography } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import useAdjustmentAction from "hooks/actions/stock/adjustment/useAdjustmentAction";
import AppRoutes from "navigation/appRoutes";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "redux/store";
import palette from "theme/palette";

// interface IAdjustmentListItem {
//   item: GetAllAdjustmentResponseData;
// }

function MovementListItem() {
  const newtheme = useSelector((state: any) => state.theme);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  //   const getSelectedAdjustmentByIdState = useSelector((state: RootState) =>
  //     getSelectedAdjustmentById(state, Number(item.id)),
  //   );

  //   const select = () => {
  //     dispatch(setAdjustmentId(item.id));
  //   };
  const { deleteAdjustmentAsync } = useAdjustmentAction();

  const {
    stockControl: {
      layout,
      adjustment: { details, generalDetails },
    },
  } = AppRoutes;

  return (
    <TableRow>
      <TableCell
        padding="checkbox"
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
        <Checkbox
          //   checked={getSelectedAdjustmentByIdState}
          color="primary"
          //   onChange={select}
        />
      </TableCell>
      <TableCell
        sx={{
          width: 50,
          position: "sticky",
          left: 40,
          zIndex: 999,
          background: newtheme.isDarkMode
            ? "#26263D"
            : palette.background.default,
          cursor: "pointer",
        }}
        // onClick={() => {
        //   dispatch(
        //     setAdjustment({
        //       id: item.id,
        //       name: item.sa,
        //     }),
        //   );
        //   navigate(`/${layout}/${details}/${item.id}/${generalDetails}`);
        // }}
      >
        <Typography
          sx={{
            textDecoration: "underline",
            whiteSpace: "nowrap", //! Dont remove
          }}
        >
          {/* {item.sa || "-"} */}
        </Typography>
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* {item.lineItem || "-"} */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* {item.qtyChange || "-"} */}
      </TableCell>

      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* {item.reason || "-"} */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* {item.referenceId || "-"} */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* {item.status || "-"} */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* {item.updatedOn || "-"} */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* {item.notes || "-"} */}
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
        <TableActionButton
          onDeleteHandle={() => {
            // deleteAdjustmentAsync(item.id);
          }}
        />
      </TableCell>
    </TableRow>
  );
}

export default MovementListItem;
