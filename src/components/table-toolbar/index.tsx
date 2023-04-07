import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Button, Divider, Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import BulkActionButton from "components/button/BulkActionButton";
import { useLocation, useNavigate } from "react-router-dom";
import palette from "theme/palette";

interface IBreadcrumb {
  link: string;
  to: string;
}
interface ITableToolbar {
  title: string;
  isAdd?: boolean;
  buttonText?: any;
  handleClick?: any;
  isBulkDisabled?: boolean;
  breadcrumbs?: IBreadcrumb[];
  navTitle?: string;
  rightActions?: IRightActions[];
  hasBulk?: boolean;
  onBulkHandle?: (_: string) => void;
}

interface IRightActions {
  id: string;
  title: string;
  onClick?: any;
  icon: React.ReactNode;
}

interface ITooblarButton {
  handleClick: () => void;
  title: string;
  icon: React.ReactNode;
}

export function ToolBarButton(props: ITooblarButton) {
  const { handleClick, title, icon } = props;

  return (
    <Box sx={{ m: 1, display: "flex", gap: 5, alignItems: "center" }}>
      <Button
        sx={{
          width: "inherit",
          borderRadius: "5px",
          padding: "5px 25px",
          backgroundColor: palette.warning.dark,
          color: "#fff",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: palette.warning.dark,
            opacity: 0.6,
            boxShadow: "none",
          },
        }}
        variant="contained"
        onClick={() => {
          handleClick?.();
        }}
      >
        {icon}
        <Typography
          component="span"
          sx={{ fontSize: { xs: "1rem", xl: "1.1rem" } }}
        >
          {title}
        </Typography>
      </Button>
    </Box>
  );
}

function TableToolbar(props: ITableToolbar) {
  const {
    title,
    breadcrumbs,
    navTitle,
    rightActions,
    hasBulk,
    onBulkHandle,
    isBulkDisabled,
  } = props;
  const location = useLocation();
  const navigation = useNavigate();

  const isWarehouse = location.pathname.includes("warehouse");

  const handleBread = (link: string) => {
    navigation(link);
  };

  return (
    <Box {...props}>
      <Box>
        <Stack spacing={2} sx={{ mt: 2 }}>
          <Breadcrumbs
            aria-label="breadcrumb"
            separator={<NavigateNextIcon fontSize="small" />}
          >
            {breadcrumbs?.map((item: IBreadcrumb) => {
              const { link, to } = item;
              return (
                <Link
                  key={1}
                  color="inherit"
                  underline="hover"
                  onClick={() => handleBread(to)}
                >
                  {link}
                </Link>
              );
            })}
            ,
            <Typography key="3" color="text.primary">
              {navTitle || title}
            </Typography>
          </Breadcrumbs>
        </Stack>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            p: 1,
          }}
        >
          <Typography
            sx={{ m: 1, color: palette.text.secondary, fontSize: 20 }}
            variant="h4"
          >
            {title}
          </Typography>

          {isWarehouse ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  padding: "5px 15px",
                  border: "1px dashed #ccc",
                  borderRadius: "8px",
                  width: "115px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <ArrowUpwardIcon
                    // fontSize="small"
                    sx={{
                      color: "#50cd89",
                      marginRight: "2px",
                      fontSize: "1.0rem",
                    }}
                  />
                  <Box
                    sx={{
                      color: "#000",
                      fontSize: "1.0rem",
                      fontWeight: "700",
                    }}
                  >
                    5485
                  </Box>
                </Box>
                <Typography
                  sx={{
                    color: "#b5b5c3",
                    fontSize: "13px",
                    lineHeight: "1",
                    textAlign: "center",
                  }}
                >
                  Warehouses
                </Typography>
              </Box>

              <Box
                sx={{
                  padding: "5px 15px",
                  border: "1px dashed #ccc",
                  borderRadius: "8px",
                  width: "115px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <ArrowUpwardIcon
                    // fontSize="small"
                    sx={{
                      color: "#50cd89",
                      marginRight: "2px",
                      fontSize: "1.0rem",
                    }}
                  />
                  <Box
                    sx={{
                      color: "#000",
                      fontSize: "1.0rem",
                      fontWeight: "700",
                    }}
                  >
                    6564
                  </Box>
                </Box>
                <Typography
                  sx={{
                    color: "#b5b5c3",
                    fontSize: "13px",
                    lineHeight: "1",
                    textAlign: "center",
                  }}
                >
                  Locations
                </Typography>
              </Box>
            </Box>
          ) : null}

          <Stack direction="row" gap={1}>
            {hasBulk ? (
              <BulkActionButton
                isDisabled={isBulkDisabled}
                onBulkHandle={onBulkHandle}
              />
            ) : null}
            {rightActions?.map((item) => {
              return (
                <ToolBarButton
                  key={item.id}
                  handleClick={item.onClick}
                  icon={item.icon}
                  title={item.title}
                />
              );
            })}
          </Stack>
        </Box>
        <Divider />
      </Box>
    </Box>
  );
}

export default TableToolbar;
