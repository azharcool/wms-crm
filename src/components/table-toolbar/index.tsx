import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CreateIcon from "@mui/icons-material/Create";
import { Box, Button, Divider, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import palette from "theme/palette";

interface IBreadcrumb {
  link: string;
  to: string;
}
interface ITableToolbar {
  title: string;
  isAdd?: boolean;
  buttonText: string;
  handleClick?: () => void;
  breadcrumbs?: IBreadcrumb[];
}

function TableToolbar(props: ITableToolbar) {
  const { title, buttonText, handleClick, breadcrumbs, isAdd } = props;
  const navigation = useNavigate();
  const handleBread = (link: string) => {
    navigation(link);
  };

  return (
    <Box {...props}>
      <Box>
        <Stack spacing={2} sx={{ mt: 2 }}>
          {/* <Breadcrumbs
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
              {title}
            </Typography>
          </Breadcrumbs> */}
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
                  sx={{ color: "#000", fontSize: "1.0rem", fontWeight: "700" }}
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
                  sx={{ color: "#000", fontSize: "1.0rem", fontWeight: "700" }}
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
          <Box sx={{ m: 1, display: "flex", gap: 5, alignItems: "center" }}>
            <Button
              sx={{
                // backgroundColor: palette.info.main,
                width: "inherit",
                borderRadius: "5px",
                padding: "5px 25px",
                backgroundColor: palette.warning.dark,
                color: "#fff",
              }}
              variant="contained"
              onClick={() => {
                handleClick?.();
              }}
            >
              {isAdd ? (
                <AddCircleIcon
                  sx={{
                    fontSize: 18,
                    mr: 1,
                  }}
                />
              ) : (
                <CreateIcon
                  sx={{
                    fontSize: 16,
                    mr: 1,
                  }}
                />
              )}
              <Typography
                component="span"
                sx={{ fontSize: { xs: "1rem", xl: "1.1rem" } }}
              >
                {buttonText}
              </Typography>
            </Button>
          </Box>
        </Box>
        <Divider />
        {/* <Box sx={{ maxWidth: 500, mt: 3, width: "100%", marginLeft: "auto" }}>
          <TextField
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <SvgIcon color="action" fontSize="small">
                    <SearchIcon />
                  </SvgIcon>
                </InputAdornment>
              ),
            }}
            placeholder="Search Users..."
            variant="outlined"
          />
        </Box> */}
      </Box>
    </Box>
  );
}

export default TableToolbar;
