import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MilkyMist } from "./screens/MilkyMist";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <MilkyMist />
  </StrictMode>
);
