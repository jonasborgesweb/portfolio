import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
    font-family: 'Montserrat', sans-serif;
    scroll-behavior: smooth;
  }

  body,button,input{
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button{
    cursor: pointer;
  }

`;