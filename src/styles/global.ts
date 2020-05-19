import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 16px;
    font-family: sans-serif;
  }

  body,button,input{
    font-size: 16px;
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
  }

`;