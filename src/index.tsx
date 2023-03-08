// import { StyledEngineProvider, ThemeProvider } from "@mui/system";
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
import { AlertProvider } from "components/alert";
import DarkModeToggle from "components/Darktheme/DarkModeToggle";
import { SnackbarProvider } from "components/snackbar";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "redux/store";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import theme from "./theme/newTheme";

const queryClient = new QueryClient();
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DarkModeToggle>
          <ThemeProvider theme={darkTheme}>
            <StyledEngineProvider>
              <SnackbarProvider>
                <AlertProvider>
                  <QueryClientProvider client={queryClient}>
                    <Router>
                      <App />
                    </Router>
                  </QueryClientProvider>
                </AlertProvider>
              </SnackbarProvider>
            </StyledEngineProvider>
          </ThemeProvider>
        </DarkModeToggle>
      </PersistGate>
    </Provider>
  </>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
