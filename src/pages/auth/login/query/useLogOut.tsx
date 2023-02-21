import { useSnackbar } from "components/snackbar";
import AppRoutes from "navigation/appRoutes";
import { useNavigate } from "react-router-dom";
import { useAuthActions } from "redux/user/auth";
import { logout } from "services/auth.service";

export interface ILogoutResponse {
  data?: string;
  statusCode: number;
  message?: string;
}

const useAdminLogout = () => {
  const snackbar = useSnackbar();
  const { setUserCredential } = useAuthActions();

  const navigate = useNavigate();
  const tryLogout = async (id: number | string) => {
    try {
      const response: ILogoutResponse = await logout(id);
      if (response.statusCode === 200) {
        setUserCredential({
          token: "",
          isLoggedIn: false,
        });

        navigate(AppRoutes.LOGIN);
        snackbar?.show({
          title: response.message || "",
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
    tryLogout,
  };
};

export { useAdminLogout };
