import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Checkbox, Divider, FormControlLabel } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { IPermission } from "pages/admin/settings/screens/permissions/query/useFetchPermissions";
import { IScreenAccessRequest } from "../query/useApiAction";

interface IAccessAccordion {
  title: string;
  id: number;
  selectedData: IScreenAccessRequest;
  selectedScreenIds: number[];
  permissions: IPermission[];
  handleSelectScreen: (id: number) => void;
  handleSelectControl: (screenId: number, id: number) => void;
}

function AccessAccordion(props: IAccessAccordion) {
  const {
    title,
    id,
    selectedData,
    permissions,
    handleSelectScreen,
    handleSelectControl,
  } = props;

  const isExistScreen = selectedData?.screens?.find(
    (screen: any) => screen.screenId === id,
  );

  return (
    <Box>
      <Accordion sx={{ py: 2 }}>
        <AccordionSummary
          aria-controls="panel2a-content"
          expandIcon={<ExpandMoreIcon />}
          id={`panel2a-header${title}`}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Checkbox
              checked={isExistScreen?.screenId === id}
              color="primary"
              //   indeterminate={
              //     selectedUserIds.length > 0 && selectedUserIds.length < total
              //   }
              onClick={(e) => {
                e.stopPropagation();
                handleSelectScreen(id);
              }}
            />
            <Typography>{title}</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Divider />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              pt: 2,
            }}
          >
            {permissions?.map((permission: IPermission) => {
              const isExistPermission = isExistScreen?.permissions?.find(
                (data: any) => data.permissionId === permission.id,
              );
              return (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={
                          isExistPermission?.permissionId === permission.id
                        }
                        color="primary"
                        onChange={() => {
                          handleSelectControl(id, permission.id);
                        }}
                      />
                    }
                    label={permission?.permissions}
                  />
                </Box>
              );
            })}
          </Box>
        </AccordionDetails>
      </Accordion>
      <Divider />
    </Box>
  );
}

export default AccessAccordion;
