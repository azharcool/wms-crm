import EditIcon from "@mui/icons-material/Edit";
import { Box, Container } from "@mui/material";
import TableToolbar from "components/table-toolbar";
// import { useNavigate } from "react-router-dom";

function CategoriesDetail() {
  //   const navigate = useNavigate();

  return (
    <Container maxWidth={false}>
      <Box sx={{ marginY: 3 }}>
        <TableToolbar
          breadcrumbs={[{ link: "Categories", to: "/Watches" }]}
          buttonText="Edit"
          rightActions={[
            {
              title: "Edit",
              id: crypto.randomUUID(),
              icon: <EditIcon />,
              onClick: () => {
                console.log("clicked edit");
              },
            },
          ]}
          title="Watches"
        />
        {/* <Box sx={{ display: "flex", gap: 1, marginY: "10px" }}>
          <Card sx={{ borderRadius: "10px" }}>
            <CardContent sx={{ paddingTop: 0 }}>
              <Box
                sx={{
                  display: "flex",
                  padding: "20px 10px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    height: "200px",
                    width: "200px",
                    color: "rgb(158, 161, 182)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px dashed rgb(236, 236, 236)",
                    borderRadius: "360px",
                  }}
                >
                  No Image
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box> */}
      </Box>

      {/* <Card sx={{ borderRadius: "10px" }}>
        <CardContent sx={{ paddingTop: 0 }}>
          <Box sx={{ mt: 3 }}>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ width: "70%" }}>
                <Box
                  sx={{
                    padding: "16px 24px 8px 24px",
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "18px",
                  }}
                >
                  Details:
                </Box>
                <Box
                  sx={{
                    padding: "5px 24px",
                    color: "#9ea1b6",
                    fontWeight: "500",
                  }}
                >
                  Name
                  <Box sx={{ color: "#000", fontSize: "13px" }}>Watches</Box>
                </Box>
                <Box
                  sx={{
                    padding: "5px 24px",
                    color: "#9ea1b6",
                    fontWeight: "500",
                  }}
                >
                  Slug
                  <Box sx={{ color: "#000", fontSize: "13px" }}>
                    Not Provided
                  </Box>
                </Box>
                <Box
                  sx={{
                    padding: "5px 24px",
                    color: "#9ea1b6",
                    fontWeight: "500",
                  }}
                >
                  Detail
                  <Box sx={{ color: "#000", fontSize: "13px" }}>Watches</Box>
                </Box>
              </Box>

              <Box sx={{ width: "40%" }}>
                <Box
                  sx={{
                    padding: "16px 24px 8px 0",
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "18px",
                  }}
                >
                  Image:
                </Box>
                <Box
                  sx={{
                    height: "200px",
                    color: "rgb(158, 161, 182)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid rgb(236, 236, 236)",
                  }}
                >
                  No Image
                </Box>
              </Box>
            </Box>

            <Divider sx={{ marginTop: "10px" }} />

            <Box sx={{ width: "70%" }}>
              <Box
                sx={{
                  padding: "16px 24px 8px 24px",
                  color: "#000",
                  fontWeight: "500",
                  fontSize: "18px",
                }}
              >
                Organization:
              </Box>
              <Box
                sx={{
                  padding: "5px 24px",
                  color: "#9ea1b6",
                  fontWeight: "500",
                }}
              >
                Parent
                <Box sx={{ color: "#000", fontSize: "13px" }}>Not Provided</Box>
              </Box>
              <Box
                sx={{
                  padding: "5px 24px",
                  color: "#9ea1b6",
                  fontWeight: "500",
                }}
              >
                Position
                <Box sx={{ color: "#000", fontSize: "13px" }}>0</Box>
              </Box>
              <Box
                sx={{
                  padding: "5px 24px",
                  color: "#9ea1b6",
                  fontWeight: "500",
                }}
              >
                Status
                <Box sx={{ color: "#000", fontSize: "13px" }}>Active</Box>
              </Box>
              <Box
                sx={{
                  padding: "5px 24px",
                  color: "#9ea1b6",
                  fontWeight: "500",
                }}
              >
                Tags
                <Box sx={{ color: "#000", fontSize: "13px" }}> - </Box>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card> */}
    </Container>
  );
}

export default CategoriesDetail;
