import Routes from "navigation";
import QueryProvider from "providers/QueryProvider";
import ReduxProvider from "providers/ReduxProvider";
import StyledProvider from "providers/StyledProvider";
import ThemeProvider from "providers/ThemeProvider";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "routes/MainRoutes";

function Navigation() {
  return (
    <>
      <Router>
        <Routes />
      </Router>
    </>
  );
}

function App() {
  return (
    <>
      <ReduxProvider>
        <StyledProvider>
          <QueryProvider>
            <ThemeProvider>
              {/* <Navigation /> */}
              <MainRoutes />
            </ThemeProvider>
          </QueryProvider>
        </StyledProvider>
      </ReduxProvider>
    </>
  );
}

export default App;
