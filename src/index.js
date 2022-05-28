import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AlertComponent from "./AlertComponent";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AlertComponent />
  </StrictMode>
);
