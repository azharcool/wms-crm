/* eslint-disable import/namespace */
import CircleIcon from "@mui/icons-material/Circle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Stack, styled, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { Dispatch, SetStateAction } from "react";
import { Link as RRDLink, useLocation } from "react-router-dom";
import palette from "theme/palette";
import { IMenuItems, ISideNavMenu } from "./sideBarNavMenu";

const Link = styled(RRDLink)`
  text-decoration: none;
  width: 100%;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

interface IMenuListItem {
  item: IMenuItems;
}

function MenuListItem(props: IMenuListItem) {
  const { item } = props;
  const active = window.location.pathname.includes(item?.location || "");

  return (
    <Stack alignItems="center" direction="row" gap={1}>
      <CircleIcon
        sx={{
          color: active ? palette.info.main : "#ffff",
          fontSize: "12px",
        }}
      />
      <Typography
        component="a"
        href={item.location}
        sx={{
          fontSize: "16px",
          color: active ? palette.info.main : "#ffff",
          fontWeight: "500",
          textDecoration: "none",
        }}
      >
        {item.title}
      </Typography>
    </Stack>
  );
}

interface INavItem {
  item: ISideNavMenu;
  expanded: string;
  setExpanded: Dispatch<SetStateAction<string>>;
}

function NavItem(props: INavItem) {
  const { item, expanded, setExpanded } = props;
  const location = useLocation();
  const active = item.href === (expanded || location.pathname);

  return item.menuItems?.length > 0 ? (
    <Accordion
      square
      expanded={active}
      id="panel1-accordian"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        "&:before": {
          boxShadow: "none",
        },
      }}
      onChange={() => {
        setExpanded(item.href || "");
      }}
    >
      <AccordionSummary
        aria-controls="panel1a-content"
        expandIcon={
          <ExpandMoreIcon
            sx={{
              fill: active ? "rgba(255, 166, 0)" : "rgba(255, 166, 0, 0.847)",
            }}
          />
        }
        id="panel1a-header"
        sx={{
          borderRadius: 0,
          backgroundColor: active ? "#00000038" : "#4b0808",
          "&::before": {
            backgroundColor: "transparent",
          },
          "& .MuiButton-startIcon": {
            color: "white",
          },
          "&:hover": {
            backgroundColor: "#eacbcb38",
          },
        }}
      >
        <Typography
          sx={{
            color: active ? "rgba(255, 166, 0)" : "rgba(255, 166, 0, 0.847)",
          }}
        >
          {item.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {item.menuItems.map((item) => {
          return <MenuListItem key={item.id} item={item} />;
        })}
      </AccordionDetails>
    </Accordion>
  ) : (
    <Accordion
      square
      expanded={active}
      id="panel1-accordian"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        "&:before": {
          boxShadow: "none",
        },
      }}
    >
      <Link to={item?.href || ""}>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            borderRadius: 0,
            backgroundColor: active ? "#00000038" : "#4b0808",
            "&::before": {
              backgroundColor: "transparent",
            },
            "& .MuiButton-startIcon": {
              color: "white",
            },
            "&:hover": {
              backgroundColor: "#eacbcb38",
            },
          }}
        >
          <Typography
            sx={{
              color: active ? "rgba(255, 166, 0)" : "rgba(255, 166, 0, 0.847)",
            }}
          >
            {item.title}
          </Typography>
        </AccordionSummary>
      </Link>
    </Accordion>
  );
}

export default NavItem;
