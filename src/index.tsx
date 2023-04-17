import { StyledEngineProvider } from "@mui/material/styles";
import { AlertProvider } from "components/alert";
import { SnackbarProvider } from "components/snackbar";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "redux/store";
import App from "./App";
import "./index.css";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  </>,
);
