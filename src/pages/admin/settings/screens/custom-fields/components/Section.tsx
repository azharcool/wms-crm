import CloseIcon from "@mui/icons-material/Close";
import { Box, Card, Divider, IconButton, Stack } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import CustomFormField from "components/CustomFormField";
import TextField from "components/textfield";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useCustomFieldsActions } from "redux/custom-fields/CustomFields";
import FieldDetail from "./FieldDetail";

const formTypes = [
  {
    id: 1,
    value: "Text",
    type: "text",
    isRequired: false,
    label: "Text",
  },
  {
    id: 2,
    value: "Number",
    type: "number",
    isRequired: false,
    label: "Number",
  },
  {
    id: 3,
    value: "File",
    type: "file",
    isRequired: false,
    label: "File",
  },
  {
    id: 4,
    value: "Dropdown",
    type: "dropdown",
    isRequired: false,
    label: "Dropdown",
    multi: true,
  },
  {
    id: 5,
    value: "Date",
    type: "date",
    isRequired: false,
    label: "Date",
  },
  {
    id: 6,
    value: "Checkbox",
    type: "checkbox",
    isRequired: false,
    label: "Checkbox",
    multi: true,
  },
  {
    id: 7,
    value: "Radio",
    type: "radio",
    isRequired: false,
    label: "Radio",
    multi: true,
  },
  {
    id: 8,
    value: "TextArea",
    type: "textarea",
    isRequired: false,
    label: "Text Area",
  },
];

function Section(props: any) {
  const { id } = props;
  const [formType, setFieldType] = useState<number>(0);
  const [field, setField] = useState<any | null>(null);
  const [fields, setFields] = useState<any | null>(null);
  const [sectionName, setSectionName] = useState<any[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const {
    addField,
    removeField,
    removeSection,
    setSectionName: saveSectionName,
  } = useCustomFieldsActions();

  const storeSections = useSelector((state: any) => state.customFields);

  useEffect(() => {
    if (storeSections) {
      const section = storeSections?.sections?.find((x: any) => x.id === id);
      setFields(section?.fields);
    }
  }, [storeSections]);

  const handleTypeSelect = (event: any) => {
    setOpen(true);
    if (event.target.value) {
      const selectedField = formTypes.find(
        (x: any) => x.id === event.target.value,
      );
      setFieldType(event.target.value);
      setField(selectedField);
    } else {
      setFieldType(0);
    }
  };

  const handleSection = (event: any) => {
    setSectionName(event.target.value);
    saveSectionName({ sectionName: event.target.value, sectionId: id });
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleSubmit = (data: any) => {
    const newField = { ...data, id: nanoid() };
    addField({ field: { ...newField, sectionId: id } });
  };

  const onDelete = (data: any) => {
    removeField({ field: data });
  };

  const onClosSection = () => {
    removeSection({ id });
  };

  return (
    <Card sx={{ p: 3, position: "relative" }}>
      <IconButton
        aria-label="close"
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme: any) => theme.palette.grey[500],
        }}
        onClick={onClosSection}
      >
        <CloseIcon />
      </IconButton>
      <Box sx={{ pt: 3, mb: 3, gap: 2, display: "flex" }}>
        <TextField
          label="Section Name"
          name="section-name"
          style={{ width: "550px" }}
          value={sectionName}
          onChange={handleSection}
        />
        <TextField
          isSelect
          label="Field Type"
          menuItems={formTypes}
          name="form-type"
          style={{ width: "550px" }}
          value={formType}
          onSelectHandler={handleTypeSelect}
        />
        <Box />
      </Box>
      <Divider sx={{ mt: 2 }} />
      <Stack
        alignItems="center"
        direction="row"
        flexWrap="wrap"
        gap={1}
        justifyContent="space-between"
        sx={{ mt: 2 }}
      >
        {fields?.map((item: any) => {
          return <CustomFormField field={item} onDelete={onDelete} />;
        })}
      </Stack>
      <FieldDetail
        field={field}
        handleSubmit={handleSubmit}
        open={open}
        onClose={onClose}
      />
    </Card>
  );
}

export default Section;
