import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter } from "react-router";
import RoutesApp from "./routes/routerApp.tsx";
import { ThemeProvider } from "./context/ThemeProvider.tsx";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={client}>

    <ThemeProvider initialColorMode="dark">
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
