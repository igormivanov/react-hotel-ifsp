import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  :focus{
    outline: none;
    /* 1px solid ${({theme}) => theme.colors["brand-gold-200"]}; */
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