/* eslint-disable import/namespace */
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CircleIcon from "@mui/icons-material/Circle";
import palette from "theme/palette";
import { Button, ListItem, Stack, styled, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { Link as RRDLink } from "react-router-dom";
import { IMenuItems, ISideNavMenu } from "./DashboardSidebar";

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
}

function NavItem(props: INavItem) {
  const { item } = props;

  const active = window.location.pathname.includes(item?.href || "");

  return item.menuItems?.length > 0 ? (
    <Accordion
      square
      id="panel1-accordian"
      sx={{
        backgroundColor: "transparent",
        "&::before": {
          backgroundColor: "transparent",
        },
      }}
    >
      <AccordionSummary
        aria-controls="panel1a-content"
        expandIcon={
          <ExpandMoreIcon
            sx={{
              color: "#fffff",
            }}
          />
        }
        id="panel1a-header"
        sx={{
          borderRadius: 0,
          backgroundColor: active ? palette.info.main : "transparent",
          "&::before": {
            backgroundColor: "transparent",
          },
          "& .MuiButton-startIcon": {
            color: "white",
          },
          "&:hover": {
            backgroundColor: palette.sidebar.navHover,
          },
        }}
      >
        <Typography
          sx={{
            color:  "#ffff",
          }}
        >
          {item.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {item.menuItems.map((item) => {
          return <MenuListItem item={item} />;
        })}
      </AccordionDetails>
    </Accordion>
  ) : (
    <ListItem
      disableGutters
      sx={{
        display: "flex",
        mb: 0.5,   
        py: 0,
        px: 0.5,
      }}
      // {...others}
    >
      <Link to={item?.href || ""}>
        <Button
          disableRipple
          component="a"
          // startIcon={icon}
          sx={{
            // backgroundColor: active && "rgba(255,255,255, 0.08)",
            borderRadius: 1,
            color: palette.text.primary,
            backgroundColor: active ? palette.info.main : "transparent",
            // fontWeight: active && "fontWeightBold",
            justifyContent: "flex-start",
            px: 2,
            textAlign: "left",
            textTransform: "none",
            width: "100%",
            "& .MuiButton-startIcon": {
              color: "white",
            },
            "&:hover": {
              backgroundColor: palette.sidebar.navHover,
            },
          }}
        >
          <Typography
            component="p"
            color="white"
            sx={{ flexGrow: 1, fontSize: "inherit" }}
          >
            {item.title}
          </Typography>
        </Button>
      </Link>
    </ListItem>
  );

  // return (
  //   <ListItem
  //     disableGutters
  //     sx={{
  //       display: "flex",
  //       mb: 0.5,
  //       py: 0,
  //       px: 0.5,
  //     }}
  //     {...others}
  //   >
  //     <Link to={href}>
  //       <Button
  //         disableRipple
  //         component="a"
  //         startIcon={icon}
  //         sx={{
  //           // backgroundColor: active && "rgba(255,255,255, 0.08)",
  //           borderRadius: 1,
  //           color: palette.text.primary,
  //           backgroundColor: active ? palette.info.main : "transparent",
  //           // fontWeight: active && "fontWeightBold",
  //           justifyContent: "flex-start",
  //           px: 2,
  //           textAlign: "left",
  //           textTransform: "none",
  //           width: "100%",
  //           "& .MuiButton-startIcon": {
  //             color: "white",
  //           },
  //           "&:hover": {
  //             backgroundColor: palette.sidebar.navHover,
  //           },
  //         }}
  //       >
  //         <Typography component="p" color="white" sx={{ flexGrow: 1, fontSize: "inherit" }}>
  //           {title}
  //         </Typography>
  //       </Button>
  //     </Link>
  //   </ListItem>
  // );
}

export default NavItem;
