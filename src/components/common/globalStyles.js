import { createGlobalStyle } from "styled-components";
import "modern-normalize/modern-normalize.css";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');
body{
    font-family: "Manrope", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
:root {
  line-height: 1.5;
  font-weight: 400;
  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

img {
  margin: 0;
  padding: 0;
  border: none;
  display: inline-block;
  vertical-align: middle;
  max-width: 100%;
  -webkit-user-drag: none;
}


h1 {
  font-size: 3.2em;
  line-height: 1.1;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }

}

ul{
  list-style: none;
}
`;
