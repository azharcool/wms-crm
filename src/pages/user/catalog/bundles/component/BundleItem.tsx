import { Box, Checkbox, Stack, TableCell, TableRow } from "@mui/material";
import { useAlert } from "components/alert";
import DateTimeFormat from "components/dateTime-format";
import TableActionButton from "components/table/TableActionButton";
import useBundleAction from "hooks/catalog/bundle/useBundleAction";
import AppRoutes from "navigation/appRoutes";
import { useState } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSelectedBundleById } from "redux/catalog/bundleSelector";
import { setBundleId } from "redux/catalog/bundleSlice";
import { RootState, useAppDispatch } from "redux/store";
import { IBundle } from "types/catalog/bundles/getBundleResponse";

interface IProps {
  bundle: IBundle;
  refetch: any;
}

function BundleItem(props: IProps) {
  const { bundle, refetch } = props;
  const navigate = useNavigate();
  const [tags, setTags] = useState<any>([]);
  const { deleteBundleAction } = useBundleAction();
  const goToDetails = async (id: number) => {
    navigate(`${AppRoutes.CATALOG.bundleDetails}/${id}`, {
      state: { bundleId: id },
    });
  };

  const getSelectedBundleByIdState = useSelector((state: RootState) =>
    getSelectedBundleById(state, bundle.id),
  );

  const dispatch = useAppDispatch();

  const select = () => {
    dispatch(setBundleId(bundle.id));
  };

  const alert = useAlert();
  const {
    id,
    picture,
    name,
    barcode,
    updatedOn,
    createdOn,
    tag,
    categoryName,
    brandName,
  } = bundle;

  const handleBundleDelete = async () => {
    alert?.show({
      title: "Confirmation",
      message: "Do you really want to delete bundle",
      cancelText: "No",
      confirmText: "Yes",
      onConfirm: async () => {
        await deleteBundleAction(id);
        refetch();
      },
    });
  };

  return (
    <TableRow>
      <TableCell
        padding="checkbox"
        sx={{
          width: 60,
          position: "sticky",
          left: 0,
          zIndex: 999,
          background: "white",
        }}
      >
        <Checkbox
          checked={getSelectedBundleByIdState}
          color="primary"
          onChange={select}
        />
      </TableCell>
      <TableCell
        sx={{
          width: 50,
          position: "sticky",
          left: 60,
          zIndex: 999,
          background: "white",
        }}
        onClick={() => goToDetails(id)}
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
          {/* <img
            alt=""
            src={`${FILE_URL}${picture[0]?.atachment}`}
            width="100%"
          /> */}
        </Box>
      </TableCell>

      <TableCell
        sx={{
          width: 150,
          position: "sticky",
          left: 130,
          zIndex: 999,
          background: "white",
        }}
      >
        {name || "not provided"}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          background: "white",
        }}
      >
        INR
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          background: "white",
        }}
      >
        {categoryName || "-"}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          background: "white",
        }}
      >
        {brandName || "not provided"}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          background: "white",
        }}
      >
        not provided
      </TableCell>

      <TableCell
        sx={{
          minWidth: 150,
          background: "white",
        }}
      >
        {tag && (
          <Stack flexDirection="row" flexWrap="wrap">
            {tag.split(",").map((tag) => {
              return (
                <Box
                  key={tag}
                  sx={{
                    borderRadius: "16px",
                    background: "#fbdeba",
                    color: "#8f391c",
                    padding: "4px 8px",
                    margin: "2px",
                    fontSize: "12px",
                  }}
                >
                  {tag}
                </Box>
              );
            })}
          </Stack>
        )}
      </TableCell>

      <TableCell
        sx={{
          minWidth: 150,
          background: "white",
        }}
      >
        {DateTimeFormat(createdOn)}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          background: "white",
        }}
      >
        {DateTimeFormat(createdOn)}
      </TableCell>
      <TableCell
        sx={{
          position: "sticky",
          right: 0,
          background: "white",
        }}
      >
        <TableActionButton onDeleteHandle={handleBundleDelete} />
      </TableCell>
    </TableRow>
  );
}

export default BundleItem;
