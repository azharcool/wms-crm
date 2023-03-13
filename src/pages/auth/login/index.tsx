import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  FormControlLabel,
  IconButton,
  Typography,
} from "@mui/material";
import TextField from "components/textfield";
import { useState } from "react";
import { Link } from "react-router-dom";
import palette from "theme/palette";
import { logoURL } from "utils";
import useForm from "./hooks/useForm";
import { ILoginRequest, useAdminLogin } from "./query/useLogin";
// import FormControlLabel from '@mui/material/FormControlLabel';

// import Checkbox from '@mui/material/Checkbox';

function Login() {
  const { tryLogin } = useAdminLogin();
  const [showPassword, setShowPassword] = useState(false);

  const initialValues: ILoginRequest = {
    email: "",
    password: "",
  };

  const onSubmit = async (values: ILoginRequest) => {
    await tryLogin(values);
  };
  const formik = useForm(onSubmit, initialValues);

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
    dirty,
    isSubmitting,
  } = formik;

  const handlePasswordToggle = () => setShowPassword((show) => !show);

  return (
    <Container
      sx={{
        pt: 7,
      }}
    >
      <Box
        sx={{
          maxWidth: 450,
          margin: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            paddingTop: 2,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={logoURL} width="250" height="100" alt="logo" />
        </Box>
        <Box sx={{ color: palette.text.secondary }}>
          <TextField
            error={!!touched.email && !!errors.email}
            helperText={(touched.email && errors && errors.email) || ""}
            label="Email Address"
            placeholder="Email"
            value={values.email}
            onBlur={handleBlur("email")}
            onChange={handleChange("email")}
          />
          <TextField
            iconEnd
            error={!!touched.password && !!errors.password}
            helperText={(touched.password && errors && errors.password) || ""}
            icon={
              <IconButton onClick={handlePasswordToggle}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            }
            label="Password"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={values.password}
            onBlur={handleBlur("password")}
            onChange={handleChange("password")}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            "& a": {
              textDecoration: "none",
              color: palette.info.light,
              "&:hover": {
                color: palette.info.dark,
              },
            },
          }}
        >
          <Typography component="p" sx={{ color: palette.info.lightBg }}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember Me"
            />
          </Typography>
          <Link to="/">
            <Typography color={palette.info.lightBg}>
              Forgot Password
            </Typography>
          </Link>
        </Box>
        <Box sx={{ mt: 2, width: "100%" }}>
          <Button
            disabled={!(isValid && dirty)}
            sx={{
              width: "inherit",
              backgroundColor: palette.info.main,
              height: "50px",
              borderRadius: "5px",
            }}
            variant="contained"
            onClick={() => handleSubmit()}
          >
            {isSubmitting ? (
              <CircularProgress color="warning" size={12} />
            ) : (
              "Login"
            )}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
