/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useState } from "react";

import Alert from "./Alert";
import AlertContext from "./AlertContext";

export type VariantTypes = "success" | "warning" | "error";

export type ShowParams = {
  title: string;
  message: string;
  cancelText?: string;
  confirmText?: string;
  onConfirm?: () => void;
};

interface ProviderState extends ShowParams {
  open: boolean;
}

export interface AlertContextType {
  show: (params: ShowParams) => void;
}

const DEFAULT_STATE = {
  open: false,
  title: "",
  message: "",
  cancelText: "Cancel",
  confirmText: "Confirm",
};

interface IAlertProvider {
  children: JSX.Element;
}

// eslint-disable-next-line react/function-component-definition
const AlertProvider = (props: IAlertProvider) => {
  const { children } = props;

  const [state, setState] = useState<ProviderState>(DEFAULT_STATE);

  const show = (params: ShowParams) => {
    setState(() => ({ ...DEFAULT_STATE, ...params, open: true }));
  };

  const handleClose = () => {
    setState((v) => ({ ...v, open: false }));
  };

  const context = useMemo(() => ({ show }), [show]);

  const handleConfirm = () => {
    const { onConfirm } = state;
    setState((v) => ({ ...v, open: false }));
    onConfirm?.();
  };
  return (
    <>
      <AlertContext.Provider value={context}>{children}</AlertContext.Provider>
      <Alert
        cancelText={state.cancelText || ""}
        confirmText={state.confirmText || ""}
        handleClose={handleClose}
        message={state.message}
        open={state.open}
        title={state.title}
        onConfirm={handleConfirm}
      />
    </>
  );
};

export default AlertProvider;
