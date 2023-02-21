import AddCircleIcon from "@mui/icons-material/AddCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Stack, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import palette from "theme/palette";

type Handler = (_: string) => void;
interface IAccordionItems {
  label: string;
  leftIcon: React.ReactNode;
  total: number;
  details?: string;
  selectedExpandedPanel: string;
  expanded: string;
  handleChange: Handler;
  handleToggle: <T>(_: T) => void;
  children?: React.ReactNode;
  hasPopup?: boolean;
  data?: any[];
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
    hasPopup,
    data,
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
          padding: "8px",
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
              paddingLeft: "5px",
              fontSize: { xs: "0.8rem", lg: "0.9rem", xl: "1.1rem" },
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

        {hasPopup ? (
          <AddCircleIcon
            sx={{
              color: palette.secondary.lightGray,
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleToggle(expanded);
            }}
          />
        ) : null}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}

export default AccordionItems;
