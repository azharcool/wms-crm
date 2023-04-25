// import Routes from "navigation";
import QueryProvider from "providers/QueryProvider";
import ReduxProvider from "providers/ReduxProvider";
import StyledProvider from "providers/StyledProvider";
import ThemeProvider from "providers/ThemeProvider";
import MainRoutes from "routes/MainRoutes";

function App() {
  return (
    <>
      <ReduxProvider>
        <StyledProvider>
          <QueryProvider>
            <ThemeProvider>
              <MainRoutes />
            </ThemeProvider>
          </QueryProvider>
        </StyledProvider>
      </ReduxProvider>
    </>
  );
}

export default App;
