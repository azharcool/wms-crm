import { Button, ListItem, styled, Typography } from "@mui/material";
import { Link as RRDLink } from "react-router-dom";
import palette from "theme/palette";

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

function NavItem(props: any) {
  const { href, icon, title, ...others } = props;
  const active = window.location.pathname.includes(href);

  return (
    <ListItem
      disableGutters
      sx={{
        display: "flex",
        mb: 0.5,
        py: 0,
        px: 0.5,
      }}
      {...others}
    >
      <Link to={href}>
        <Button
          disableRipple
          component="a"
          startIcon={icon}
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
          <Typography component="p" color="white" sx={{ flexGrow: 1, fontSize: "inherit" }}>
            {title}
          </Typography>
        </Button>
      </Link>
    </ListItem>
  );
}

export default NavItem;
