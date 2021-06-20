import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  --color-anokha-red: rgba(133,43,32,255);
  --color-gray: #bbb;
  --color-light-gray: #eee;

  --color-primary: var(--color-anokha-red);
  --color-light: var(--color-light-gray);
  --color-background: #000;
  --color-transparent-background: rgba(0, 0, 0, .8);
}

body {
  background-color: var(--color-background);
  margin: 0;
}

  font-family: "Courier New", Courier, monospace;
`;
