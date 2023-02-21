// eslint-disable-next-line import/no-extraneous-dependencies
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import palette from "theme/palette";

const useStyles = makeStyles({
  notesCard: {
    backgroundColor: palette.warning.light_10,
    marginTop: "0.5rem",
    padding: "1rem",
    borderRadius: "10px 10px 10px 10px ",
    width: "94%",
    position: "relative",
  },
  notesCardHeader: {
    color: palette.text.secondary,
    borderBottom: "1px solid rgba(19, 49, 89, 0.05)",
    marginBottom: "0.5rem",
    paddingBottom: "0.5rem",
    position: "relative",
  },
  bottomText: { paddingTop: "0.3rem", color: palette.text.muted },
  editIcon: {
    position: "absolute",
    right: "20px",
    top: "35%",
    transform: "translateY(-50%)",
    cursor: "pointer",
  },
});

function Log() {
  const classes = useStyles();
  const [logList, setLogList] = useState<any[]>([]);
  const [editable, setEditable] = useState<any[]>([]);
  const [editText, setEditText] = useState("");

  const handleEdit = (obj: any) => {
    const isExist = editable.includes(obj?.id);
    setEditText(obj?.note);
    if (isExist) {
      const isALreadyExist = editable.filter((item) => item !== obj?.id);
      setEditable(isALreadyExist);
    } else {
      setEditable([...editable, obj?.id]);
    }
    // setEditable((state) => !state);
  };

  return (
    <Stack>
      <Stack sx={{ mt: 2 }}>
        {logList?.map((note, index) => {
          return (
            <Stack
              className={`${classes.notesCard}`}
              justifyContent="space-between"
            >
              <Typography sx={{ width: "85%" }}>{note?.note} </Typography>
              <IconButton sx={{ width: "10%" }}>
                <DeleteIcon />
              </IconButton>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
}

export default Log;
