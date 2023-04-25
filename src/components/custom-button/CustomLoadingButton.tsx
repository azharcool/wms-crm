import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";
import { Typography, TypographyProps } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface ICustomLoadingButton extends LoadingButtonProps {
  title: string;
  textProps?: TypographyProps;
}

function CustomLoadingButton(props: ICustomLoadingButton) {
  const { title, textProps, ...restProps } = props;
  const theme = useTheme();

  return (
    <LoadingButton
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
    </LoadingButton>
  );
}

export default CustomLoadingButton;
