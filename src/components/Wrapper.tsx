import * as React from "react";
import { ThemeProvider } from "@emotion/react";
import "typeface-crimson-text";
import "typeface-fira-mono";
import "typeface-fira-sans";

import GlobalStyles from "./GlobalStyles";
import { theme } from "../theme";
import "../styles/prism-everset.css";

const Wrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Wrapper;
