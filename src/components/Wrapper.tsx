import * as React from "react";
import { ThemeProvider } from "@emotion/react";
import GlobalStyles from "./GlobalStyles";
import { theme } from "../theme";

const Wrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Wrapper;
