import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Button, MenuItem } from "@mui/material";
import Menu, { MenuProps } from "@mui/material/Menu";
import { alpha, styled, useTheme } from "@mui/material/styles";
import { ReactNode, useState } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";

interface ITableActionButton {
  onDeleteHandle?: () => void;
  children?: ReactNode;
}

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    elevation={0}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    minWidth: 125,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      // "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "0px 0px 5px 1px rgb(82 63 105 / 8%)",
    "& .MuiMenu-list": {
      padding: "8px",
    },
    "& .MuiMenuItem-root": {
      fontSize: "13px",
      fontWeight: "500",
      "& .MuiSvgIcon-root": {
        fontSize: 12,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
      "&:hover": {
        backgroundColor: "#f1faff",
        color: "#009ef7",
      },
    },
  },
}));

function TableActionButton(props: ITableActionButton) {
  const { onDeleteHandle, children } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const opened = Boolean(anchorEl);
  const theme = useTheme();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosed = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 1,
        "& svg": {
          cursor: "pointer",
        },
      }}
    >
      <Box>
        <Button
          disableElevation
          aria-controls={opened ? "demo-customized-menu" : undefined}
          aria-expanded={opened ? "true" : undefined}
          aria-haspopup="true"
          endIcon={<KeyboardArrowDownIcon />}
          id="demo-customized-button"
          sx={{
            backgroundColor: theme.palette.primary.tableButton?.main,
            fontSize: "12px",
            fontWeight: "500",
            padding: "8px 15px",
            "&:hover": {
              color: theme.palette.primary.tableButton?.main,
              backgroundColor: theme.palette.primary.tableButton?.light,
            },
            "&:focus": {
              backgroundColor: theme.palette.primary.tableButton?.light,
            },
            "&:active": {
              backgroundColor: theme.palette.primary.tableButton?.light,
            },
          }}
          variant="contained"
          onClick={handleClick}
        >
          Actions
        </Button>
        <StyledMenu
          anchorEl={anchorEl}
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          open={opened}
          onClose={handleClosed}
          sx={{
            "& .MuiMenu-list": {
              backgroundColor: theme.palette.primary.tableButton?.main,
            },
          }}
        >
          {children}
          <MenuItem
            disableRipple
            onClick={() => {
              handleClosed();
              if (onDeleteHandle) {
                onDeleteHandle();
              }
            }}
            sx={{
              backgroundColor: theme.palette.primary.tableButton?.main,
              color: theme.palette.common.black,
            }}
          >
            Delete
          </MenuItem>
        </StyledMenu>
      </Box>
    </Box>
  );
}

export default TableActionButton;
