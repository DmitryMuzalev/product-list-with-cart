import RedHatTextWof from "../assets/fonts/RedHatText-VariableFont_wght.woff";
import RedHatTextWof2 from "../assets/fonts/RedHatText-VariableFont_wght.woff";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
@font-face {
  font-family: "Red Hat Text", sans-serif;
  src: url(${RedHatTextWof2}) format('woff2'),
       url(${RedHatTextWof}) format('woff');
 }

html, body {
  font-family: ${(props) => props.theme.font.family};
  font-size: ${(props) => props.theme.font.size};
  font-weight:${(props) => props.theme.font.weight.normal};
}

`;

export { GlobalStyle };
