import { Box, Checkbox, TableCell, TableRow } from "@mui/material";
import { useAlert } from "components/alert";
import DateTimeFormat from "components/dateTime-format";
import TableActionButton from "components/table/TableActionButton";
import { FILE_URL } from "config";
import useBundleAction from "hooks/catalog/bundle/useBundleAction";
import AppRoutes from "navigation/appRoutes";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";
import { IBundle } from "types/catalog/bundles/getBundleResponse";

interface IProps {
  bundle: IBundle;
  refetch: any;
}

function BundleItem(props: IProps) {
  const { bundle, refetch } = props;
  const navigate = useNavigate();
  const { deleteBundleAction } = useBundleAction();
  const goToDetails = async (id: number) => {
    // const response = await getBundleByIdAction(id)
    navigate(`${AppRoutes.CATALOG.bundleDetails}/${id}`);
  };
  const alert = useAlert();
  const {
    id,
    picture,
    name,
    barcode,
    updatedOn,
    createdOn,
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
        <Checkbox checked={false} color="primary" onChange={() => {}} />
      </TableCell>
      <TableCell
        sx={{
          width: 50,
          position: "sticky",
          left: 60,
          zIndex: 999,
          background: "white",
        }}
        onClick={() => goToDetails(1)}
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
        {name || "-"}
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
       {brandName || "-"}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          background: "white",
        }}
      >
        company
      </TableCell>

      <TableCell
        sx={{
          minWidth: 150,
          background: "white",
        }}
      >
        tags
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
