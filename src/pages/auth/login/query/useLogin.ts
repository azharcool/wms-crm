import { useSnackbar } from "components/snackbar";
import AppRoutes from "navigation/appRoutes";
import { useNavigate } from "react-router-dom";
import { useAuthActions } from "redux/user/auth";

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
  // eslint-disable-next-line consistent-return
  const tryLogin = async (values: ILoginRequest) => {
    try {
      setUserCredential({
        token: "",
        isLoggedIn: true,
      });
      navigate(AppRoutes.DASHBOARD);
      return true;
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
