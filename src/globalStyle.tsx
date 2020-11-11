import { createGlobalStyle } from "styled-components";
import bgImg from "./img/memphis-mini.png";
import PlayfairDisplay from "./fonts/PlayfairDisplay-VariableFont_wght.ttf";
import PlayfairDisplayItalic from "./fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf";

export const GlobalStyle = createGlobalStyle`

@font-face {
        font-family: 'Playfair Display';
        src: local('Playfair Display'), local('Playfair Display'),
        url(${PlayfairDisplay}) format('woff2'),
        url(${PlayfairDisplayItalic}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

html, body {
height: 100%;
}

  html, body, input {
    margin: 0;
    padding: 0;
    font-family: 'Nunito', 'Arial', sans-serif ;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    min-height: 100vh;
    text-align: center;
    background-image: url(${bgImg});
    align-items: center;
    width: 100%;
    justify-content: center;
    text-rendering: optimizeLegibility;
    margin: 0;
    font-family: 'Play Fair';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  #root {
    height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
    align-items: center;
  }
  
  /* #content {
  height: 100%;
  flex-grow: 2;
  display:flex;
  justify-content: center;
 
  } */
  `;
