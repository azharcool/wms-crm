import { Divider, Typography } from "@mui/material";

interface ISubHeading {
  title: string;
}

function SubHeading(props: ISubHeading) {
  const { title } = props;
  return (
    <>
      <Typography gutterBottom variant="h6">
        {title}
      </Typography>
      <Divider style={{ marginBottom: 20 }} />
    </>
  );
}

export default SubHeading;
