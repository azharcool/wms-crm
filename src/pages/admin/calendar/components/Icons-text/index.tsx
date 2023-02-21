import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

interface IconTextProps {
  title: string;
  Textcolor: string;
  bgColor: string;
  icon: any;
}

function IconText(props: IconTextProps) {
  const { title, Textcolor, icon, bgColor } = props;
  return (
    <Box
      sx={{
        padding: "8px",
        borderRadius: "5px",
        display: "flex",
        marginLeft: "20px",
        backgroundColor: bgColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {icon}

      <Typography color={Textcolor}>{title}</Typography>
    </Box>
  );
}

export default IconText;
