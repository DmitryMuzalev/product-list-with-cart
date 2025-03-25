import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { store } from "app/store";

import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "app/GlobalStyle";
import App from "app/App";
import { theme } from "app/ThemeStyle";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
