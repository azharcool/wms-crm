import { useSnackbar } from "components/snackbar";
import AppRoutes from "navigation/appRoutes";
import { useNavigate } from "react-router-dom";
import { useAuthActions } from "redux/user/auth";
import { login } from "services/auth.service";

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  data: string;
  statusCode: number;
  message: string;
}

const useAdminLogin = () => {
  const snackbar = useSnackbar();
  const { setUserCredential } = useAuthActions();
  const navigate = useNavigate();
  const tryLogin = async (values: ILoginRequest) => {
    try {
      const response: ILoginResponse = await login(values);
      if (response.statusCode === 200) {
        setUserCredential({
          token: response.data,
          isLoggedIn: true,
        });
        navigate(AppRoutes.DASHBOARD);
        snackbar?.show({
          title: response.message,
          type: "success",
        });
      }
    } catch (err: any) {
      const msg = err.message || "Something went wrong";
      snackbar?.show({
        title: msg,
        type: "error",
      });
    }
  };

  return {
    tryLogin,
  };
};

export { useAdminLogin };
