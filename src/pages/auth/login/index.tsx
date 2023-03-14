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
          <img alt="logo" height="100" src={logoURL} width="250" />
        </Box>
        <Box sx={{ color: palette.text.secondary }}>
          <TextField
            error={!!touched.email && !!errors.email}
            FieldLabel="Email Address"
            helperText={(touched.email && errors && errors.email) || ""}
            id={undefined}
            name=""
            placeholder="Email"
            size={undefined}
            value={values.email}
            onBlur={handleBlur("email")}
            onChange={handleChange("email")}
          />
          <TextField
            iconEnd
            error={!!touched.password && !!errors.password}
            FieldLabel="Password"
            helperText={(touched.password && errors && errors.password) || ""}
            icon={
              <IconButton onClick={handlePasswordToggle}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            }
            id={undefined}
            name=""
            placeholder="Password"
            size={undefined}
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
