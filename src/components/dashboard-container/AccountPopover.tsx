import { Box, MenuItem, MenuList, Popover, Typography } from "@mui/material";
import useDecodedData from "hooks/useDecodedData";
import useUserInfo from "hooks/useUserInfo";
import { useAdminLogout } from "pages/auth/login/query/useLogOut";

function AccountPopover(props: any) {
  const { anchorEl, onClose, open, ...other } = props;
  const { user } = useUserInfo();
  const decode = useDecodedData();
  const { tryLogout } = useAdminLogout();

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "left",
        vertical: "bottom",
      }}
      open={open}
      PaperProps={{
        sx: { width: "300px" },
      }}
      sx={{ top: "10px" }}
      onClose={onClose}
      {...other}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2,
        }}
      >
        <Typography variant="overline">Account</Typography>
        <Typography color="text.secondary" variant="body2">
          {user?.fullName}
        </Typography>
      </Box>
      <MenuList
        disablePadding
        sx={{
          "& > *": {
            "&:first-of-type": {
              borderTopColor: "divider",
              borderTopStyle: "solid",
              borderTopWidth: "1px",
            },
            padding: "12px 16px",
          },
        }}
      >
        <MenuItem
          onClick={async () => {
            await tryLogout(decode.id);
          }}
        >
          Sign out
        </MenuItem>
      </MenuList>
    </Popover>
  );
}

export default AccountPopover;
