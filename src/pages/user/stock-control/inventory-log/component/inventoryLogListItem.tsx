import { Box, Checkbox, TableCell, TableRow } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import NOImage from "assets/images/no-image.png";
import StatusTableCell from "components/table/status-table-cell";
import CustomBodyTableCell, {
  CustomTableText,
} from "components/table/status-table-cell/CustomBodyTableCell";
import TextField from "components/textfield";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";
import AppRoutes from "routes/appRoutes";

const conditionCode = [
  {
    id: "",
    value: "",
  },
  {
    id: "",
    value: "",
  },
  {
    id: "",
    value: "",
  },
];

function InventoryLogListItem(props: { item: any }) {
  const { item } = props;
  const navigate = useNavigate();
  const theme = useTheme();
  const {
    stockControl: {
      layout,
      recieve: { details, general },
    },
  } = AppRoutes;

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
          checked={false}
          sx={{
            color: theme.palette.primary.darkBlue,
            "&.Mui-checked": {
              color: theme.palette.primary.darkBlue,
            },
          }}
        />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText
          text={
            <Box
              sx={{
                width: "40px",
                height: "40px",
              }}
            >
              <img
                alt="new"
                src={NOImage}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
              />
            </Box>
          }
        />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="PT-8204" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="INR.123" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText
          text={
            <StatusTableCell
              success={item?.status !== 1}
              title={item?.status === 1 ? "NEW" : "CANCELLED"}
            />
          }
        />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="50" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText
          text={
            <TextField
              disabled
              isSelect
              id="categorys"
              menuItems={conditionCode}
              name="conditionCode"
              size="small"
              value={conditionCode[0].value}
              onSelectHandler={(e) => {}}
            />
          }
        />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText
          text={
            <TextField
              disabled
              isSelect
              id="categorys"
              menuItems={conditionCode}
              name="conditionCode"
              size="small"
              value={conditionCode[1].value}
              onSelectHandler={(e) => {}}
            />
          }
        />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="50" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="50" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="Created date" />
      </CustomBodyTableCell>
    </TableRow>
  );
}

export default InventoryLogListItem;
