import axios from "axios";
import { store } from "redux/store";

const client = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

const AUTH_ROUTES = ["login", "reset-password", "forgot-password", "signup"];

const FILE_ROUTES = ["upload"];

client.interceptors.request.use(
  (request: any) => {
    const authRoutes = AUTH_ROUTES.some((i) => {
      return request.url.includes(i);
    });
    const uploadRoutes = FILE_ROUTES.some((i) => {
      return request.url.includes(i);
    });
    const { user } = store.getState();
    const { token } = user;

    if (!authRoutes) {
      // TODO: add token to secure request
      request.headers.Authorization = `Bearer ${token}`;
    }
    if (uploadRoutes) {
      request.headers["Content-Type"] = "multipart/form-data";
    }
    return request;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);

client.interceptors.response.use(
  (response: any) => {
    if (response.data.error) {
      return Promise.reject(response.data);
    }
    return Promise.resolve(response.data);
  },
  (error: any) => {
    if (error.response?.status === 401) {
      // TODO: handle expired token
      // store.dispatch(
      //   setUserCredential({
      //     token: "",
      //     userInfo: null,
      //     isLoggedIn: false,
      //     role: "",
      //   }),
      // );
      // window.location.href = "/";
      return Promise.reject(error.response?.data);
    }
    return Promise.reject(error.response?.data);
  },
);

export default client;
