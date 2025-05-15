import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter } from "react-router";
import RoutesApp from "./routes/routerApp.tsx";
import { ThemeProvider } from "./context/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider initialColorMode="dark">
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
