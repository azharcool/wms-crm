import { Box, Checkbox, TableCell, TableRow } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import { FILE_URL } from "config";
import useGetByIdBundle from "hooks/querys/catalog/bundle/useGetByIdBundle";
import AppRoutes from "navigation/appRoutes";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";
import { IBundle } from "types/catalog/bundles/getBundleResponse";

interface IProps {
  bundle: IBundle;
}

function BundleItem(props: IProps) {
  const { bundle } = props;
  const navigate = useNavigate();
  const goToDetails = async (id: number) => {
    // const response = await getBundleByIdAction(id)
    navigate(`${AppRoutes.CATALOG.bundleDetails}/${id}`);
  };

  const {
    picture,
    name,
    barcode,
    updatedOn,
    createdOn,
    categoryName,
    brandName,
  } = bundle;

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
          <img alt="new" src={`${FILE_URL}${picture[0]?.atachment}`} width="100%" />
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
        {name}
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
        {categoryName}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          background: "white",
        }}
      >
        {brandName}
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
        {createdOn}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          background: "white",
        }}
      >
        {createdOn}
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

export default BundleItem;
