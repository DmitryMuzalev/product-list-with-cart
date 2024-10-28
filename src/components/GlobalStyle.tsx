import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html, body {
  font-family:  ${(props) => props.theme.font.family};
  font-size: ${(props) => props.theme.font.size};
  font-weight:${(props) => props.theme.font.weight.normal};
  color: ${(props) => props.theme.color.natural_900}
}

body{
  background-color: ${(props) => props.theme.color.natural_300};
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

button{
  cursor: pointer
}

ul{
  list-style: none;
}

`;

export { GlobalStyle };
