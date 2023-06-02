import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
 ${reset}
* {
    box-sizing: border-box;
  }

  body {
    display: flex;
    align-items:center;
    justify-content: center;
    background-color: #C7D1DB;
  }

  button {
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
  }
`;
