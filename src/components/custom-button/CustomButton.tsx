import {
  Button,
  ButtonProps,
  Typography,
  TypographyProps,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface ICustomButton extends ButtonProps {
  title: string;
  danger?: boolean;
  textProps?: TypographyProps;
}

function CustomButton(props: ICustomButton) {
  const { danger, title, textProps, ...restProps } = props;
  const theme = useTheme();

  return (
    <Button
      sx={{
        padding: "8px 20px",
        color: theme.palette.primary.button?.light,
        backgroundColor: theme.palette.primary.button?.main,
        boxShadow: "none",
        "&:hover": {
          color: theme.palette.primary.button?.light,
          backgroundColor: theme.palette.primary.button?.main,
          opacity: 0.8,
          boxShadow: "none",
        },
      }}
      size="small"
      {...restProps}
    >
      <Typography sx={{}}>{title}</Typography>
    </Button>
  );
}

export default CustomButton;
