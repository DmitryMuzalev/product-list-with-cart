import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyle } from "./components/GlobalStyle.tsx";
import App from "./App.tsx";

import { ThemeProvider } from "styled-components";
import { theme } from "./components/ThemeStyle.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
);
