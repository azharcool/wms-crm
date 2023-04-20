import { Autocomplete, Box, Button, Card, Stack, Switch } from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const statusMenu = [
  {
    id: "1",
    value: "Active",
  },
  {
    id: "2",
    value: "Inactive",
  },
];

interface ITaxes {
  open: boolean;
  handleClose: () => void;
  view?: boolean;
}

function ContainerTypeCreate(props: ITaxes) {
  const { open, handleClose, view } = props;

  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    {
      title: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
    { title: "The Good, the Bad and the Ugly", year: 1966 },
    { title: "Fight Club", year: 1999 },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
    },
    {
      title: "Star Wars: Episode V - The Empire Strikes Back",
      year: 1980,
    },
    { title: "Forrest Gump", year: 1994 },
    { title: "Inception", year: 2010 },
    {
      title: "The Lord of the Rings: The Two Towers",
      year: 2002,
    },
  ];

  return (
    <>
      <Slider
        buttonText="save"
        handleChange={() => {}}
        handleClose={handleClose}
        open={open}
        size="lg"
        title="New container Type"
      >
        <PerfectScrollbar>
          <Stack
            gap={2}
            sx={{
              marginTop: "10px",
              borderRadius: "5px",
            }}
          >
            {view ? (
              <Box>
                <Button
                  color="error"
                  size="small"
                  style={{ padding: "0.5rem 1rem", backgroundColor: "#8B0000" }}
                  sx={{
                    boxShadow: "none",
                    display: "inline-block",
                    "&:hover": {
                      backgroundColor: "#8B0000",
                      opacity: 0.6,
                      boxShadow: "none",
                    },
                  }}
                  variant="contained"
                  //   onClick={handleClick}
                >
                  {/* {editable ? "Clear" : "Edit"} */}
                </Button>
              </Box>
            ) : null}

            <Card
              sx={{
                flex: 1,
              }}
            >
              <CustomCardContent title=" Container Types">
                <Stack spacing={3} sx={{ width: 500 }}>
                  <Autocomplete
                    filterSelectedOptions
                    multiple
                    defaultValue={[top100Films[13]]}
                    getOptionLabel={(option) => option.title}
                    id="tags-outlined"
                    options={top100Films}
                    renderInput={(params) => (
                      <TextField name="" {...params} label="Warehouses" />
                    )}
                  />
                </Stack>
                <Stack spacing={3} sx={{ width: 500 }}>
                  <TextField id="name" label="Name" name="name" size="small" />
                </Stack>
                <Stack spacing={3} sx={{ width: 500 }}>
                  <Autocomplete
                    filterSelectedOptions
                    multiple
                    defaultValue={[top100Films[13]]}
                    getOptionLabel={(option) => option.title}
                    id="tags-outlined"
                    options={top100Films}
                    renderInput={(params) => (
                      <TextField name="" {...params} label="Operations" />
                    )}
                  />
                </Stack>
                <Stack spacing={3} sx={{ width: 500 }}>
                  <TextField
                    isSelect
                    id="status"
                    label="Status"
                    menuItems={statusMenu}
                    name="status"
                    size="small"
                    // value={values.status}
                    // onSelectHandler={(e) => {
                    //   setFieldValue("status", e.target.value);
                    // }}
                  />
                </Stack>
                <Switch defaultChecked />
              </CustomCardContent>
            </Card>
          </Stack>
        </PerfectScrollbar>
      </Slider>
    </>
  );
}

export default ContainerTypeCreate;
