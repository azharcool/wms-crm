import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { Box, Button, Container, Divider, Typography } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import DashboardLayout from "components/dashboard-container";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useCustomFieldsActions } from "redux/custom-fields/CustomFields";
import Section from "./components/Section";
import { useApiActions } from "./query/useApiAction";

function CustomFields() {
  const [sections, setSections] = useState([]);

  let count = 0;

  const storeSections = useSelector((state: any) => state.customFields);

  const { addSection, saveForm } = useCustomFieldsActions();
  const { trySaveCustomFields } = useApiActions();

  useEffect(() => {
    setSections(storeSections?.sections);
  }, [storeSections]);

  const handleAddSection = () => {
    const newSections = JSON.parse(JSON.stringify(sections));
    count += 1;
    newSections.push(count);
    addSection({ section: { id: nanoid(), sectionName: "" } });
    setSections(newSections);
  };

  const onSubmit = async () => {
    await saveForm();
    const values = {
      customField: JSON.stringify(storeSections?.sections),
      formName: "Contact",
    };
    await trySaveCustomFields(values);
  };

  return (
    <DashboardLayout>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 2,
        }}
      >
        <Container maxWidth="lg">
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
              pr: 3,
              pt: 8,
            }}
          >
            <Typography sx={{ mb: 3 }} variant="h4">
              Custom Fields
            </Typography>
          </Box>
          <Divider />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
              py: 2,
            }}
          >
            <Button
              color="primary"
              startIcon={<AddCircleRoundedIcon />}
              variant="contained"
              onClick={handleAddSection}
            >
              Add Section
            </Button>
            <Button
              color="primary"
              startIcon={<AddCircleRoundedIcon />}
              variant="contained"
              onClick={onSubmit}
            >
              Save
            </Button>
          </Box>
          <Divider />

          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              // py: 8,
            }}
          >
            {sections?.map((item: any) => {
              return (
                <Box
                  sx={{
                    mb: 3,
                  }}
                >
                  <Section id={item.id} />
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>
    </DashboardLayout>
  );
}

export default CustomFields;
