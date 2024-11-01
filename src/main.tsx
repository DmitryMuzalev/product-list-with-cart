import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyle } from "components/GlobalStyle.tsx";
import App from "App.tsx";

import { ThemeProvider } from "styled-components";
import { theme } from "components/ThemeStyle.tsx";
import { Provider } from "react-redux";
import { store } from "redux/store";

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
