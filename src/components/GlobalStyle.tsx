import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,100..900&family=Red+Hat+Text:ital,wght@0,300..700;1,300..700&display=swap');

html, body {
  font-family:  "Red Hat Text", sans-serif;
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

`;

export { GlobalStyle };
