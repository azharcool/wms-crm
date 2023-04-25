import {
  Box,
  Checkbox,
  Stack,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import NOImage from "assets/images/no-image.png";
import { useAlert } from "components/alert";
import dateTimeFormat from "components/dateTime-format";
import TableActionButton from "components/table/TableActionButton";
import CustomBodyTableCell, {
  CustomTableText,
} from "components/table/status-table-cell/CustomBodyTableCell";
import { FILE_URL } from "config";
import useBundleAction from "hooks/actions/catalog/bundle/useBundleAction";
import { useState } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSelectedBundleById } from "redux/catalog/bundleSelector";
import { setBundleId } from "redux/catalog/bundleSlice";
import { RootState, useAppDispatch } from "redux/store";
import AppRoutes from "routes/appRoutes";
import { IBundle } from "types/catalog/bundles/getBundleResponse";

interface IProps {
  bundle: IBundle;
}

function BundleItem(props: IProps) {
  const { bundle } = props;
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
          checked={getSelectedBundleByIdState}
          color="primary"
          onChange={select}
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
            alt=""
            src={
              picture.length > 0
                ? `${FILE_URL}${picture[0]?.atachment}`
                : NOImage
            }
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
          width: 150,
          position: "sticky",
          left: 130,
          zIndex: 999,
          cursor: "pointer",
        }}
        onClick={() => goToDetails(id)}
      >
        <CustomTableText text={name} link />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="-" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text={categoryName} />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text={brandName} />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="-" />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
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
                    paddingY: "4px",
                    margin: "2px",
                    fontSize: "11px",
                    fontWeight: "600",
                    width: "80px",
                    textAlign: "center",
                  }}
                >
                  <CustomTableText text={tag} />
                </Box>
              );
            })}
          </Stack>
        )}
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text={dateTimeFormat(createdOn)} />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text={dateTimeFormat(createdOn)} />
      </CustomBodyTableCell>
      <CustomBodyTableCell
        sx={{
          position: "sticky",
          right: 0,
          cursor: "pointer",
          backdropFilter: "blur(2px)",
        }}
      >
        <TableActionButton onDeleteHandle={handleBundleDelete} />
      </CustomBodyTableCell>
    </TableRow>
  );
}

export default BundleItem;
