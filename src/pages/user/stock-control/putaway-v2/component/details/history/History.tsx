import {
  Box,
  Button,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import palette from "theme/palette";
import HistoryList from "./component/HistoryList";

interface ITooblarButton {
  handleClick: () => void;
  title: string;
  icon: React.ReactNode;
}

function ToolBarButton(props: ITooblarButton) {
  const { handleClick, title, icon } = props;

  return (
    <Box sx={{ m: 1, display: "flex", gap: 5, alignItems: "center" }}>
      <Button
        sx={{
          width: "inherit",
          borderRadius: "5px",
          padding: "5px 25px",
          backgroundColor: palette.warning.dark,
          color: "#fff",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: palette.warning.dark,
            opacity: 0.6,
            boxShadow: "none",
          },
        }}
        variant="contained"
        onClick={() => {
          handleClick?.();
        }}
      >
        {icon}
        <Typography
          component="span"
          sx={{ fontSize: { xs: "1rem", xl: "1.1rem" } }}
        >
          {title}
        </Typography>
      </Button>
    </Box>
  );
}

function History() {
  const navigate = useNavigate();

  const rightActionsData = [
    {
      id: crypto.randomUUID(),
      title: "PUT",
      onClick: () => {
        // setEditable(false);
      },
    },
  ];

  return (
    <Container maxWidth={false}>
      <Stack direction="row" justifyContent="flex-end">
        {rightActionsData.map((item) => (
          <ToolBarButton
            key={item.id}
            handleClick={item.onClick}
            icon={undefined}
            title={item.title}
          />
        ))}
      </Stack>
      <CardContent sx={{ padding: 0 }}>
        <Box sx={{ mt: 3 }}>
          <HistoryList />
        </Box>
      </CardContent>
    </Container>
  );
}

export default History;
