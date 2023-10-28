import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    
  }

  body {
    font-family: 'Inter', sans-serif;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  ul {
    scroll-behavior: smooth;
  }

  
`