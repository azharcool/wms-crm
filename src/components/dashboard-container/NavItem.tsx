/* eslint-disable import/namespace */
import CircleIcon from "@mui/icons-material/Circle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Stack, styled, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { useDispatch, useSelector } from "react-redux";
import { Link as RRDLink, useLocation, useNavigate } from "react-router-dom";
import { getExpandedSelected } from "redux/side-dashboard/sideDashboardSelector";
import { setExpanded } from "redux/side-dashboard/sideDashboardSlice";
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
  parent: string;
}

function MenuListItem(props: IMenuListItem) {
  const { item, parent } = props;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const active = pathname.includes(item?.location || "");

  return (
    <Stack
      alignItems="center"
      direction="row"
      gap={1}
      sx={{
        backgroundColor: active ? "#00000038" : "inherit",
        padding: active ? "5px" : "0",
        borderRadius: "5px",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#eacbcb38",
          padding: "5px",
        },
      }}
      onClick={() => {
        dispatch(setExpanded(parent));
        navigate(item.location);
      }}
    >
      <CircleIcon
        sx={{
          color: active ? "#e65100d3" : "#ffffffb1",
          fontSize: "12px",
        }}
      />
      <Typography
        component="a"
        sx={{
          fontSize: "16px",
          color: active ? "#e65100d3" : "#ffffff91",
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
}

function NavItem(props: INavItem) {
  const { item } = props;
  const getExpanded = useSelector(getExpandedSelected);
  const dispatch = useDispatch();
  const expandedActive = item.href === getExpanded;

  return item.menuItems?.length > 0 ? (
    <Accordion
      square
      expanded={expandedActive}
      id="panel1-accordian"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        "&:before": {
          boxShadow: "none",
        },
      }}
      onChange={() => {
        dispatch(setExpanded(item.href || ""));
      }}
    >
      <AccordionSummary
        aria-controls="panel1a-content"
        expandIcon={
          <ExpandMoreIcon
            sx={{
              fill: expandedActive
                ? "rgba(255, 166, 0)"
                : "rgba(255, 166, 0, 0.847)",
            }}
          />
        }
        id="panel1a-header"
        sx={{
          borderRadius: 0,
          backgroundColor: expandedActive ? "#00000038" : "#4b0808",
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
            color: expandedActive
              ? "rgba(255, 166, 0)"
              : "rgba(255, 166, 0, 0.847)",
          }}
        >
          {item.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {item.menuItems.map((menu) => {
          return (
            <MenuListItem key={menu.id} item={menu} parent={item.href || ""} />
          );
        })}
      </AccordionDetails>
    </Accordion>
  ) : (
    <Accordion
      square
      expanded={expandedActive}
      id="panel1-accordian"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        "&:before": {
          boxShadow: "none",
        },
      }}
      onClick={() => {
        dispatch(setExpanded(item.href || ""));
      }}
    >
      <Link to={item?.href || ""}>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            borderRadius: 0,
            backgroundColor: expandedActive ? "#00000038" : "#4b0808",
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
              color: expandedActive
                ? "rgba(255, 166, 0)"
                : "rgba(255, 166, 0, 0.847)",
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
