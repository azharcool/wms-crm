import { Box } from "@mui/material";
import UploadButton from "components/image-upload-button/UploadButton";
import React, { useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";

// const useStyles = makeStyles({
//   baseStyle: {
//     flex: 1,
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     padding: "20px",
//     borderWidth: 2,
//     borderRadius: 2,
//     borderColor: "#eeeeee",
//     borderStyle: "dashed",
//     backgroundColor: "#fafafa",
//     color: "#bdbdbd",
//     outline: "none",
//     transition: "border .24s ease-in-out",
//   },
//   focusedStyle: {
//     borderColor: "#2196f3",
//   },
//   acceptStyle: {
//     borderColor: "#00e676",
//   },
//   rejectStyle: {
//     borderColor: "#ff1744",
//   },
//   thumbsContainer: {
//     display: "flex",
//     flexDirection: "row",
//     flexWrap: "wrap",
//     marginTop: 16,
//   },
//   thumb: {
//     display: "inline-flex",
//     borderRadius: 2,
//     border: "1px solid #eaeaea",
//     marginBottom: 8,
//     marginRight: 8,
//     width: 100,
//     height: 100,
//     padding: 4,
//     boxSizing: "border-box",
//   },
//   thumbInner: {
//     display: "flex",
//     minWidth: 0,
//     overflow: "hidden",
//   },
//   img: {
//     display: "block",
//     width: "200px",
//     height: "200px",
//   },
// });

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "100px",
  height: "100px",
};

interface IDragAndDropImage {
  title?: string;
  checked?: boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => void;
}
function DragAndDropImage(props: IDragAndDropImage) {
  const [files, setFiles] = useState<any>([]);
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    acceptedFiles,
  } = useDropzone({
    accept: { "image/*": [] },
    onDrop: async (acceptedFiles) => {
      //   console.log("acceptedFiles>>", acceptedFiles);
      const images = await Promise.all(
        acceptedFiles.map((file) => convertBase64(file)),
      );
      setFiles([...files, ...images]);
    },
  });

  const convertBase64 = (file: any): Promise<any> => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject],
  );

  function handleFile(e: any): void {
    throw new Error("Function not implemented.");
  }

  return (
    <Box className="container">
      <Box {...getRootProps()}>
        <input {...getInputProps()} />

        <UploadButton handleFile={handleFile} />
      </Box>
      <Box sx={thumbsContainer}>
        {files
          ? files?.map((file: any) => {
              return <img alt="preview img" src={file} style={img} />;
            })
          : null}
      </Box>
    </Box>
  );
}

export default DragAndDropImage;
