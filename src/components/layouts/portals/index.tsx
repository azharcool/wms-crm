import { createPortal } from "react-dom";

interface IPortals {
  children: React.ReactNode;
}

function Portal(props: IPortals) {
  const { children } = props;
  const portalId = document.getElementById("portal-root") as HTMLElement;

  return createPortal(children, portalId);
}

export default Portal;
