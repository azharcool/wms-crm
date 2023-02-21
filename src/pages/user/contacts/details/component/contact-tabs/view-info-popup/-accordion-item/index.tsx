import AddCircleIcon from "@mui/icons-material/AddCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Stack, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import { InfoAccToggle } from "pages/user/contacts/details/type";
import palette from "theme/palette";

type Handler = (_: string) => void;
interface IAccordionItems {
  label: string;
  leftIcon: React.ReactNode;
  total: number;
  details: string;
  selectedExpandedPanel: string;
  expanded: string;
  handleChange: Handler;
  handleToggle: (_: keyof InfoAccToggle) => void;
  children?: React.ReactNode;
  hasForm?: boolean;
}
function AccordionItems(props: IAccordionItems) {
  const {
    label,
    leftIcon,
    total,
    details,
    expanded,
    selectedExpandedPanel,
    handleChange,
    handleToggle,
    children,
    hasForm,
  } = props;

  return (
    <Accordion
      expanded={expanded === selectedExpandedPanel}
      sx={{
        marginTop: 2,
      }}
      onChange={() => {
        if (expanded === selectedExpandedPanel) {
          handleChange("");
        } else {
          handleChange(expanded);
        }
      }}
    >
      <AccordionSummary
        aria-controls="panel2a-content"
        expandIcon={<ExpandMoreIcon />}
        id="panel2a-header"
        sx={{
          "& .MuiAccordionSummary-content": {
            justifyContent: "space-between",
          },
          backgroundColor: palette.info.lightBg,
        }}
      >
        <Stack alignItems="center" direction="row">
          {leftIcon}

          <Typography
            sx={{
              paddingLeft: 1,
            }}
          >
            {label}
          </Typography>
          <Box
            sx={{
              marginLeft: 1,
              width: 25,
              height: 25,
              // padding: 0.6,
              borderRadius: 50,
              backgroundColor: palette.background.default,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {total}
          </Box>
        </Stack>

        {hasForm ? (
          <AddCircleIcon
            sx={{
              color: palette.secondary.lightGray,
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleToggle(expanded as keyof InfoAccToggle);
            }}
          />
        ) : null}
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{details}</Typography>
        {children}
      </AccordionDetails>
    </Accordion>
  );
}

export default AccordionItems;
