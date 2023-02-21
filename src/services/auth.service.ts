import { ILoginRequest, ILoginResponse } from "pages/auth/login/query/useLogin";
import client from "utils/ApiClient";
import API_URLS from "./endPoints";

async function login(Req: ILoginRequest): Promise<ILoginResponse> {
  return client.post(API_URLS.LOGIN, {
    email: Req.email,
    password: Req.password,
  });
}

async function logout(req: number | string): Promise<ILoginResponse> {
  return client.post(`${API_URLS.LOGOUT}/${req}`);
}
// const logout = () => {
//   localStorage.removeItem("user");
// };

export { login, logout };
