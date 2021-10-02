import {createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    border-sizing: border-box;
  }

  @media only screen and (max-width: 1920px) {
  html {
    font-size: 192px;
  }

  @media only screen and (max-width: 1366px) {
  html {
    font-size: 136px;
  }
}
}


`;


export default GlobalStyle;