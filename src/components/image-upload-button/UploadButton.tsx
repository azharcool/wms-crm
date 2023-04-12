import { Box, Button, Typography } from "@mui/material";
import palette from "theme/palette";

interface IUploadButton {
  handleFile: (e: any) => void;
  single?: boolean;
  disabled?: boolean;
  title?: string;
  accept?: string;
}

function UploadButton(props: IUploadButton) {
  const { handleFile, single, disabled, title, accept } = props;
  return (
    <Button
      component="label"
      disabled={disabled}
      sx={{
        width: "200px",
        border: `1px dashed ${palette.error.dark}`,
        padding: "5px",
        height: "100px",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: "13px",
            color: palette.secondary.lightGray,
            textAlign: "center",
          }}
        >
          {title || "Drop your image here, or select"}
        </Typography>
        <Typography
          sx={{
            fontSize: "13px",
            color: palette.error.dark,
            textAlign: "center",
          }}
        >
          Click to browse
        </Typography>
      </Box>
      <input
        hidden
        accept={accept || "image/*"}
        multiple={!single}
        type="file"
        onChange={handleFile}
      />
    </Button>
  );
}

export default UploadButton;
