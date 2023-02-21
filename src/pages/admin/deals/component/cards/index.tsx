import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import FormatColorFillOutlinedIcon from "@mui/icons-material/FormatColorFillOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import { Button, Card, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses, TooltipProps } from "@mui/material/Tooltip";
import { Box } from "@mui/system";

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

function DealsCard() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          backgroundColor: "#e5e8ef",
          width: "28%",
          height: "100vh",
        }}
      >
        <Box>
          <Card
            sx={{
              width: "90%",
              margin: 1.8,
              boxShadow: "none",
              transition: "box-shadow 0.3s ease-in-out",
              "&:hover": {
                boxShadow: "0px -5px 0px 0px black",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0.3rem 0.8rem 0rem 0.8rem",
              }}
            >
              <Box>
                <BootstrapTooltip placement="top" title="Riyaz sheikh">
                  <Typography sx={{ cursor: "pointer" }}>
                    Riyaz sheikh
                  </Typography>
                </BootstrapTooltip>
              </Box>
              <Box>
                <IconButton aria-label="delete">
                  <EditIcon color="info" />
                </IconButton>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0rem 0.8rem 2rem 0.8rem",
              }}
            >
              <Box>
                <Tooltip
                  arrow
                  describeChild
                  placement="right"
                  title="Fab 10 2023"
                >
                  <Button
                    color="info"
                    sx={{ height: "25px" }}
                    variant="contained"
                  >
                    1 day ago
                  </Button>
                </Tooltip>
              </Box>
              <Box>
                <IconButton>
                  <ArrowCircleRightOutlinedIcon />
                </IconButton>
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "rgb(255, 0, 136)",
                height: "3rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ margin: "12px" }}>
                <Tooltip arrow title="$8.00k">
                  <Button
                    sx={{
                      color: "#fff",
                      transition: "transform 0.2s",
                      "&:hover": {
                        transform: "scale(1.1)",
                        color: "gray",
                      },
                    }}
                  >
                    $8.00k |
                  </Button>
                </Tooltip>
              </Box>
              <Box sx={{ margin: "7px" }}>
                <Tooltip arrow title="Change color">
                  <IconButton
                    sx={{
                      padding: "1.5px",
                      transition: "transform 0.2s",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <FormatColorFillOutlinedIcon
                      sx={{
                        color: "#fff",
                        "&:hover": {
                          color: "gray",
                        },
                      }}
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip arrow title="Delete deal">
                  <IconButton
                    sx={{
                      padding: "1.5px",
                      transition: "transform 0.2s",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <DeleteIcon
                      sx={{
                        color: "#fff",
                        "&:hover": {
                          color: "gray",
                        },
                      }}
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip arrow title="Move to another pipeline">
                  <IconButton
                    sx={{
                      padding: "1.5px",
                      transition: "transform 0.2s",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <FilterAltOutlinedIcon
                      sx={{
                        color: "#fff",
                        "&:hover": {
                          color: "gray",
                        },
                      }}
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip arrow title="Mark as won">
                  <IconButton
                    sx={{
                      padding: "2.5px",
                      transition: "transform 0.2s",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <ThumbUpAltOutlinedIcon
                      sx={{
                        color: "#fff",
                        "&:hover": {
                          color: "gray",
                        },
                      }}
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip arrow title="Mark as lost">
                  <IconButton
                    sx={{
                      padding: "2px",
                      transition: "transform 0.2s",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <ThumbUpOffAltOutlinedIcon
                      sx={{
                        color: "#fff",
                        "&:hover": {
                          color: "gray",
                        },
                      }}
                    />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          </Card>
        </Box>
      </Card>
    </Box>
  );
}

export default DealsCard;
