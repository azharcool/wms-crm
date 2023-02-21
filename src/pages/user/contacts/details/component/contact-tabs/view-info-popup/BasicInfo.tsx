import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import palette from "theme/palette";

interface IBasicInfo {
  icon: JSX.Element;
  field: string;
  rightIcon?: JSX.Element;
  onHandleEdit: () => void;
}

function BasicInfo(props: IBasicInfo) {
  const { icon, field, rightIcon, onHandleEdit } = props;

  return (
    <>
      <List
        sx={{
          color: palette.text.secondary,
          backgroundColor: "#fff",
          "& .css-1v94cv2-MuiTypography-root": {
            lineHeight: "1",
          },
        }}
      >
        <ListItem
          secondaryAction={
            <IconButton edge="end" onClick={onHandleEdit}>
              {rightIcon}
            </IconButton>
          }
        >
          <ListItemIcon
            sx={{
              minWidth: "38px",
              color: palette.text.primary,
            }}
          >
            {icon}
          </ListItemIcon>
          <ListItemText>
            <Typography component="p" sx={{ color: palette.text.muted }}>
              {field}
            </Typography>
          </ListItemText>
        </ListItem>

        <Divider component="li" />
      </List>
    </>
  );
}

export default BasicInfo;
