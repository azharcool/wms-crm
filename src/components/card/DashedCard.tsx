import { Box } from "@mui/material";

interface ICustomCard {
  title: string;
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
}
function DashedCard(props: ICustomCard) {
  const { title, children, leftIcon } = props;
  return (
    <Box
      sx={{
        padding: "5px 15px",
        border: "1px dashed #ccc",
        borderRadius: "8px",
        width: "150px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex" }}>
        {leftIcon}
        <Box
          sx={{
            color: "#41434a",
            fontSize: "1.0rem",
            fontWeight: "700",
          }}
        >
          {title}
        </Box>
      </Box>
      {children}
    </Box>
  );
}

export default DashedCard;
