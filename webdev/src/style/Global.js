import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: whitesmoke;
    
    color:#ccc;
  }
  * {
    margin: 0;
    padding: 0;
}
*,
*::before,
*::after {
    box-sizing: inherit;
}
html {
    box-sizing: border-box;
    font-size: 62.5%; 
    
}
body {
    font-family: 'Nunito', sans-serif;
    font-size : 1.6rem;
    font-weight: 400;
    line-height: 1.6;
    color: #aaa;
    min-height: 100vh;
}
`

export default GlobalStyle
