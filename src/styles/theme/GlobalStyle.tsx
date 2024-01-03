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
    
    color-scheme: light;
    
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    min-height: 100vh;

    user-select: none;
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
    overflow-y: auto;
    width:100vw;

    color: ${({ theme }) => theme.colors.textPrimary};
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  }

  body {
    font-family: inherit;
  }

  a {
    color: ${({ theme }) => theme.colors.textSecondary};
    cursor: pointer;
    text-decoration: none;
    line-height: 0;
    border-radius: inherit;

  }

  li {
    list-style: none;
  }

  button, input, textarea, select, option {
    border: none;
    background: transparent;
    border-radius: inherit;
    font-family: inherit;
    outline: none;
  }


html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  font: inherit;
  line-height: normal;
}

  button,  select, option {
  cursor: pointer;

  }
  
  textarea {
    font-family: inherit;
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
		color: inherit;
    font-size: inherit;
    font-weight: inherit;
  }

  img {
    border-radius: inherit;
  }

  :hover {
    transition: all 0.1s ease-in-out;
  }

  :has(dialog:modal[open]) {
    overflow: hidden;
  }

  dialog::backdrop {
    background-color: ${({ theme }) => theme.colors.backdropColor};
  }

`;

export default GlobalStyle;
