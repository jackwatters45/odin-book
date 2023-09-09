import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  :root {
    font-family:
    inter-var,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
      Helvetica,
      "Apple Color Emoji",
      Arial,
      sans-serif,
      "Segoe UI Emoji",
      "Segoe UI Symbol";
    line-height: 1.5;
    
    color-scheme: light dark;
    
    user-select: none;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    min-height: 100vh;
  }

  html {
    font-family:
      inter-var,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Helvetica,
      "Apple Color Emoji",
      Arial,
      sans-serif,
      "Segoe UI Emoji",
      "Segoe UI Symbol";
    line-height: 1.5;

    color-scheme: light dark;
    user-select: none;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    overflow-y: scroll;

     color: ${({ theme }) => theme.colors.textPrimary};
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  }

  a {
    color: ${({ theme }) => theme.colors.textSecondary};
    cursor: pointer;
    text-decoration: none;
    line-height: 0;
  }

  li {
    list-style: none;
  }

  button, input[type='text'] {
    border: none;
    background: transparent;
    cursor: pointer;
  }

  strong {
    font-weight: 600;
  }

  input[type='submit'] {
    cursor: pointer;
  }

  h1 {
    font-size: 2rem;
    font-weight: 600;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
  }

  button  {
    color: ${({ theme }) => theme.colors.textPrimary};
  }


`;

export default GlobalStyle;
