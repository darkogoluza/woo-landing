import { createGlobalStyle } from "styled-components";
import font from "./fonts/CircularStd.ttf";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Circular Std";
  src: local("Circular Std"), url(${font}) format('trueType');
}
*{
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	font-family: 'Roboto', sans-serif;
}
`;

export default GlobalStyle;
