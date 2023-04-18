import { StyledEngineProvider } from "@mui/material/styles";
import { AlertProvider } from "components/alert";
import { SnackbarProvider } from "components/snackbar";
import { ReactNode } from "react";

interface IStyledProvider {
  children: ReactNode;
}
function StyledProvider(props: IStyledProvider) {
  const { children } = props;
  return (
    <StyledEngineProvider>
      <SnackbarProvider>
        <AlertProvider>
          <>{children}</>
        </AlertProvider>
      </SnackbarProvider>
    </StyledEngineProvider>
  );
}

export default StyledProvider;
