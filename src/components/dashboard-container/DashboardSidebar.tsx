import { Box, Drawer, useMediaQuery } from "@mui/material";
import palette from "theme/palette";
import { isScreenAccessible, logoURL } from "utils";
import NavItem from "./NavItem";
import { sideNavMenu } from "./sideBarNavMenu";

export function DashboardSidebar(props: any) {
  const { open, onClose } = props;

  const lgUp = useMediaQuery(
    (theme: any) => {
      return theme.breakpoints.up("lg");
    },
    {
      defaultMatches: true,
      noSsr: false,
    },
  );

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          // background: "linear-gradient(0deg,#eb5c2c 2%,#f39521 52%,#f39521)",
          backgroundColor: "#4b0808",
          color: "#000",
        }}
      >
        <Box
          sx={{
            display: "flex",
            paddingTop: 2,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img alt="logo" height="80" src={logoURL} width="80%" />
        </Box>

        <Box sx={{ flexGrow: 1, color: "#000", fontSize: "0.8rem", my: 2 }}>
          {sideNavMenu.map((item) => {
            return isScreenAccessible(item.screenCode) ? (
              <NavItem key={item.id} item={item} />
            ) : null;
          })}
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        open
        anchor="left"
        PaperProps={{
          sx: {
            width: 250,
            borderRightColor: palette.info.dark,
            borderRight: "none",
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={open}
      PaperProps={{
        sx: {
          color: "#000",
          borderRight: "none",
          width: 250,
        },
      }}
      variant="temporary"
      onClose={onClose}
    >
      {content}
    </Drawer>
  );
}

export default { DashboardSidebar };
