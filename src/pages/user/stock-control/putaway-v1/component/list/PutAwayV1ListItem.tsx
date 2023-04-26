import { Box, Checkbox, TableCell, TableRow } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import NOImage from "assets/images/no-image.png";
import CustomBodyTableCell, {
  CustomTableText,
} from "components/table/status-table-cell/CustomBodyTableCell";
import StatusTableCell from "components/table/status-table-cell";
import TextField from "components/textfield";
import "react-perfect-scrollbar/dist/css/styles.css";

const conditionCode = [
  {
    id: "STG",
    value: "STG",
  },
  {
    id: "STG-DST-A-1-1-1",
    value: "STG-DST-A-1-1-1",
  },
  {
    id: "STG-DST",
    value: "STG-DST",
  },
];
interface IPutAwayV1ListItem {
  item: any;
}

function PutAwayV1ListItem(props: IPutAwayV1ListItem) {
  const { item } = props;
  const theme = useTheme();

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
          // checked={}
          // onChange={}
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
        <CustomTableText text="PT-82061" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="Protein Powder PROTEIPOWDER-899" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText
          text={
            <StatusTableCell
              success={item?.status !== 2}
              title={item?.status === 2 ? "NEW" : "COMPLETED"}
            />
          }
        />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="50" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text={
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
        } />
        </CustomBodyTableCell>
      

      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
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
      </TableCell>
      <CustomBodyTableCell>
        <CustomTableText text="from location"/>
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="duration"/>
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="created date"/>
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="updated on"/>
      </CustomBodyTableCell>
    </TableRow>
  );
}

export default PutAwayV1ListItem;
